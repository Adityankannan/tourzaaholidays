// ─── WhatsApp Configuration ───────────────────────────────────────────────────
// Replace with your actual WhatsApp business number (country code + number, no + or spaces)
export const WHATSAPP_NUMBER = "919999999999";

export const getWhatsAppLink = (packageName = "") => {
  const message = encodeURIComponent(
    `Hi Tourzaa Holidays! I'm interested in the *${packageName}* package. Please share more details.`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

// ─── Section IDs ─────────────────────────────────────────────────────────────
export const SECTIONS = {
  HOME: "home",
  PACKAGES: "packages",
  CONTACT: "contact",
};

// ─── Navigation Links ─────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: `#${SECTIONS.HOME}` },
  { label: "Packages", href: `#${SECTIONS.PACKAGES}` },
  { label: "Contact", href: `#${SECTIONS.CONTACT}` },
];
