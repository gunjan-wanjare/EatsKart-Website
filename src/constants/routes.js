export const LEGAL_MODAL_IDS = new Set([
  'terms-and-conditions',
  'privacy-policy',
  'refund-policy',
]);

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', modalId: 'privacy-policy' },
  { label: 'Terms & Conditions', modalId: 'terms-and-conditions' },
  { label: 'Refund Policy', modalId: 'refund-policy' },
];

export function getLegalModalHref(modalId) {
  return `#legal-${modalId}`;
}
