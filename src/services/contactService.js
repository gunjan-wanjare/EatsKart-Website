// const apiUrl = 'https://task-twerp-pandemic.ngrok-free.dev/api/v1/contact';
// CRA only exposes REACT_APP_-prefixed vars to the browser bundle.
// scripts/sync-env.js mirrors NEXT_PUBLIC_API_URL (the value you edit in .env)
// into REACT_APP_API_URL on every `npm start` / `npm run build`.
const apiUrl = process.env.REACT_APP_API_URL;

const CONTACT_BRAND = 'eatskart';
const REQUEST_TIMEOUT_MS = 15000;

export async function submitContactForm({ fullName, email, subject, description }) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response;
  try {
    response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: fullName.trim(),
        email: email.trim(),
        subject: subject.trim(),
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
