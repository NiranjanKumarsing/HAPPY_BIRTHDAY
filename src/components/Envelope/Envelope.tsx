import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { triggerHeartConfetti } from '../../utils/confetti';
import { soundEffects } from '../../utils/soundEffects';

interface EnvelopeProps {
  onContinue: () => void;
}

type EnvelopeStep = 'sealed' | 'breaking' | 'flap_open' | 'letter_rising' | 'unfolding' | 'unfolded';

export const Envelope: React.FC<EnvelopeProps> = ({ onContinue }) => {
  const [step, setStep] = useState<EnvelopeStep>('sealed');

  const handleOpen = () => {
    if (step !== 'sealed') return;

    soundEffects.playEnvelopeOpen();
    setStep('breaking');

    // Sequence the opening animations smoothly
    setTimeout(() => {
      setStep('flap_open');
    }, 350);

    setTimeout(() => {
      setStep('letter_rising');
    }, 850);

    setTimeout(() => {
      setStep('unfolding');
      triggerHeartConfetti();
    }, 1500);

    setTimeout(() => {
      setStep('unfolded');
    }, 2200);
  };

  const isFlapOpen = step !== 'sealed' && step !== 'breaking';
  const isRising = step === 'letter_rising';
  const isUnfoldingOrDone = step === 'unfolding' || step === 'unfolded';

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center select-none px-3 py-2">
      {/* Visual Header / Instructions */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-4"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF0B3]/90 text-[#8B264A] shadow-sm mb-2 border border-[#FFF0B3]">
          <Sparkles className="w-3.5 h-3.5 text-[#F3BE58]" />
          Khaas Aapke Liye
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B264A] tracking-wide">
          Jann, aapke liye ek chhota sa khat hai...
        </h3>
        {step === 'sealed' && (
          <motion.p
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-sm sm:text-base text-[#8C6C7E] mt-1 font-medium flex items-center justify-center gap-1"
          >
            Tap the envelope to open it 💌
          </motion.p>
        )}
      </motion.div>

      {/* Main Interactive Stage */}
      <div className="relative w-full flex flex-col items-center">
        {/* ENVELOPE BASE (Always visible or smoothly sliding down when letter expands) */}
        <AnimatePresence>
          {!isUnfoldingOrDone && (
            <div className="relative w-full max-w-[340px] h-[230px] flex items-center justify-center my-6">
              {/* Glow */}
              <div className="absolute inset-2 bg-gradient-to-tr from-[#F8C8DC] via-[#DCCBFA] to-[#FFF0B3] rounded-3xl blur-2xl opacity-60 pointer-events-none" />

              <motion.div
                animate={
                  step === 'sealed'
                    ? {
                        y: [0, -8, 0],
                        rotate: [0, 0.5, -0.5, 0],
                      }
                    : { y: 0 }
                }
                transition={{
                  repeat: step === 'sealed' ? Infinity : 0,
                  duration: 3.5,
                  ease: 'easeInOut',
                }}
                onClick={handleOpen}
                className="relative w-full h-full rounded-2xl cursor-pointer shadow-envelope border border-[#EFA5B9]/60 bg-[#F4AFC4] overflow-visible"
                style={{ perspective: 1000 }}
              >
                {/* Backplate of Envelope with inner paper texture */}
                <div className="absolute inset-0 bg-[#F4AFC4] rounded-2xl overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-[#FFF7F0] opacity-80 paper-texture" />
                </div>

                {/* THE LETTER PEEKING & RISING OUT OF THE ENVELOPE */}
                <motion.div
                  initial={{ y: 20, opacity: 0.6, scale: 0.85 }}
                  animate={
                    isRising
                      ? { y: -130, opacity: 1, scale: 0.95 }
                      : isFlapOpen
                      ? { y: -20, opacity: 0.9, scale: 0.88 }
                      : { y: 20, opacity: 0.4, scale: 0.85 }
                  }
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-x-4 top-4 h-[180px] bg-[#FFFDF8] rounded-xl shadow-lg border border-[#F8C8DC] z-10 p-4 overflow-hidden"
                >
                  {/* Folded paper crease line */}
                  <div className="w-full h-1 bg-[#F8C8DC]/50 my-2" />
                  <div className="w-3/4 h-2.5 bg-[#F8C8DC]/40 rounded mb-2" />
                  <div className="w-1/2 h-2.5 bg-[#F8C8DC]/30 rounded mb-2" />
                  <div className="w-5/6 h-2.5 bg-[#F8C8DC]/30 rounded" />
                </motion.div>

                {/* Left Triangle Flap */}
                <div
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0% 0%, 50% 55%, 0% 100%)',
                    background: 'linear-gradient(135deg, #F8C8DC 0%, #F4AFC4 100%)',
                  }}
                />

                {/* Right Triangle Flap */}
                <div
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    clipPath: 'polygon(100% 0%, 50% 55%, 100% 100%)',
                    background: 'linear-gradient(225deg, #F8C8DC 0%, #F4AFC4 100%)',
                  }}
                />

                {/* Bottom Triangle Flap */}
                <div
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0% 100%, 50% 45%, 100% 100%)',
                    background: 'linear-gradient(0deg, #EFA5B9 0%, #F4AFC4 100%)',
                  }}
                />

                {/* Top Flap (Flips open 180 degrees upwards!) */}
                <motion.div
                  initial={false}
                  animate={{
                    rotateX: isFlapOpen ? 180 : 0,
                    zIndex: isFlapOpen ? 5 : 25,
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
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

                {/* Ribbon across */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-3 bg-[#FFF0B3]/60 backdrop-blur-sm pointer-events-none z-20 border-y border-[#FFE28A]/40" />

                {/* WAX SEAL (Centered Exactly on the Flap Tip) */}
                <AnimatePresence>
                  {step === 'sealed' && (
                    <motion.div
                      initial={{ x: '-50%', y: '-50%', scale: 1, opacity: 1 }}
                      animate={{ x: '-50%', y: '-50%', scale: [1, 1.04, 1] }}
                      exit={{
                        x: '-50%',
                        y: '-50%',
                        scale: 1.4,
                        opacity: 0,
                        rotate: 25,
                        transition: { duration: 0.35 },
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.2,
                        ease: 'easeInOut',
                      }}
                      style={{ left: '50%', top: '50%' }}
                      className="absolute z-30 cursor-pointer"
                    >
                      {/* Realistic Handcrafted Wax Seal */}
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#D93D5B] via-[#B82643] to-[#7D152B] flex items-center justify-center shadow-[0_6px_20px_rgba(140,27,51,0.45)] border-2 border-[#FFA3B5]/40 group hover:scale-105 active:scale-95 transition-transform">
                        {/* Outer Wax Irregular Rim */}
                        <div className="absolute inset-1 rounded-full border border-[#FFCCD5]/30 pointer-events-none" />
                        
                        {/* Embossed Inner Circle */}
                        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#941C34] to-[#C4334F] flex items-center justify-center shadow-inner border border-[#E24C68]/50">
                          {/* Centered Heart with C Monogram */}
                          <div className="relative flex items-center justify-center">
                            <Heart className="w-7 h-7 text-[#FFCCD5] fill-[#FFCCD5] opacity-90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                            <span className="absolute text-xs font-serif font-black text-[#7D152B] tracking-tighter select-none pt-0.5">
                              C
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Helper prompt */}
              {step === 'sealed' && (
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[#C65B82] text-xs font-semibold whitespace-nowrap"
                >
                  <span>Tap seal to open</span>
                  <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>

        {/* THE UNFOLDING ANIMATED LETTER */}
        <AnimatePresence>
          {isUnfoldingOrDone && (
            <motion.div
              initial={{
                opacity: 0,
                scaleY: 0.25,
                scaleX: 0.75,
                y: 40,
                rotateX: -30,
              }}
              animate={{
                opacity: 1,
                scaleY: 1,
                scaleX: 1,
                y: 0,
                rotateX: 0,
              }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                transformOrigin: 'top center',
                perspective: 1200,
              }}
              className="w-full bg-[#FFFDF8] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#F8C8DC] vintage-letter-paper text-[#59404D] my-2"
            >
              {/* Header Stamp */}
              <div className="flex items-center justify-between border-b border-[#F8C8DC] pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#F8C8DC] flex items-center justify-center text-sm font-bold text-[#8B264A]">
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

              {/* Letter Content with staggered fade in */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-handwriting text-2xl sm:text-3xl leading-relaxed text-[#59404D] space-y-3.5"
              >
                <p className="font-bold text-[#8B264A] text-2xl sm:text-3xl">
                  To my favourite person, Chhavi ❤️
                </p>
                <p>
                  Han ji Jann, sabse pehle toh aapko janamdin ki bohot bohot badhai!
                </p>
                <p className="text-xl sm:text-2xl text-[#7A4B62]">
                  Aap soch rahi hongi ki birthday wish itni late kyun aayi...
                </p>
                <div className="bg-[#FFF0B3]/60 p-3 rounded-2xl border border-[#FFF0B3] text-base sm:text-lg font-sans text-[#8B264A] leading-normal shadow-sm">
                  <span className="block italic text-xs uppercase font-bold text-[#C65B82] mb-1">
                    A Very Genuine Technical Reason:
                  </span>
                  <span>
                    Aapke liye kuch special banane mein itna heavy codebase ho gaya ki developer sahab khud usmein phas gaye! 😭✨
                  </span>
                </div>
                <p>
                  Lekin sach kahun toh, aapke liye kuch ordinary banana kabhi option hi nahi tha. Aap deserve karti hain kuch aisa jo sirf aapka ho.
                </p>
                <p>
                  Aur yeh chhoti si duniya bas usi koshish ka ek hissa hai.
                </p>
                <div className="pt-2 text-right">
                  <p className="text-xs font-sans uppercase tracking-widest text-[#C65B82]">
                    With endless love,
                  </p>
                  <p className="font-handwriting font-bold text-3xl sm:text-4xl text-[#8B264A]">
                    Aapke Niranjan ki taraf se. ❤️
                  </p>
                </div>
              </motion.div>

              {/* Action to proceed with mysterious hint */}
              <div className="mt-6 pt-4 border-t border-[#F8C8DC] flex flex-col items-center">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    soundEffects.playPop();
                    onContinue();
                  }}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F4AFC4] via-[#EFA5B9] to-[#C65B82] text-white font-bold text-sm sm:text-base shadow-romantic flex items-center gap-2 cursor-pointer"
                >
                  <span>A sweet celebration awaits you... 🎂✨</span>
                </motion.button>
                <span className="text-[11px] text-[#8C6C7E] mt-1.5 italic">
                  Tap to continue your little journey
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
