const API_URL = (process.env.REACT_APP_API_URL || '').replace(/\/+$/, '');

const REQUEST_TIMEOUT_MS = 15000;
const DEFAULT_SUBJECT = 'eatskart website enquiry';
const BRAND = 'eatskart';

function normalizePhone(value) {
  if (!value) return '';
  const stripped = value.trim().replace(/[^\d+]/g, '').replace(/^\+/, '');
  if (stripped.length === 12 && stripped.startsWith('91')) return stripped.slice(2);
  if (stripped.length === 11 && stripped.startsWith('0')) return stripped.slice(1);
  return stripped;
}

export async function submitContactForm({
  fullName,
  email,
  phone,
  subject = DEFAULT_SUBJECT,
  serviceInterestedIn,
  description,
}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  const trimmedSubject = (subject || DEFAULT_SUBJECT).trim();

  let response;
  try {
    response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        brand: BRAND,
        fullName: fullName.trim(),
        email: email.trim(),
        phoneNumber: normalizePhone(phone),
        subject: trimmedSubject,
        serviceInterestedIn: (serviceInterestedIn || trimmedSubject).trim(),
        description: description.trim(),
      }),
      signal: controller.signal,
    });
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('This is taking too long. Please check your connection and try again.');
    }
    throw new Error('We could not connect right now. Please check your internet and try again.');
  } finally {
    clearTimeout(timeoutId);
  }

  let data = null;
  const rawText = await response.text();
  if (rawText) {
    try {
      data = JSON.parse(rawText);
    } catch {
      data = null;
    }
  }

  if (!response.ok) {
    throw new Error(getFriendlyErrorMessage(response.status, data));
  }

  return data;
}

function getFriendlyErrorMessage(status, data) {
  const serverMessage = typeof data?.message === 'string' ? data.message : '';
  const looksTechnical = /cannot post|not found|internal server|exception|api\/v1|econnrefused/i.test(
    serverMessage
  );

  if (status === 400 || status === 422) {
    if (serverMessage && !looksTechnical) return serverMessage;
    return 'Some details look incorrect. Please check the form and try again.';
  }

  if (status === 404) {
    return 'We could not send your message right now. Please try again in a little while.';
  }

  if (status === 429) {
    return 'You have sent too many messages. Please wait a moment and try again.';
  }

  if (status >= 500) {
    return 'Something went wrong on our side. Please try again later.';
  }

  if (serverMessage && !looksTechnical) return serverMessage;
  return 'We could not send your message right now. Please try again.';
}
