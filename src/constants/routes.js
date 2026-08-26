export const LEGAL_MODAL_IDS = new Set([
  'terms-and-conditions',
  'privacy-policy',
  'refund-policy',
]);

export const LEGAL_PATHS = {
  'privacy-policy': '/privacypolicy',
  'terms-and-conditions': '/termsconditions',
  'refund-policy': '/refundpolicy',
};

export const CORPORATE_PATH = '/corporate';
export const GET_IN_TOUCH_PATH = '/get-in-touch';

export const HOME_SECTION_IDS = new Set(['restaurants', 'popular-cuisines']);
export const CORPORATE_SECTION_IDS = new Set(['get-in-touch']);

export const GET_IN_TOUCH_HREF = GET_IN_TOUCH_PATH;

export const BRAND_URL = 'https://yaka.group';

export const DOWNLOAD_APP_HREF = '#download-app';
export const APP_STORE_HREF = '#app-store';
export const GOOGLE_PLAY_HREF = '#google-play';

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', modalId: 'privacy-policy' },
  { label: 'Terms & Conditions', modalId: 'terms-and-conditions' },
  { label: 'Refund Policy', modalId: 'refund-policy' },
];

export function getLegalModalHref(modalId) {
  return `#legal-${modalId}`;
}

export function getLegalPath(modalId) {
  return LEGAL_PATHS[modalId] || '/';
}
