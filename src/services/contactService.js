// CRA only exposes REACT_APP_-prefixed vars to the browser bundle.
// scripts/sync-env.js mirrors NEXT_PUBLIC_API_URL (the value you edit in .env)
// into REACT_APP_API_URL on every `npm start` / `npm run build`, but that only
// works locally — Vercel's build never sees the gitignored .env file, so
// REACT_APP_API_URL is undefined there unless set in the Vercel dashboard.
// Falling back to the known base URL keeps the deployed build working either way.
const DEFAULT_API_URL = 'https://task-twerp-pandemic.ngrok-free.dev/api/v1';
const apiUrl = (process.env.REACT_APP_API_URL || DEFAULT_API_URL).replace(/\/$/, '');

const CONTACT_BRAND = 'eatskart';
const REQUEST_TIMEOUT_MS = 15000;
const DEFAULT_SUBJECT = 'Corporate website inquiry';

export async function submitContactForm({
  fullName,
  email,
  phone,
  subject = DEFAULT_SUBJECT,
  description,
}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response;
  try {
    response = await fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        subject: (subject || DEFAULT_SUBJECT).trim(),
        description: description.trim(),
        brand: CONTACT_BRAND,
      }),
      signal: controller.signal,
    });
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('The request timed out. Please check your connection and try again.');
    }
    throw new Error('Unable to reach the server. Please check your connection and try again.');
  } finally {
    clearTimeout(timeoutId);
  }

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || 'Something went wrong while sending your message. Please try again.');
  }

  return data;
}
