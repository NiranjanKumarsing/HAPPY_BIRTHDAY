export interface LoveLetter {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string[];
  paperColor?: string;
  stampEmoji: string;
}

export const LOVE_LETTERS: LoveLetter[] = [
  {
    id: "letter-1",
    tag: "Letter I",
    title: "Aapki Ahmiyat",
    stampEmoji: "💌",
    excerpt: "Jann, kabhi kabhi sochta hoon ki meri zindagi mein aapka hona kitni badi khushi hai...",
    content: [
      "Jann, kabhi kabhi sochta hoon ki meri zindagi mein aapka hona kitni badi khushi hai.",
      "Aapke saath chhoti chhoti baatein bhi khaas lagti hain.",
      "Aapki ek muskurahat mera poora din achha kar sakti hai.",
      "Shayad main har baar lafzon mein na keh paun, lekin aap mere liye bohot zyada maayne rakhti hain."
    ],
  },
  {
    id: "letter-2",
    tag: "Letter II",
    title: "Meri Favourite Insaan",
    stampEmoji: "🌹",
    excerpt: "Han ji, duniya mein bohot log hain, bohot khoobsurat cheezein hain, lekin mere liye sabse khaas aap hain...",
    content: [
      "Han ji, duniya mein bohot log hain, bohot khoobsurat cheezein hain, lekin mere liye sabse khaas aap hain.",
      "Aapki baatein, aapka andaaz, aapki chhoti chhoti aadatein...",
      "Mujhe aapki har woh baat pyaari lagti hai jo aapko AAP banati hai."
    ],
  },
  {
    id: "letter-3",
    tag: "Letter III",
    title: "Aap Aur Main",
    stampEmoji: "✨",
    excerpt: "Na jaane kitne khoobsurat lamhe abhi jeene baaki hain...",
    content: [
      "Na jaane kitne khoobsurat lamhe abhi jeene baaki hain.",
      "Kitni saari baatein karni hain, kitni jagah ghoomni hain, kitni yaadein banani hain.",
      "Bas meri ek khwahish hai, aane wale har khoobsurat kal mein aap mere saath hon."
    ],
  },
  {
    id: "letter-4",
    tag: "Letter IV",
    title: "Meri Ek Khwahish",
    stampEmoji: "🕊️",
    excerpt: "Main chahta hoon ki aap apne har sapne ko poora karein...",
    content: [
      "Main chahta hoon ki aap apne har sapne ko poora karein.",
      "Aapko khud par utna hi pyaar aur bharosa ho jitna main aap par karta hoon.",
      "Aapki zindagi mein itni khushiyan hon ki udaasi ko jagah hi na mile.",
      "Aur jab bhi kabhi duniya mushkil lage, aapko yaad rahe ki koi hai jo hamesha aapke saath khada rehna chahta hai."
    ],
  },
];

