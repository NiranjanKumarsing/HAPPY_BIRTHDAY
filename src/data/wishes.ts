export interface WishCard {
  id: string;
  frontText: string;
  revealedText: string;
  badge: string;
  icon: string;
  accentColor: string;
}

export const BIRTHDAY_WISHES: WishCard[] = [
  {
    id: "wish-1",
    badge: "Dua 01",
    icon: "🌸",
    frontText: "Aapki har chhoti si khwahish poori ho.",
    revealedText: "Chahe woh koi badi mannat ho ya aadhi raat ki ice cream craving, meri Jann ki har khwahish sar aankhon par! ❤️",
    accentColor: "from-[#F8C8DC] to-[#F4AFC4]",
  },
  {
    id: "wish-2",
    badge: "Dua 02",
    icon: "✨",
    frontText: "Aapki zindagi hamesha khushiyon se bhari rahe.",
    revealedText: "Kabhi koi gham aapki taraf dekh bhi na sake. Har subah aapke chehre par nayi khushi le kar aaye.",
    accentColor: "from-[#FFF0B3] to-[#FFD6C2]",
  },
  {
    id: "wish-3",
    badge: "Dua 03",
    icon: "🎀",
    frontText: "Aap hamesha isi tarah muskurati rahein.",
    revealedText: "Aapki muskurahat mera favourite view hai. Jab aap hasti hain, meri poori thakan minto mein gayab ho jaati hai.",
    accentColor: "from-[#DCCBFA] to-[#F8C8DC]",
  },
  {
    id: "wish-4",
    badge: "Dua 04",
    icon: "🦋",
    frontText: "Aapko duniya ki saari khoobsurat cheezein milen.",
    revealedText: "Aap itni achhi hain ki aapko duniya ka sabse behtareen hissa milna chahiye... aur thoda sa mera pyaar bhi! Hehe.",
    accentColor: "from-[#D4F0E2] to-[#DCCBFA]",
  },
  {
    id: "wish-5",
    badge: "Dua 05",
    icon: "🧸",
    frontText: "Aur haan, aapko tang karne ka haq mujhe hamesha milta rahe. Hehe! ❤️",
    revealedText: "Yeh haq toh main kisi ko nahi lene dunga! Tang bhi main hi karunga, aur manane bhi main hi aaunga. Han ji!",
    accentColor: "from-[#EFA5B9] to-[#C65B82]",
  },
];

