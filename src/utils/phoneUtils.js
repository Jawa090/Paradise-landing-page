/**
 * Format phone numbers automatically while typing or pasting.
 * Supports standard US 10-digit formatting `(XXX) XXX-XXXX` or `+1 (XXX) XXX-XXXX`,
 * and allows international formats (+CountryCode followed by digits).
 */
export function formatPhoneNumber(input = '') {
  if (!input) return '';

  const trimmed = input.trim();
  const hasPlus = trimmed.startsWith('+');
  const digits = input.replace(/\D/g, '');

  if (!digits) {
    return hasPlus ? '+' : '';
  }

  // Handle +1 (US / Canada country code)
  if (hasPlus && digits.startsWith('1')) {
    const localDigits = digits.slice(1, 11);
    if (localDigits.length === 0) return '+1 ';
    if (localDigits.length <= 3) return `+1 (${localDigits}`;
    if (localDigits.length <= 6) return `+1 (${localDigits.slice(0, 3)}) ${localDigits.slice(3)}`;
    return `+1 (${localDigits.slice(0, 3)}) ${localDigits.slice(3, 6)}-${localDigits.slice(6, 10)}`;
  }

  // Handle other international numbers with +
  if (hasPlus) {
    // Keep + and limit total digits to 15 (per ITU-T E.164 standard)
    const limitedDigits = digits.slice(0, 15);
    // Format lightly with spaced chunks (e.g. +44 7911 123456)
    if (limitedDigits.length <= 3) return `+${limitedDigits}`;
    if (limitedDigits.length <= 7) return `+${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3)}`;
    if (limitedDigits.length <= 11) return `+${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 7)} ${limitedDigits.slice(7)}`;
    return `+${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 7)} ${limitedDigits.slice(7, 11)} ${limitedDigits.slice(11)}`;
  }

  // Standard domestic US 10-digit formatting: (XXX) XXX-XXXX
  // If user pasted 11 digits starting with 1 without the plus, treat as US +1
  if (digits.length === 11 && digits.startsWith('1')) {
    const localDigits = digits.slice(1);
    return `(${localDigits.slice(0, 3)}) ${localDigits.slice(3, 6)}-${localDigits.slice(6, 10)}`;
  }

  const localDigits = digits.slice(0, 10);
  if (localDigits.length <= 3) {
    return localDigits.length > 0 ? `(${localDigits}` : '';
  }
  if (localDigits.length <= 6) {
    return `(${localDigits.slice(0, 3)}) ${localDigits.slice(3)}`;
  }
  return `(${localDigits.slice(0, 3)}) ${localDigits.slice(3, 6)}-${localDigits.slice(6, 10)}`;
}

/**
 * Validates a phone number.
 * Returns an error string if invalid, or empty string if valid.
 */
export function validatePhoneNumber(value = '') {
  const trimmed = (value || '').trim();
  if (!trimmed) {
    return 'Please enter your phone number.';
  }

  // Digits count
  const digits = trimmed.replace(/\D/g, '');

  // Must have at least 10 digits
  if (digits.length < 10) {
    return 'Please enter a valid phone number (at least 10 digits).';
  }

  // Maximum standard international digits is 15
  if (digits.length > 15) {
    return 'Phone number cannot exceed 15 digits.';
  }

  // Check for repeated identical characters like "0000000000" or "1111111111"
  if (/^(\d)\1+$/.test(digits)) {
    return 'Please enter a valid working phone number.';
  }

  // If standard US 10 digits (or 11 starting with 1), validate area code isn't 0xx or 1xx
  const usDigits = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : (digits.length === 10 ? digits : null);
  if (usDigits) {
    const areaCode = usDigits.slice(0, 3);
    if (areaCode.startsWith('0') || areaCode.startsWith('1')) {
      return 'Please enter a valid area code.';
    }
  }

  return '';
}
