// Shared contact details and CTA labels. One label per intent, used site-wide.
export const PHONE_DISPLAY = "050-5712342";
export const PHONE_TEL = "tel:+972505712342";
export const EMAIL = "kobi@hershtiktec.com";

export const WHATSAPP_URL =
  "https://wa.me/972505712342?text=" +
  encodeURIComponent("שלום קובי, הגעתי מהאתר ואשמח לשמוע פרטים על בניית אתר.");

export const whatsappWith = (text: string) => "https://wa.me/972505712342?text=" + encodeURIComponent(text);

export const CTA_CONTACT ="שיחת היכרות בוואטסאפ";
export const CTA_CONTACT_SHORT = "שיחת היכרות";
export const CTA_WORK = "לתיק העבודות";

export const CATEGORY_NAMES: Record<string, string> = {
  landing: "דף נחיתה",
  corporate: "אתר תדמית",
  "e-commerce": "חנות אונליין",
};

export const EASE = [0.16, 1, 0.3, 1] as const;
