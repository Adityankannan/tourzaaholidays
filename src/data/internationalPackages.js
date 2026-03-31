// ─── International Package Data ───────────────────────────────────────────────
// Replace placeholder URLs with local imports once you drop images into:
//   src/assets/images/destinations/international/{slug}/{slug}_1.jpg, {slug}_2.jpg …
//
// Example:
//   import bali_1 from '../assets/images/destinations/international/bali/bali_1.jpg';
//   images: [bali_1, bali_2, bali_3]

const international = [
  // ── BALI ──────────────────────────────────────────────────────────────────
  // Drop your images as: src/assets/images/destinations/international/bali/bali_1.jpg etc.
  {
    id: "int-1",
    country: "Indonesia",
    destination: "Bali",
    slug: "bali",
    tagline: "Island of the Gods",
    description:
      "Immerse yourself in Bali's mystical temples, terraced rice paddies, vibrant nightlife and pristine ocean waves.",
    duration: "6N / 7D",
    startingPrice: "₹45,000",
    highlights: [
      "Ubud Temples",
      "Seminyak Beach",
      "Rice Terraces",
      "Mount Batur",
    ],
    images: [
      "https://picsum.photos/seed/bali_1/800/600",
      "https://picsum.photos/seed/bali_2/800/600",
      "https://picsum.photos/seed/bali_3/800/600",
    ],
    flag: "🇮🇩",
    continent: "South East Asia",
  },
  // ── DUBAI ─────────────────────────────────────────────────────────────────
  {
    id: "int-2",
    country: "United Arab Emirates",
    destination: "Dubai",
    slug: "dubai",
    tagline: "City of Gold & Glamour",
    description:
      "Discover the dazzling skyline of Dubai — from the Burj Khalifa and desert safaris to luxurious souks and palm-fringed beaches.",
    duration: "5N / 6D",
    startingPrice: "₹55,000",
    highlights: [
      "Burj Khalifa",
      "Desert Safari",
      "Dubai Mall",
      "Palm Jumeirah",
    ],
    images: [
      "https://picsum.photos/seed/dubai_1/800/600",
      "https://picsum.photos/seed/dubai_2/800/600",
      "https://picsum.photos/seed/dubai_3/800/600",
    ],
    flag: "🇦🇪",
    continent: "Middle East",
  },
  // ── MALAYSIA ──────────────────────────────────────────────────────────────
  {
    id: "int-3",
    country: "Malaysia",
    destination: "Kuala Lumpur & Langkawi",
    slug: "malaysia",
    tagline: "Truly Asia",
    description:
      "Experience the perfect blend of colonial heritage, modern skyscrapers, lush rainforests and idyllic island escapes.",
    duration: "5N / 6D",
    startingPrice: "₹38,000",
    highlights: [
      "Petronas Towers",
      "Langkawi Beach",
      "Batu Caves",
      "Cameron Highlands",
    ],
    images: [
      "https://picsum.photos/seed/malaysia_1/800/600",
      "https://picsum.photos/seed/malaysia_2/800/600",
      "https://picsum.photos/seed/malaysia_3/800/600",
    ],
    flag: "🇲🇾",
    continent: "South East Asia",
  },
  // ── MALDIVES ──────────────────────────────────────────────────────────────
  {
    id: "int-4",
    country: "Maldives",
    destination: "Maldives",
    slug: "maldives",
    tagline: "Heaven on Earth",
    description:
      "Overwater bungalows, crystal-clear lagoons, vibrant coral reefs — the Maldives is the ultimate tropical escape.",
    duration: "4N / 5D",
    startingPrice: "₹80,000",
    highlights: [
      "Overwater Villa",
      "Coral Snorkeling",
      "Sunset Cruise",
      "Dolphin Watching",
    ],
    images: [
      "https://picsum.photos/seed/maldives_1/800/600",
      "https://picsum.photos/seed/maldives_2/800/600",
      "https://picsum.photos/seed/maldives_3/800/600",
    ],
    flag: "🇲🇻",
    continent: "Indian Ocean",
  },
  // ── SINGAPORE ─────────────────────────────────────────────────────────────
  {
    id: "int-5",
    country: "Singapore",
    destination: "Singapore",
    slug: "singapore",
    tagline: "The Lion City",
    description:
      "A glittering metropolis where futuristic gardens, Michelin-starred hawker stalls and world-class entertainment coexist.",
    duration: "4N / 5D",
    startingPrice: "₹60,000",
    highlights: [
      "Gardens by the Bay",
      "Sentosa Island",
      "Marina Bay Sands",
      "Universal Studios",
    ],
    images: [
      "https://picsum.photos/seed/singapore_1/800/600",
      "https://picsum.photos/seed/singapore_2/800/600",
      "https://picsum.photos/seed/singapore_3/800/600",
    ],
    flag: "🇸🇬",
    continent: "South East Asia",
  },
  // ── SRI LANKA ─────────────────────────────────────────────────────────────
  {
    id: "int-6",
    country: "Sri Lanka",
    destination: "Sri Lanka",
    slug: "srilanka",
    tagline: "Pearl of the Indian Ocean",
    description:
      "Ancient temples, misty tea highlands, golden beaches and gentle elephants — Sri Lanka packs extraordinary diversity into one teardrop island.",
    duration: "6N / 7D",
    startingPrice: "₹35,000",
    highlights: [
      "Sigiriya Rock",
      "Kandy Temple",
      "Mirissa Beach",
      "Tea Plantation Tour",
    ],
    images: [
      "https://picsum.photos/seed/srilanka_1/800/600",
      "https://picsum.photos/seed/srilanka_2/800/600",
      "https://picsum.photos/seed/srilanka_3/800/600",
    ],
    flag: "🇱🇰",
    continent: "South Asia",
  },
  // ── THAILAND ──────────────────────────────────────────────────────────────
  {
    id: "int-7",
    country: "Thailand",
    destination: "Bangkok & Phuket",
    slug: "thailand",
    tagline: "Land of Smiles",
    description:
      "From Bangkok's ornate temples and vibrant street food to Phuket's turquoise bays — Thailand is a sensory feast.",
    duration: "7N / 8D",
    startingPrice: "₹42,000",
    highlights: [
      "Grand Palace",
      "Phi Phi Islands",
      "Night Bazaar",
      "Elephant Sanctuary",
    ],
    images: [
      "https://picsum.photos/seed/thailand_1/800/600",
      "https://picsum.photos/seed/thailand_2/800/600",
      "https://picsum.photos/seed/thailand_3/800/600",
    ],
    flag: "🇹🇭",
    continent: "South East Asia",
  },
];

export default international;
