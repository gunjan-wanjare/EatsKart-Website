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
