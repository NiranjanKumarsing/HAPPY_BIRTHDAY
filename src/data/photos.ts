/**
 * CENTRAL PHOTO CONFIGURATION FILE
 * 
 * Niranjan's real photos are placed in public/images/ and linked here!
 */

export interface PhotoMemory {
  id: string;
  category: string;
  image: string; // e.g. "/images/chhavi-1.jpeg"
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
    // image: "/images/chhavi-1.jpeg",
    image: "/images/favorite-us.jpeg",

    title: "Aapki Khoobsurat Muskurahat",
    caption: "Your prettiest smile belongs here. Jab aap muskura deti hain, sach mein sab theek lagne lagta hai.",
    date: "A special moment",
    rotation: -2,
    sticker: "✨",
  },
  {
    id: "photo-2",
    category: "Us Together",
    // image: "/images/together-1.jpeg",
    image: "/images/chhavi-1.jpeg",

    title: "Hum Dono Ka Ek Pyaara Lamha",
    caption: "One of my favourite memories of us. Bas aap saath hon toh har jagah khoobsurat ban jaati hai.",
    date: "Unforgettable day",
    rotation: 2.5,
    sticker: "🌸",
  },
  {
    id: "photo-3",
    category: "Cute Moments",
    image: "/images/cute-moment.jpeg",
    title: "Aapka Woh Cute Andaaz",
    caption: "Woh random cute lamha jo hamesha chehre par hansi le aata hai.",
    date: "Candid joy",
    rotation: -2.5,
    sticker: "🧸",
  },
  {
    id: "photo-4",
    category: "Special Memories",
    // image: "/images/memory-special.jpeg",
    image: "/images/together-1.jpeg",
    title: "Kuch Yaadein Jo Hamesha Paas Hain",
    caption: "Some moments deserve to stay forever. Waqt kitna bhi aage badh jaaye, yeh yaadein dil ke qareeb rahengi.",
    date: "Golden memory",
    rotation: 2,
    sticker: "💖",
  },
  {
    id: "photo-5",
    category: "Us Together",
    // image: "/images/favorite-us.jpeg",
    image: "/images/memory-special.jpeg",

    title: "Meri Sabse Favourite Picture",
    caption: "A favourite picture of us. Meri Jann, aapke saath har pal ek gift ki tarah hai.",
    date: "Forever ours",
    rotation: -1.5,
    sticker: "🎀",
  },
];
