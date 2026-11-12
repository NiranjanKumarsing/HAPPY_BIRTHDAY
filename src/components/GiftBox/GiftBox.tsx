import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, ChevronRight } from 'lucide-react';
import { triggerGiftBurst } from '../../utils/confetti';
import { soundEffects } from '../../utils/soundEffects';

interface GiftBoxProps {
  onContinue?: () => void;
}

type GiftStep = 'wrapped' | 'untying' | 'lid_open' | 'card_rising' | 'unfolding' | 'unfolded';

export const GiftBox: React.FC<GiftBoxProps> = ({ onContinue }) => {
  const [step, setStep] = useState<GiftStep>('wrapped');

  const handleUnwrap = () => {
    if (step !== 'wrapped') return;

    soundEffects.playMagicSparkle();
    setStep('untying');

    // Sequence the animations
    setTimeout(() => {
      setStep('lid_open');
    }, 350);

    setTimeout(() => {
      setStep('card_rising');
    }, 800);

    setTimeout(() => {
      setStep('unfolding');
      triggerGiftBurst();
    }, 1500);

    setTimeout(() => {
      setStep('unfolded');
    }, 2200);
  };

  const isLidOpen = step !== 'wrapped' && step !== 'untying';
  const isRising = step === 'card_rising';
  const isUnfoldingOrDone = step === 'unfolding' || step === 'unfolded';

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center select-none px-3 py-2">
      {/* Visual Instruction Header */}
      <div className="text-center mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF0B3] text-[#8B264A] shadow-sm mb-2 border border-[#FFF0B3]">
          <Sparkles className="w-3.5 h-3.5 text-[#E24C68]" />
          A Little Gift For You
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B264A]">
          Jann, ek aakhri surprise baaki hai... 🎁
        </h3>
        {step === 'wrapped' && (
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-sm text-[#8C6C7E] mt-1 font-semibold"
          >
            Tap to unwrap your gift! 🎀
          </motion.p>
        )}
      </div>

      {/* Main Container */}
      <div className="relative w-full flex flex-col items-center">
        {/* THE 3D GIFT BOX (Shows during wrapped & rising steps) */}
        <AnimatePresence>
          {!isUnfoldingOrDone && (
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center my-4">
              {/* Glow */}
              <motion.div
                animate={
                  step === 'wrapped'
                    ? { scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }
                    : { scale: [1, 1.3, 1.2], opacity: [0.6, 1, 0.8] }
                }
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute inset-4 bg-gradient-to-tr from-[#F8C8DC] via-[#FFF0B3] to-[#DCCBFA] rounded-full blur-2xl"
              />

              <div
                onClick={handleUnwrap}
                className={`relative w-48 h-48 cursor-pointer flex flex-col items-center justify-end ${
                  step === 'wrapped' ? 'hover:scale-105 active:scale-95' : ''
                } transition-transform`}
              >
                {/* THE CARD RISING OUT OF THE BOX */}
                <motion.div
                  initial={{ y: 20, opacity: 0, scale: 0.75 }}
                  animate={
                    isRising
                      ? { y: -90, opacity: 1, scale: 0.95 }
                      : isLidOpen
                      ? { y: -10, opacity: 0.8, scale: 0.8 }
                      : { y: 20, opacity: 0, scale: 0.75 }
                  }
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute z-15 w-40 h-28 bg-[#FFFDF8] rounded-xl shadow-xl border border-[#F8C8DC] p-3 text-center flex flex-col items-center justify-center"
                >
                  <Sparkles className="w-5 h-5 text-[#F3BE58] mb-1 animate-spin" />
                  <span className="text-xs font-serif font-bold text-[#8B264A]">
                    For My Jann ❤️
                  </span>
                  <span className="text-[10px] text-[#8C6C7E]">
                    Unfolding your message...
                  </span>
                </motion.div>

                {/* GIFT LID */}
                <motion.div
                  animate={
                    isLidOpen
                      ? {
                          y: -95,
                          rotate: -25,
                          opacity: 0.9,
                          scale: 1.05,
                        }
                      : {
                          y: [0, -3, 0],
                        }
                  }
                  transition={
                    isLidOpen
                      ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                      : { repeat: Infinity, duration: 2.5, ease: 'easeInOut' }
                  }
                  className="relative z-20 w-52 h-14 bg-gradient-to-r from-[#F8C8DC] via-[#F4AFC4] to-[#EFA5B9] rounded-xl shadow-lg border-2 border-white/80 flex items-center justify-center -mb-2"
                >
                  {/* Ribbon on Lid */}
                  <div className="absolute inset-y-0 w-8 bg-gradient-to-b from-[#FFF0B3] to-[#FFE066] border-x border-[#F3BE58]/40" />

                  {/* Ribbon Bow on top */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-4 border-[#FFE066] bg-[#FFF0B3] -rotate-45 transform -mr-2 shadow-sm" />
                    <div className="w-8 h-8 rounded-full border-4 border-[#FFE066] bg-[#FFF0B3] rotate-45 transform -ml-2 shadow-sm" />
                    <div className="absolute w-5 h-5 rounded-full bg-[#FFE066] border-2 border-[#F3BE58] shadow-md" />
                  </div>
                </motion.div>

                {/* GIFT BOX BODY */}
                <div className="relative z-10 w-44 h-36 bg-gradient-to-b from-[#F4AFC4] to-[#EFA5B9] rounded-b-2xl shadow-romantic-lg border-2 border-white/80 overflow-hidden flex items-center justify-center">
                  {/* Vertical ribbon */}
                  <div className="absolute inset-y-0 w-8 bg-gradient-to-b from-[#FFF0B3] to-[#FFE066] border-x border-[#F3BE58]/40" />
                  {/* Horizontal ribbon */}
                  <div className="absolute inset-x-0 h-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FFF0B3] to-[#FFE066] border-y border-[#F3BE58]/40" />

                  {/* Gift tag */}
                  <div className="absolute top-4 right-3 bg-white/90 px-2 py-1 rounded shadow-sm rotate-6 border border-[#F8C8DC] text-[10px] font-bold text-[#8B264A]">
                    For Jann ❤️
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* THE UNFOLDING ANIMATED MESSAGE CARD */}
        <AnimatePresence>
          {isUnfoldingOrDone && (
            <motion.div
              initial={{
                opacity: 0,
                scaleY: 0.2,
                scaleX: 0.7,
                y: 50,
                rotateX: -25,
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
              className="w-full bg-[#FFFDF8] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#F8C8DC] vintage-letter-paper my-2"
            >
              {/* Card Header */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#F8C8DC] flex items-center justify-center text-sm font-bold text-[#8B264A]">
                  🎁
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C65B82]">
                  A Message From My Soul
                </span>
              </div>

              {/* Heartfelt Text with Fade In */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-handwriting text-2xl sm:text-3xl text-[#59404D] leading-relaxed space-y-4 text-center"
              >
                <p>
                  "Chhavi, main shayad har baar perfect words na dhoondh paun, lekin ek baat hamesha sach rahegi..."
                </p>
                <p className="font-bold text-[#8B264A] text-2xl sm:text-3xl bg-[#FFF0B3]/40 py-2 px-3 rounded-2xl border border-[#FFF0B3]">
                  Aap mere liye bohot special hain. ❤️
                </p>
                <p>
                  Main chahta hoon ki aapki zindagi mein hamesha khushiyan hon, aapke sapne poore hon aur aapko kabhi apni ahmiyat par sawaal na karna pade.
                </p>
                <p className="font-bold text-[#C65B82] text-3xl">
                  Happy Birthday, meri Jann. ✨
                </p>
              </motion.div>

              {/* Signature and Next Action */}
              <div className="mt-6 pt-4 border-t border-[#F8C8DC] text-center">
                <p className="font-serif italic text-lg text-[#8B264A]">
                  Aapka,
                </p>
                <p className="font-handwriting font-bold text-3xl text-[#C65B82]">
                  Niranjan ❤️
                </p>

                {onContinue && (
                  <div className="mt-6 flex flex-col items-center">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        soundEffects.playPop();
                        onContinue();
                      }}
                      className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F4AFC4] via-[#EFA5B9] to-[#C65B82] text-white font-bold text-sm sm:text-base shadow-romantic flex items-center gap-2 cursor-pointer"
                    >
                      <span>A quiet thought under the stars... ✨🌙</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                    <span className="text-[11px] text-[#8C6C7E] mt-1.5 italic">
                      Tap to turn the page
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
