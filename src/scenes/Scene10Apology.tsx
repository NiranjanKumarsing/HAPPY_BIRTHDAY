import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, RotateCcw } from 'lucide-react';
import { CuteTeddy } from '../components/Decorations/CuteTeddy';
import { APOLOGY_PROMISES } from '../data/promises';
import { FallingPetals } from '../components/BackgroundEffects/FallingPetals';
import { soundEffects } from '../utils/soundEffects';

interface SceneProps {
  onRestart: () => void;
}

export const Scene10Apology: React.FC<SceneProps> = ({ onRestart }) => {
  const [isLetterOpened, setIsLetterOpened] = useState(false);
  const [stayInMoment, setStayInMoment] = useState(false);

  const handleOpenLetter = () => {
    soundEffects.playEnvelopeOpen();
    setIsLetterOpened(true);
  };

  return (
    <div className="relative min-h-[90vh] max-w-xl mx-auto py-8 px-4 flex flex-col items-center select-none">
      {/* Falling soft rose petals */}
      <FallingPetals count={14} />

      {/* Intro Header */}
      <div className="text-center mb-6 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F8C8DC] text-[#8B264A] mb-2 border border-[#EFA5B9] shadow-sm">
          <Heart className="w-3.5 h-3.5 fill-[#C65B82] text-[#C65B82]" />
          A Sincere Heart-to-Heart
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B264A] tracking-tight">
          Ek Chhoti Si MAAFI, Meri Jann Ke Naam... 🥺❤️
        </h2>
        <p className="font-handwriting text-xl sm:text-2xl text-[#8C6C7E] mt-2 max-w-md mx-auto">
          "Jann, birthday ki saari khushiyon ke beech... ek chhoti si baat dil se kehni thi."
        </p>
      </div>

      {/* Bashful Teddy Bear */}
      <div className="my-2 z-10">
        <CuteTeddy mood="sorry" size={110} />
      </div>

      {/* Envelope / Letter trigger button if not yet opened */}
      {!isLetterOpened ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 z-10 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenLetter}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F8C8DC] via-[#EFA5B9] to-[#C65B82] text-white font-bold text-base sm:text-lg shadow-romantic flex items-center gap-2.5 mx-auto cursor-pointer"
          >
            <span>Read my little apology 🥺</span>
            <Heart className="w-5 h-5 fill-white text-white" />
          </motion.button>
          <p className="text-xs text-[#8C6C7E] mt-2 italic">
            Tap to unfold this handwritten letter
          </p>
        </motion.div>
      ) : (
        /* The Full Handwritten Apology Letter */
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full z-10 mt-6 pt-4 space-y-6"
          >
            {/* The Main Letter Paper */}
            <div className="relative bg-[#FFFDF8] rounded-3xl p-6 sm:p-9 shadow-2xl border border-[#F8C8DC] vintage-letter-paper text-[#59404D]">
              {/* Wax Seal Decoration at top of paper */}
              <div className="flex justify-center -mt-12 mb-5 relative z-20">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E24C68] via-[#C23B55] to-[#8C1B33] flex items-center justify-center shadow-lg border-2 border-white/80">
                  <Heart className="w-7 h-7 text-white fill-white" />
                </div>
              </div>

              {/* Letter Heading */}
              <div className="text-center border-b border-[#F8C8DC] pb-4 mb-5">
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#C65B82] block mb-1">
                  Private & Personal • From Niranjan
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B264A]">
                  Ek Chhoti Si MAAFI, Meri Jann Ke Naam...
                </h3>
              </div>

              {/* Letter Body Paragraphs */}
              <div className="font-handwriting text-2xl sm:text-3xl leading-relaxed text-[#59404D] space-y-5">
                <p className="font-bold text-[#8B264A] text-3xl">
                  Han ji Jann...
                </p>

                <p>
                  Sabse pehle toh main aapse ek baat kehna chahta hoon.
                </p>

                <p>
                  I know, kabhi kabhi main aapko bohot tang karta hoon. Kabhi apne mood ki wajah se aapka mood kharab kar deta hoon, kabhi apni baaton mein itna kho jaata hoon ki yeh samajh hi nahi paata ki aap us waqt kya mehsoos kar rahi hongi.
                </p>

                <p>
                  Kabhi kabhi aapko samajhne ke bajaye main chahta hoon ki aap mujhe samjhein. Aur shayad isi chakkar mein main bhool jaata hoon ki aapki bhi apni feelings hain, aapka bhi apna mood hai, aur aapko bhi kabhi bas pyaar, patience aur thoda sa sukoon chahiye hota hai.
                </p>

                <p className="bg-[#F8C8DC]/30 p-3.5 rounded-2xl border border-[#F8C8DC]/60 font-serif italic text-lg sm:text-xl text-[#8B264A] leading-relaxed">
                  Jann, mujhe maaf kar dijiyega un saare lamhon ke liye jab meri wajah se aap pareshan hui hain, jab main aapki baat theek se nahi samajh paaya, ya jab aapko woh pyaar aur understanding nahi de paaya jiski aap haqdar hain.
                </p>

                <p>
                  Main yeh nahi kahunga ki main kabhi galti nahi karunga. Main perfect nahi hoon, aur shayad aage bhi kabhi galtiyan karunga.
                </p>

                <p className="font-bold text-[#C65B82]">
                  Lekin ek baat ka vaada zaroor karna chahta hoon...
                </p>

                <p>
                  Main hamesha khud ko behtar banane ki koshish karunga. Aapko sirf sunne ki nahi, balki samajhne ki bhi koshish karunga. Aapke mood, aapki feelings aur aapki chhoti chhoti baaton ko zyada ahmiyat dunga.
                </p>

                <p>
                  Main chahta hoon ki aap mere saath sirf khushiyon mein hi nahi, balki apne bure dinon mein bhi comfortable feel karein.
                </p>

                <p>
                  Aapko har baar strong banne ki zaroorat na pade. Kabhi aap naraz hon, kabhi udaas hon, kabhi bina kisi wajah ke chup rehna chahein, toh bhi main aapke saath patience aur pyaar se rehna seekhun.
                </p>

                <p>
                  Aur haan, meri Jann, aapko tang karna shayad meri aadat hai, lekin aapko hurt karna kabhi mera iraada nahi hona chahiye.
                </p>

                <p className="font-serif italic text-lg sm:text-xl text-[#7A4B62] bg-[#FFF0B3]/40 p-3.5 rounded-2xl border border-[#FFE28A] leading-relaxed">
                  I want to become someone who adds peace to your life, not someone who makes your difficult days even more difficult.
                </p>

                <p>
                  Main aapse sirf yeh nahi kehta ki aap mujhe samjhein. Main khud bhi aapko samajhna chahta hoon.
                </p>

                <p>
                  Aap mere liye bohot special hain, Han Ji. Aur main chahta hoon ki mere actions se bhi aapko yeh mehsoos ho, sirf mere words se nahi.
                </p>

                <p>
                  Thank you for being patient with me, for loving me, and for being my favourite person.
                </p>

                <p className="font-bold text-[#8B264A]">
                  I am sorry for the times I could have loved you better.
                </p>

                <p>
                  Aur main vaada karta hoon, koshish karna kabhi nahi chhodunga.
                </p>

                <p className="font-bold text-3xl text-[#C65B82]">
                  Aapki khushi mere liye bohot maayne rakhti hai, Jann.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-4 border-t border-[#F8C8DC] text-right">
                <p className="font-serif italic text-lg text-[#8C6C7E]">
                  Aapka hi,
                </p>
                <p className="font-handwriting font-bold text-3xl sm:text-4xl text-[#8B264A]">
                  Niranjan. ❤️
                </p>
              </div>
            </div>

            {/* THREE LITTLE PROMISES SECTION */}
            <div className="w-full pt-4 space-y-3">
              <div className="text-center mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF0B3] text-[#8B264A] border border-[#F3BE58]">
                  <Sparkles className="w-3.5 h-3.5 text-[#E24C68]" />
                  Aapke Liye Mere Teen Khaas Vaade
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#8B264A] mt-1">
                  Three Little Promises 🌸
                </h4>
              </div>

              {APOLOGY_PROMISES.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.15, duration: 0.5 }}
                  className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-paper border border-[#F8C8DC] flex items-start gap-3.5"
                >
                  <span className="text-2xl select-none">{item.icon}</span>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C65B82] block mb-0.5">
                      {item.tag}
                    </span>
                    <p className="font-handwriting font-bold text-2xl sm:text-3xl text-[#8B264A] leading-snug">
                      "{item.promise}"
                    </p>
                    <p className="text-xs text-[#8C6C7E] mt-1 font-sans">
                      {item.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FINAL APOLOGY MESSAGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-gradient-to-br from-[#FFFDF8] via-[#FFF7F0] to-[#F8C8DC]/40 rounded-3xl p-6 sm:p-8 shadow-romantic border border-[#EFA5B9] text-center space-y-4"
            >
              <h4 className="font-serif italic text-lg sm:text-xl text-[#8B264A]">
                Bas ek baat aur, Jann...
              </h4>

              <p className="font-handwriting text-2xl sm:text-3xl text-[#59404D] leading-relaxed">
                Aapko kabhi yeh mehsoos na ho ki aapki feelings meri feelings se kam important hain.
              </p>

              <p className="font-serif font-bold text-lg sm:text-xl text-[#C65B82]">
                I love you, and I want to keep learning how to love you better.
              </p>

              <p className="font-handwriting font-bold text-3xl sm:text-4xl text-[#8B264A]">
                Happy Birthday once again, meri favourite insaan. ❤️
              </p>

              <div className="pt-4 border-t border-[#F8C8DC] text-center">
                <p className="font-serif italic text-sm text-[#8C6C7E]">
                  Always yours,
                </p>
                <p className="font-handwriting font-bold text-3xl text-[#C65B82]">
                  Niranjan.
                </p>
              </div>
            </motion.div>

            {/* INTERACTIVE CHOICE: ASK HER IF SHE WANTS TO RELIVE THE EXPERIENCE */}
            <div className="pt-6 pb-12 flex flex-col items-center">
              <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-6 rounded-3xl border border-[#F8C8DC] shadow-romantic text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF0B3] border border-[#F3BE58] flex items-center justify-center text-lg mx-auto shadow-sm">
                  ✨
                </div>
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#8B264A]">
                  Jann, kya aap yeh poori khoobsurat journey ek baar phir se jeena chahengi? 🌸
                </h4>

                {!stayInMoment ? (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        soundEffects.playPop();
                        onRestart();
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F4AFC4] via-[#EFA5B9] to-[#C65B82] text-white font-bold text-xs sm:text-sm shadow-romantic flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                    >
                      <RotateCcw className="w-4 h-4 text-white" />
                      <span>Haan ji, bilkul! Relive again ❤️</span>
                    </button>

                    <button
                      onClick={() => {
                        soundEffects.playPop();
                        setStayInMoment(true);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#FFF7F0] border border-[#F8C8DC] text-[#8C6C7E] hover:bg-white font-semibold text-xs sm:text-sm cursor-pointer transition-all"
                    >
                      <span>Bas yeh lamha mehsoos karna hai ✨</span>
                    </button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 bg-[#D4F0E2]/60 border border-[#D4F0E2] rounded-2xl text-xs sm:text-sm text-[#285A43] font-medium"
                  >
                    <span>Aap hamesha mere dil ke sabse kareeb hain, Jann. Happy Birthday! 🤗💕</span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
