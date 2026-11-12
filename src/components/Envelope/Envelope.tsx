import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { triggerHeartConfetti } from '../../utils/confetti';
import { soundEffects } from '../../utils/soundEffects';

interface EnvelopeProps {
  onContinue: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onContinue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLetterExtended, setIsLetterExtended] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    soundEffects.playEnvelopeOpen();
    setIsOpen(true);
    triggerHeartConfetti();

    // After flap opens, extend letter smoothly
    setTimeout(() => {
      setIsLetterExtended(true);
    }, 700);
  };

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center select-none px-3">
      {/* Visual Header / Instructions */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF0B3]/80 text-[#8B264A] shadow-sm mb-2 border border-[#FFF0B3]">
          <Sparkles className="w-3.5 h-3.5 text-[#F3BE58]" />
          Khaas Aapke Liye
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B264A] tracking-wide">
          Jann, aapke liye ek chhota sa khat hai...
        </h3>
        {!isOpen && (
          <motion.p
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-sm sm:text-base text-[#8C6C7E] mt-1 font-medium flex items-center justify-center gap-1"
          >
            Tap the envelope to open it 💌
          </motion.p>
        )}
      </motion.div>

      {/* Main Envelope Interactive Container */}
      <div className="relative w-full aspect-[4/3] max-w-[340px] sm:max-w-[380px] flex items-center justify-center">
        {/* Glow behind envelope */}
        <div className="absolute inset-4 bg-gradient-to-tr from-[#F8C8DC] via-[#DCCBFA] to-[#FFF0B3] rounded-3xl blur-2xl opacity-60 pointer-events-none" />

        {/* Envelope Body */}
        <motion.div
          animate={
            isOpen
              ? { y: isLetterExtended ? 60 : 0 }
              : {
                  y: [0, -8, 0],
                  rotate: [0, 0.5, -0.5, 0],
                }
          }
          transition={{
            y: { duration: 0.6, ease: 'easeOut' },
            repeat: isOpen ? 0 : Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
          onClick={handleOpen}
          className={`relative w-full h-[220px] sm:h-[240px] rounded-2xl cursor-pointer ${
            !isOpen ? 'hover:scale-[1.02] active:scale-[0.98]' : ''
          } transition-transform`}
          style={{ perspective: 1000 }}
        >
          {/* Backplate of Envelope */}
          <div className="absolute inset-0 bg-[#F4AFC4] rounded-2xl shadow-envelope border border-[#EFA5B9]/60 overflow-hidden">
            {/* Inner envelope decorative lining with tiny hearts */}
            <div className="absolute inset-0 bg-[#FFF7F0] opacity-80 paper-texture" />
          </div>

          {/* THE LETTER (rises out of envelope) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.88 }}
                animate={
                  isLetterExtended
                    ? { y: -160, opacity: 1, scale: 1 }
                    : { y: -50, opacity: 0.9, scale: 0.92 }
                }
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-2 sm:inset-x-3 -top-6 z-20"
              >
                <div className="bg-[#FFFDF8] rounded-2xl p-5 sm:p-6 shadow-2xl border border-[#F8C8DC] vintage-letter-paper text-[#59404D]">
                  {/* Letter Header Stamp */}
                  <div className="flex items-center justify-between border-b border-[#F8C8DC] pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#F8C8DC] flex items-center justify-center text-sm font-bold text-[#8B264A]">
                        C
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#C65B82] block">
                          Air Mail • For Chhavi
                        </span>
                        <span className="text-[10px] text-[#8C6C7E]">
                          Exclusively Made With Love
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 border-2 border-dashed border-[#F4AFC4] rounded-lg flex items-center justify-center text-lg bg-[#FFF0B3]/40 rotate-3">
                      ❤️
                    </div>
                  </div>

                  {/* Letter Content */}
                  <div className="font-handwriting text-xl sm:text-2xl leading-relaxed text-[#59404D] space-y-3">
                    <p className="font-bold text-[#8B264A] text-2xl sm:text-3xl">
                      To my favourite person, Chhavi ❤️
                    </p>
                    <p>
                      Han ji Jann, sabse pehle toh aapko janamdin ki bohot bohot badhai!
                    </p>
                    <p className="text-lg sm:text-xl text-[#7A4B62]">
                      Aap soch rahi hongi ki birthday wish itni late kyun aayi...
                    </p>
                    <p className="bg-[#FFF0B3]/50 p-2.5 rounded-xl border border-[#FFF0B3] text-base sm:text-lg italic font-sans text-[#8B264A]">
                      Toh madam ji, iske peeche ek bahut hi genuine technical reason hai:
                      <span className="block font-semibold mt-1">
                        Aapke liye kuch special banane mein itna heavy codebase ho gaya ki developer sahab khud usmein phas gaye! 😭✨
                      </span>
                    </p>
                    <p>
                      Lekin sach kahun toh, aapke liye kuch ordinary banana kabhi option hi nahi tha. Aap deserve karti hain kuch aisa jo sirf aapka ho.
                    </p>
                    <p>
                      Aur yeh chhoti si duniya bas usi koshish ka ek hissa hai.
                    </p>
                    <div className="pt-2 text-right">
                      <p className="text-sm font-sans uppercase tracking-widest text-[#C65B82]">
                        With endless love,
                      </p>
                      <p className="font-handwriting font-bold text-2xl sm:text-3xl text-[#8B264A]">
                        Aapke Niranjan ki taraf se. ❤️
                      </p>
                    </div>
                  </div>

                  {/* Action to proceed */}
                  <div className="mt-5 pt-3 border-t border-[#F8C8DC] flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        soundEffects.playPop();
                        onContinue();
                      }}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#EFA5B9] to-[#C65B82] text-white font-semibold shadow-romantic flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                    >
                      <span>Continue the Surprise</span>
                      <Sparkles className="w-4 h-4 text-[#FFF0B3]" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Front Left Triangle Flap */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              clipPath: 'polygon(0% 0%, 50% 55%, 0% 100%)',
              background: 'linear-gradient(135deg, #F8C8DC 0%, #F4AFC4 100%)',
              filter: 'drop-shadow(2px 0 3px rgba(89,64,77,0.06))',
            }}
          />

          {/* Front Right Triangle Flap */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              clipPath: 'polygon(100% 0%, 50% 55%, 100% 100%)',
              background: 'linear-gradient(225deg, #F8C8DC 0%, #F4AFC4 100%)',
              filter: 'drop-shadow(-2px 0 3px rgba(89,64,77,0.06))',
            }}
          />

          {/* Front Bottom Triangle Flap */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              clipPath: 'polygon(0% 100%, 50% 45%, 100% 100%)',
              background: 'linear-gradient(0deg, #EFA5B9 0%, #F4AFC4 100%)',
              filter: 'drop-shadow(0 -3px 5px rgba(89,64,77,0.08))',
            }}
          />

          {/* Top Flap (opens up) */}
          <motion.div
            initial={false}
            animate={{
              rotateX: isOpen ? 180 : 0,
              zIndex: isOpen ? 5 : 15,
            }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            style={{
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
            }}
            className="absolute inset-x-0 top-0 h-1/2"
          >
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)',
                background: 'linear-gradient(180deg, #F8C8DC 0%, #F4AFC4 100%)',
                boxShadow: '0 4px 10px rgba(198,91,130,0.2)',
              }}
            />
          </motion.div>

          {/* WAX SEAL (Centered on the closed flap) */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.3 }}
                className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
              >
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#E24C68] via-[#C23B55] to-[#8C1B33] flex items-center justify-center shadow-lg border-2 border-[#FFA3B5]/50 group">
                  {/* Wax edges */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#A3223D]/40" />
                  <Heart className="w-8 h-8 text-[#FFFDF8] fill-[#FFFDF8] drop-shadow-sm group-hover:scale-110 transition-transform" />
                  <span className="absolute -bottom-1 right-0 text-[10px] font-bold text-white bg-[#8C1B33] px-1.5 py-0.5 rounded-full border border-white/40">
                    C
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Decorative ribbon across envelope */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-3 bg-[#FFF0B3]/60 backdrop-blur-sm pointer-events-none z-10 border-y border-[#FFE28A]/40" />
        </motion.div>
      </div>

      {/* Helper cue if not open */}
      {!isOpen && (
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-6 flex flex-col items-center gap-1 text-[#C65B82] text-xs font-semibold"
        >
          <span>Tap to seal-break & open</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      )}
    </div>
  );
};
