#!/bin/bash
set -e

# Configuration
PROJECT_NAME="Paradise Landing Page"
DOMAIN="og.paradiseestimating.com"
REPO_URL="https://github.com/Jawa090/Paradise-landing-page.git"
BRANCH="main"

# CyberPanel / Linux user & paths
BASE_DIR="/home/$DOMAIN"
PUBLIC_HTML="$BASE_DIR/public_html"

# If public_html doesn't exist, fallback to base dir
if [ ! -d "$BASE_DIR" ]; then
    BASE_DIR="/home/og.paradiseestimating.com"
    PUBLIC_HTML="$BASE_DIR"
fi

WEB_USER=$(stat -c '%U' "$BASE_DIR" 2>/dev/null || echo "nobody")
WEB_GROUP=$(stat -c '%G' "$BASE_DIR" 2>/dev/null || echo "nobody")

echo "======== DEPLOYMENT STARTED: $DOMAIN ========"
date

# 1. Update Repository
if [ ! -d "$PUBLIC_HTML/.git" ]; then
    echo "Cloning repository for the first time into $PUBLIC_HTML..."
    mkdir -p "$PUBLIC_HTML"
    git clone $REPO_URL "$PUBLIC_HTML"
fi

cd "$PUBLIC_HTML"
echo "Resetting local changes and pulling fresh from $BRANCH..."
git fetch --all
git reset --hard origin/$BRANCH || git reset --hard origin/master

# 2. Environment Setup (if applicable)
if [ ! -f ".env" ] && [ -f ".env.example" ]; then
    echo "Creating .env from .env.example..."
    cp .env.example .env
fi
[ -f ".env.production" ] && cp -f .env.production .env && echo "Applied .env.production successfully." || true

# 3. Frontend Build
echo "--- Step 1: Frontend Installation & Build ---"
echo "Installing dependencies..."
npm install --legacy-peer-deps 2>/dev/null || npm install

echo "Running frontend build..."
npm run build

# 4. Deploy Static Files to Public Root
echo "--- Step 2: Deploying static build files ---"
if [ -d "dist" ]; then
    echo "Syncing build files to $PUBLIC_HTML root..."
    rsync -avz --exclude '.git' --exclude 'node_modules' --exclude 'dist' dist/ "$PUBLIC_HTML/"
    echo "Frontend build successfully synced to $PUBLIC_HTML"
else
    echo "ERROR: Frontend build failed. 'dist' folder not found."
    exit 1
fi

# 5. Finalize permissions for Web User
echo "--- Step 3: Finalizing permissions ---"
if [ "$WEB_USER" != "nobody" ]; then
    chown -R $WEB_USER:$WEB_GROUP "$PUBLIC_HTML"
fi
chmod -R 755 "$PUBLIC_HTML"

# 6. Restart LiteSpeed / Web Server
echo "--- Step 4: Restarting Web Server ---"
/usr/local/lsws/bin/lswsctrl restart 2>/dev/null || systemctl restart lsws 2>/dev/null || systemctl restart nginx 2>/dev/null || true

echo "======== DEPLOYMENT COMPLETE: $DOMAIN ========"
