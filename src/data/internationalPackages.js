// ─── International Package Data ───────────────────────────────────────────────

// Bali
import bali1 from "../assets/images/Bali/IMG_7413.JPG";
import bali2 from "../assets/images/Bali/IMG_7414.JPG";
import bali3 from "../assets/images/Bali/IMG_7415.JPG";

// Dubai
import dubai1 from "../assets/images/Dubai/IMG_7404.JPG";
import dubai2 from "../assets/images/Dubai/IMG_7469.JPG";
import dubai3 from "../assets/images/Dubai/car-desert.jpg";

// Malaysia
import malaysia1 from "../assets/images/Malaysia/vecteezy_batu-caves-golden-murugan-statue-in-selangor-malaysia_4964608.jpg";
import malaysia2 from "../assets/images/Malaysia/vecteezy_evening-in-kuala-lumpur-presents-tall-skyscrapers-glowing_71161042.jpg";
import malaysia3 from "../assets/images/Malaysia/vecteezy_putra-mosque-most-famous-tourist-attraction-in-kuala-lumpur_21720982.JPG";

// Maldives
import maldives1 from "../assets/images/Maldives/IMG_7472.JPG";
import maldives2 from "../assets/images/Maldives/piqsels.com-id-zkibx.jpg";
import maldives3 from "../assets/images/Maldives/wallpaperflare.com_wallpaper.jpg";

// Singapore
import singapore1 from "../assets/images/Singapore/merlion-statue-cityscape-singapore.jpg";
import singapore2 from "../assets/images/Singapore/outside-gardens-by-bay-singapore.jpg";
import singapore3 from "../assets/images/Singapore/cheongcs-singapore-jewel-4828998.jpg";

// Sri Lanka
import srilanka1 from "../assets/images/Sri lanka/IMG_7449.JPG";
import srilanka2 from "../assets/images/Sri lanka/IMG_7452.JPG";
import srilanka3 from "../assets/images/Sri lanka/IMG_7455.JPG";

// Thailand
import thailand1 from "../assets/images/Thailand/hanny-naibaho-DHueZ7ZhDHE-unsplash.jpg";
import thailand2 from "../assets/images/Thailand/miltiadis-fragkidis-xFOKUJgpQoU-unsplash.jpg";
import thailand3 from "../assets/images/Thailand/timothy-blake-GbJfCjeupDE-unsplash.jpg";

const international = [
  // ── BALI ──────────────────────────────────────────────────────────────────
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
    images: [bali1, bali2, bali3],
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
    images: [dubai1, dubai2, dubai3],
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
    images: [malaysia1, malaysia2, malaysia3],
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
    images: [maldives1, maldives2, maldives3],
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
    images: [singapore1, singapore2, singapore3],
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
    images: [srilanka1, srilanka2, srilanka3],
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
    images: [thailand1, thailand2, thailand3],
    flag: "🇹🇭",
    continent: "South East Asia",
  },
];

export default international;
