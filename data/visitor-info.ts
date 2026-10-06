// Verified 2026-10-05 against the official sources below.
// Hours describe the information desk and parking, not every tenant or holiday.
type VisitorInformation = {
  address: string;
  street: string;
  city: string;
  phone: string;
  phoneHref: string;
  email: string;
  directions: string;
  openingHours?: { value: string; scope: string; note: string };
  parking?: { spaces?: number; level?: string; hours?: string; charging?: string };
  accessibility?: { lifts?: string; entrance?: string; parking?: string; restrooms?: string };
  transport?: { mode: string; description: string }[];
  locationEmbed?: string;
};

const address = "29 Sherif Khimshiashvili St, Batumi 6000";
export const visitorInformation: VisitorInformation = {
  address,
  street: "29 Sherif Khimshiashvili St",
  city: "Batumi 6000, Georgia",
  phone: "+995 422 20 00 06",
  phoneHref: "tel:+995422200006",
  email: "info@grandmall.com.ge",
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`Grand Mall, ${address}`)}`,
  openingHours: { value: "10:00–22:00", scope: "Information desk", note: "Individual venue hours may differ. Check your destination before arriving." },
  parking: { spaces: 150, level: "−1", hours: "10:00–22:00", charging: "Electric vehicle charging is available in the parking area." },
  accessibility: { lifts: "Lifts are available for moving between levels.", entrance: "An accessible entrance is available.", parking: "Dedicated accessible parking spaces are available." },
  // Route-planning guidance, not claims about bus routes, travel times or fares.
  transport: [
    { mode: "Public transport", description: "Ask our information team about current transport options before you travel." },
    { mode: "Taxi", description: "Use Grand Mall and the street address as your destination." },
    { mode: "Car", description: "Open directions from your starting point. See parking information below." },
    { mode: "Walking", description: "Choose walking directions in your maps app to plan a route from where you are." },
  ],
};

export const visitorSources = {
  address: "https://grandmall.com.ge/privacy-policy",
  contact: "https://grandmall.com.ge/en",
  services: "https://grandmall.com.ge/services",
  parkingLevel: "https://grandmall.com.ge/en",
};

// The homepage derives its existing presentation from the same facts.
export const visitorFields = [
  { label: "Address", value: visitorInformation.street, note: visitorInformation.city },
  ...(visitorInformation.openingHours ? [{ label: "Opening hours", value: visitorInformation.openingHours.value, note: "Information desk. Individual venue hours may differ." }] : []),
  ...(visitorInformation.parking?.spaces ? [{ label: "Parking", value: `${visitorInformation.parking.spaces} parking spaces`, note: [visitorInformation.parking.level ? `Level ${visitorInformation.parking.level}` : undefined, visitorInformation.parking.hours ? `Daily ${visitorInformation.parking.hours}` : undefined].filter(Boolean).join(" · ") }] : []),
  { label: "Transport", value: "Plan your route", note: "Ask our team about transport options." },
  ...(visitorInformation.accessibility ? [{ label: "Accessibility", value: [visitorInformation.accessibility.lifts && "Lifts", visitorInformation.accessibility.entrance && "accessible entrance", visitorInformation.accessibility.parking && "parking"].filter(Boolean).join(", "), note: "Our team can help you plan your visit." }] : []),
];
