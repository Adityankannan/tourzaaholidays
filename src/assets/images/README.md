# Image Assets — Tourzaa Holidays

## Folder Structure

```
src/assets/images/
├── hero/
│   └── hero-bg.jpg          ← Main hero background (1920×1080, landscape)
│
├── destinations/
│   ├── international/
│   │   ├── dubai.jpg         ← 800×600
│   │   ├── bali.jpg
│   │   ├── thailand.jpg
│   │   ├── singapore.jpg
│   │   ├── malaysia.jpg
│   │   ├── maldives.jpg
│   │   ├── paris.jpg
│   │   └── switzerland.jpg
│   │
│   └── domestic/
│       ├── kashmir.jpg       ← 800×600
│       ├── kerala.jpg
│       ├── goa.jpg
│       ├── rajasthan.jpg
│       ├── himachal.jpg
│       ├── andaman.jpg
│       ├── uttarakhand.jpg
│       └── tamil-nadu.jpg
│
└── testimonials/
    ├── customer1.jpg         ← 100×100, square headshot
    ├── customer2.jpg
    └── ...
```

## How to replace placeholder images

1. Add your actual image files to the respective folders above.
2. In `src/data/internationalPackages.js` and `src/data/domesticPackages.js`, update the `image` field:

   ```js
   // Before (placeholder):
   image: 'https://picsum.photos/seed/dubai-uae/800/600',

   // After (local asset):
   import dubaiImg from '../assets/images/destinations/international/dubai.jpg';
   // then in the object:
   image: dubaiImg,
   ```

3. For the hero background, update `src/components/Hero/Hero.jsx`:
   ```js
   import heroBg from "../../assets/images/hero/hero-bg.jpg";
   // then replace the src attribute:
   src = { heroBg };
   ```
