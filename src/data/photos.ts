/**
 * CENTRAL PHOTO CONFIGURATION FILE
 * 
 * Niranjan can add real photographs anytime by simply replacing the image paths here.
 * Place photos in public/images/ (e.g., public/images/chhavi-1.jpg) and reference them here.
 * If an image path is empty or fails to load, a romantic illustrated scrapbook placeholder will automatically render!
 */

export interface PhotoMemory {
  id: string;
  category: string;
  image: string; // e.g. "/images/chhavi-1.jpg" or empty string "" for placeholder
  title: string;
  caption: string;
  date?: string;
  rotation?: number; // visual tilt for scrapbook feel (-4 to +4 deg)
  sticker?: string; // decorative emoji or sticker
}

export const PHOTO_MEMORIES: PhotoMemory[] = [
  {
    id: "photo-1",
    category: "Chhavi",
    image: "", // Place your photo at public/images/chhavi-1.jpg
    title: "Aapki Khoobsurat Muskurahat",
    caption: "Your prettiest smile belongs here. Jab aap muskura deti hain, sach mein sab theek lagne lagta hai.",
    date: "A special moment",
    rotation: -2,
    sticker: "✨",
  },
  {
    id: "photo-2",
    category: "Us Together",
    image: "", // Place your photo at public/images/together-1.jpg
    title: "Hum Dono Ka Ek Pyaara Lamha",
    caption: "One of my favourite memories of us. Bas aap saath hon toh har jagah khoobsurat ban jaati hai.",
    date: "Unforgettable day",
    rotation: 3,
    sticker: "🌸",
  },
  {
    id: "photo-3",
    category: "Cute Moments",
    image: "", // Place your photo at public/images/cute-moment.jpg
    title: "Aapka Woh Cute Andaaz",
    caption: "Tap here to add your favourite picture. Woh random cute lamha jo hamesha chehre par hansi le aata hai.",
    date: "Candid joy",
    rotation: -3,
    sticker: "🧸",
  },
  {
    id: "photo-4",
    category: "Special Memories",
    image: "", // Place your photo at public/images/memory-special.jpg
    title: "Kuch Yaadein Jo Hamesha Paas Hain",
    caption: "Some moments deserve to stay forever. Waqt kitna bhi aage badh jaaye, yeh yaadein dil ke qareeb rahengi.",
    date: "Golden memory",
    rotation: 2,
    sticker: "💖",
  },
  {
    id: "photo-5",
    category: "Us Together",
    image: "", // Place your photo at public/images/favorite-us.jpg
    title: "Meri Sabse Favourite Picture",
    caption: "A favourite picture of us. Meri Jann, aapke saath har pal ek gift ki tarah hai.",
    date: "Forever ours",
    rotation: -1,
    sticker: "🎀",
  },
];

