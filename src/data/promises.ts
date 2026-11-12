export interface PromiseItem {
  id: string;
  number: string;
  tag: string;
  icon: string;
  promise: string;
  note: string;
}

export const APOLOGY_PROMISES: PromiseItem[] = [
  {
    id: "promise-1",
    number: "01",
    tag: "Pehla Vaada",
    icon: "👂🌸",
    promise: "Main aapki baat sirf sununga nahi, samajhne ki bhi koshish karunga.",
    note: "Sirf jawab dene ke liye nahi, balki dil se yeh jaan ne ke liye ki aap kya mehsoos kar rahi hain.",
  },
  {
    id: "promise-2",
    number: "02",
    tag: "Doosra Vaada",
    icon: "🕊️❤️",
    promise: "Apne mood se zyada aapki feelings ko importance dena seekhunga.",
    note: "Jab aapko meri zaroorat ho ya jab aapka mood off ho, tab sabse pehle aapki khushi aur sukoon meri priority hogi.",
  },
  {
    id: "promise-3",
    number: "03",
    tag: "Teesra Vaada",
    icon: "🌱✨",
    promise: "Perfect banne ka vaada nahi, lekin har din aapke liye better banne ki koshish zaroor karunga.",
    note: "Main galtiyon se seekhunga, aur hamesha ek aisa insaan banne ki koshish karunga jo aapki life mein sukoon laaye.",
  },
];

