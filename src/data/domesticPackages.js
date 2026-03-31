// ─── Domestic Package Data ────────────────────────────────────────────────────
// Replace placeholder URLs with local imports once you drop images into:
//   src/assets/images/destinations/domestic/{slug}/{slug}_1.jpg etc.

const domestic = [
  {
    id: "dom-1",
    state: "Jammu & Kashmir",
    destination: "Kashmir",
    slug: "kashmir",
    tagline: "Paradise on Earth",
    description:
      "Majestic snow-clad mountains, shimmering Dal Lake houseboats, saffron meadows and warm Kashmiri hospitality await you.",
    duration: "6N / 7D",
    startingPrice: "₹22,000",
    highlights: [
      "Dal Lake Houseboat",
      "Gulmarg Gondola",
      "Pahalgam Valley",
      "Tulip Garden",
    ],
    images: [
      "https://picsum.photos/seed/kashmir_1/800/600",
      "https://picsum.photos/seed/kashmir_2/800/600",
      "https://picsum.photos/seed/kashmir_3/800/600",
    ],
    flag: "🏔️",
    region: "North India",
  },
  {
    id: "dom-2",
    state: "Kerala",
    destination: "Kerala",
    slug: "kerala",
    tagline: "God's Own Country",
    description:
      "Drift through serene backwaters on a kettuvallam, walk through tea-scented hills of Munnar and unwind on pristine Kovalam beaches.",
    duration: "5N / 6D",
    startingPrice: "₹18,000",
    highlights: [
      "Alleppey Backwaters",
      "Munnar Tea Gardens",
      "Periyar Wildlife",
      "Kovalam Beach",
    ],
    images: [
      "https://picsum.photos/seed/kerala_1/800/600",
      "https://picsum.photos/seed/kerala_2/800/600",
      "https://picsum.photos/seed/kerala_3/800/600",
    ],
    flag: "🌴",
    region: "South India",
  },
  {
    id: "dom-3",
    state: "Goa",
    destination: "Goa",
    slug: "goa",
    tagline: "Sun, Sand & Spice",
    description:
      "Golden beaches, Portuguese-era forts, spice-infused cuisine and a vibrant nightlife — Goa has an irresistible charm for every traveller.",
    duration: "4N / 5D",
    startingPrice: "₹15,000",
    highlights: [
      "Baga & Calangute Beach",
      "Dudhsagar Falls",
      "Old Goa Churches",
      "Cruise Party",
    ],
    images: [
      "https://picsum.photos/seed/goa_1/800/600",
      "https://picsum.photos/seed/goa_2/800/600",
      "https://picsum.photos/seed/goa_3/800/600",
    ],
    flag: "🏖️",
    region: "West India",
  },
  {
    id: "dom-4",
    state: "Rajasthan",
    destination: "Rajasthan",
    slug: "rajasthan",
    tagline: "Land of the Maharajas",
    description:
      "Opulent palaces, towering desert forts, camel-dotted dunes and a riot of colour make Rajasthan one of India's most captivating states.",
    duration: "7N / 8D",
    startingPrice: "₹24,000",
    highlights: [
      "Jaipur Pink City",
      "Jaisalmer Fort",
      "Udaipur Lake Palace",
      "Ranthambore Tiger Reserve",
    ],
    images: [
      "https://picsum.photos/seed/rajasthan_1/800/600",
      "https://picsum.photos/seed/rajasthan_2/800/600",
      "https://picsum.photos/seed/rajasthan_3/800/600",
    ],
    flag: "🏰",
    region: "North India",
  },
  {
    id: "dom-5",
    state: "Himachal Pradesh",
    destination: "Shimla & Manali",
    slug: "himachal",
    tagline: "Valley of the Gods",
    description:
      "Colonial hill-town charming Shimla, roaring Beas river, Rohtang Pass snowfields and Spiti Valley's lunar landscapes — pure Himalayan bliss.",
    duration: "6N / 7D",
    startingPrice: "₹20,000",
    highlights: [
      "Rohtang Pass",
      "Solang Valley",
      "Mall Road Shimla",
      "Hadimba Temple",
    ],
    images: [
      "https://picsum.photos/seed/himachal_1/800/600",
      "https://picsum.photos/seed/himachal_2/800/600",
      "https://picsum.photos/seed/himachal_3/800/600",
    ],
    flag: "🏔️",
    region: "North India",
  },
  {
    id: "dom-6",
    state: "Andaman & Nicobar Islands",
    destination: "Andaman",
    slug: "andaman",
    tagline: "Pearl of the Orient",
    description:
      "Pristine coral reefs, powder-white beaches, bioluminescent bays and the historic Cellular Jail make Andaman a tropical treasure chest.",
    duration: "5N / 6D",
    startingPrice: "₹28,000",
    highlights: [
      "Radhanagar Beach",
      "Scuba Diving",
      "Cellular Jail",
      "Havelock Island",
    ],
    images: [
      "https://picsum.photos/seed/andaman_1/800/600",
      "https://picsum.photos/seed/andaman_2/800/600",
      "https://picsum.photos/seed/andaman_3/800/600",
    ],
    flag: "🐠",
    region: "Island Territory",
  },
  {
    id: "dom-7",
    state: "Uttarakhand",
    destination: "Rishikesh & Nainital",
    slug: "uttarakhand",
    tagline: "Devbhoomi — Land of Gods",
    description:
      "Raft the Ganges in Rishikesh, seek blessings at Kedarnath, stroll the Mall Road by the mirror lake of Nainital.",
    duration: "5N / 6D",
    startingPrice: "₹16,000",
    highlights: [
      "River Rafting",
      "Laxman Jhula",
      "Kedarnath Temple",
      "Nainital Lake",
    ],
    images: [
      "https://picsum.photos/seed/uttarakhand_1/800/600",
      "https://picsum.photos/seed/uttarakhand_2/800/600",
      "https://picsum.photos/seed/uttarakhand_3/800/600",
    ],
    flag: "🙏",
    region: "North India",
  },
  {
    id: "dom-8",
    state: "Tamil Nadu",
    destination: "Tamil Nadu",
    slug: "tamil-nadu",
    tagline: "Temple Land of the South",
    description:
      "Dravidian temple gopurams, silk weavers of Kanchipuram, tranquil Marina Beach and the hills of Kodaikanal — Tamil Nadu's diversity astounds.",
    duration: "6N / 7D",
    startingPrice: "₹17,000",
    highlights: [
      "Meenakshi Amman Temple",
      "Marina Beach",
      "Ooty Nilgiris",
      "Thanjavur Big Temple",
    ],
    images: [
      "https://picsum.photos/seed/tamilnadu_1/800/600",
      "https://picsum.photos/seed/tamilnadu_2/800/600",
      "https://picsum.photos/seed/tamilnadu_3/800/600",
    ],
    flag: "🕌",
    region: "South India",
  },
];

export default domestic;
