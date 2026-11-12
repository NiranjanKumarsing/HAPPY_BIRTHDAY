export interface LittleThing {
  id: string;
  title: string;
  shortTag: string;
  icon: string;
  description: string;
  reactionMessage: string;
  bearReaction: "blush" | "dance" | "hug" | "wink" | "heart";
}

export const LITTLE_THINGS: LittleThing[] = [
  {
    id: "thing-1",
    title: "Aapki Smile",
    shortTag: "Pure Magic",
    icon: "✨",
    description: "Jab aap sachche dil se muskura deti hain, toh maano aas paas sab kuch thoda zyada chamakne lagta hai. It heals everything.",
    reactionMessage: "Teddy says: 'Aapki smile se poora din roshan ho jaata hai!' 🌸",
    bearReaction: "blush",
  },
  {
    id: "thing-2",
    title: "Aapka Baat Karne Ka Andaaz",
    shortTag: "So Sweet",
    icon: "💬",
    description: "Jis tarah se aap baatein karti hain, chhoti chhoti details batati hain, main bas ghanton chup chap sun sakta hoon.",
    reactionMessage: "Teddy says: 'Aapki baatein sabse pyaari lagti hain!' 🧸",
    bearReaction: "dance",
  },
  {
    id: "thing-3",
    title: "Aapki Cute Si Narazgi",
    shortTag: "The Cutest",
    icon: "🥺",
    description: "Jab aap thoda sa muh bana leti hain na, toh sach kahun toh aur bhi zyada cute lagti hain. Par main jaldi mana bhi leta hoon!",
    reactionMessage: "Teddy says: 'Bas thodi der naraz rahiye, phir smile kijiye!' 🎀",
    bearReaction: "wink",
  },
  {
    id: "thing-4",
    title: "Aapki Hasi",
    shortTag: "My Melody",
    icon: "🎵",
    description: "Aapki khul ke hasne ki awaaz meri life ka sabse favourite soundtrack hai. Aap hasti rahein, bas yahi dua hai.",
    reactionMessage: "Teddy says: 'Yeh hasi hamesha barkarar rahe!' 💕",
    bearReaction: "heart",
  },
  {
    id: "thing-5",
    title: "Aapka Pyaar",
    shortTag: "Purest Gift",
    icon: "💖",
    description: "Aap jis care aur warmth ke saath pyaar jatati hain, woh mujhe hamesha lucky feel karwata hai.",
    reactionMessage: "Teddy gives a big warm hug! 🤗",
    bearReaction: "hug",
  },
  {
    id: "thing-6",
    title: "Aapki Chhoti Chhoti Aadatein",
    shortTag: "Only You",
    icon: "🌸",
    description: "Aapka baalon ko theek karna, baaton ke beech achanak has padna, aur woh cute si quirks jo sirf aapki hain.",
    reactionMessage: "Teddy says: 'Aap jaisi koi aur nahi!' 🌷",
    bearReaction: "blush",
  },
  {
    id: "thing-7",
    title: "Aapka Mera Khayal Rakhna",
    shortTag: "Care & Warmth",
    icon: "🕊️",
    description: "Aap poochti hain 'khana khaya?', 'theek ho na?'—yeh chhoti si fikr dil ko bohot sukoon deti hai.",
    reactionMessage: "Teddy says: 'Aapki care sabse anmol hai.' ❤️",
    bearReaction: "heart",
  },
  {
    id: "thing-8",
    title: "Aapka Woh Cute Sa Andaaz",
    shortTag: "Naturally Adorable",
    icon: "🎀",
    description: "Aap chahe na chahein, aapka andaaz hi itna pyara hai ki kisi ka bhi dil jeet le. Especially mera!",
    reactionMessage: "Teddy says: 'Ekdum 10 out of 10 cuteness!' 🧸",
    bearReaction: "dance",
  },
  {
    id: "thing-9",
    title: "Aapki Presence",
    shortTag: "Home",
    icon: "🏡",
    description: "Aap mere saath hon toh chahe hum chup bhi baithein, lagta hai ki duniya ki sabse safe aur khoobsurat jagah par hoon.",
    reactionMessage: "Teddy says: 'Aap hain toh sab kuch mukammal hai.' ✨",
    bearReaction: "hug",
  },
];

