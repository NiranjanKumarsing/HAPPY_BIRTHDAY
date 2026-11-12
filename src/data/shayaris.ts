export interface ShayariItem {
  id: string;
  number: string;
  title: string;
  lines: string[];
  themeHint: string;
  illustration: string;
}

export const SHAYARIS: ShayariItem[] = [
  {
    id: "shayari-1",
    number: "01",
    title: "Aapki Muskurahat",
    lines: [
      "Chaand ki roshni bhi pheeki si lagti hai,",
      "Jab aapki muskurahat nazar aati hai.",
      "Kya likhun main aapki tareef mein Jann,",
      "Har baat aap par aakar ruk jaati hai."
    ],
    themeHint: "Chand aur aapki hansi",
    illustration: "🌙",
  },
  {
    id: "shayari-2",
    number: "02",
    title: "Aapka Zikr",
    lines: [
      "Aapka zikr ho toh lafz khoobsurat ho jaate hain,",
      "Aap paas hon toh din bhi Eid ban jaate hain.",
      "Yun toh bohot kuch hai maangne ko zindagi se,",
      "Par aap saath hon toh sab armaan poore ho jaate hain."
    ],
    themeHint: "Armaan aur sukoon",
    illustration: "🌹",
  },
  {
    id: "shayari-3",
    number: "03",
    title: "Meri Duaon Mein",
    lines: [
      "Na chaand chahiye, na sitaaron ki farmaish hai,",
      "Bas aapki muskurahat ki hamesha khwahish hai.",
      "Aap yun hi khush rahein har ek din,",
      "Meri duaon mein bas itni si guzarish hai."
    ],
    themeHint: "Khwahish sirf aapki",
    illustration: "✨",
  },
  {
    id: "shayari-4",
    number: "04",
    title: "Aapke Naam Ek Nayi Dua",
    lines: [
      "Har din aapke naam ek nayi dua likhta hoon,",
      "Kabhi muskurahat, kabhi khushi ki wajah likhta hoon.",
      "Aapko shayad andaaza bhi nahi meri Jann,",
      "Main apni har khoobsurat khwahish mein aapko likhta hoon."
    ],
    themeHint: "Khwahishon mein aap",
    illustration: "🕊️",
  },
  {
    id: "shayari-5",
    number: "05",
    title: "Zindagi Ka Safar",
    lines: [
      "Zindagi ke safar mein bas itni si arzoo hai,",
      "Aapki hansi rahe, aur har din khushboo ho.",
      "Har kal mein aapka saath milta rahe,",
      "Meri har dua mein bas aapka naam ho."
    ],
    themeHint: "Hamesha ka saath",
    illustration: "🌸",
  },
];

