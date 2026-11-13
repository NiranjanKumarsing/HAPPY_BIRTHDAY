import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, Heart } from 'lucide-react';
import { BIRTHDAY_WISHES } from '../data/wishes';
import { BirthdayCake } from '../components/BirthdayCake/BirthdayCake';
import { CuteTeddy } from '../components/Decorations/CuteTeddy';
import { soundEffects } from '../utils/soundEffects';

interface SceneProps {
  onNext: () => void;
}

export const Scene3BirthdayCascade: React.FC<SceneProps> = ({ onNext }) => {
  const [revealedCards, setRevealedCards] = useState<Record<string, boolean>>({});
  const [candlesBlown, setCandlesBlown] = useState<boolean>(false);

  const toggleCard = (id: string) => {
    soundEffects.playPop();
    setRevealedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Check if at least 3 cards have been viewed or the last card has been interacted with
  const hasInteractedWithLast = !!revealedCards['wish-5'];
  const totalRevealed = Object.keys(revealedCards).length;
  const canProceed = candlesBlown || totalRevealed >= 3 || hasInteractedWithLast;

  return (
    <div className="relative min-h-[82vh] max-w-xl mx-auto py-6 px-4 flex flex-col items-center">
      {/* Floating balloons in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {[
          { left: '8%', delay: 0 },
          { left: '85%', delay: 1.5 },
          { left: '20%', delay: 3 },
          { left: '75%', delay: 2 },
        ].map((balloon, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{
              y: '-20vh',
              opacity: [0, 0.7, 0.8, 0],
              x: [0, 15, -15, 0],
            }}
            transition={{
              duration: 12,
              delay: balloon.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ left: balloon.left }}
            className="absolute text-4xl filter drop-shadow-md select-none"
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* Main Heading Sequence */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-2 mb-6"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0B3] border border-[#F3BE58] text-[#8B264A] text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#E24C68]" />
          <span>A VERY SPECIAL CELEBRATION</span>
          <Sparkles className="w-3.5 h-3.5 text-[#E24C68]" />
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#C65B82] via-[#8B264A] to-[#C65B82] bg-clip-text text-transparent tracking-tight">
          HAPPY BIRTHDAY, MERI JANN! 🎂❤️
        </h1>

        <p className="font-handwriting text-2xl sm:text-3xl text-[#59404D] max-w-md mx-auto leading-relaxed">
          "Aaj ka din utna hi khoobsurat ho jitni khoobsurat aapki muskurahat hai."
        </p>
      </motion.div>

      {/* Interactive Birthday Cake */}
      <div className="w-full mb-6">
        <BirthdayCake onBlownOut={() => setCandlesBlown(true)} />
      </div>

      {/* Cute dancing teddy bear cheering */}
      <div className="flex items-center gap-3 bg-[#FFFDF9] px-4 py-2.5 rounded-2xl border border-[#F8C8DC] shadow-sm mb-6 w-full max-w-md">
        <CuteTeddy mood="dance" size={54} />
        <div className="text-left text-xs sm:text-sm text-[#59404D]">
          <span className="font-bold text-[#8B264A] block">
            Jann ke liye 5 Khaas Duayein:
          </span>
          <span className="text-[#8C6C7E]">
            Tap each card to unlock a sweet personal note! ✨
          </span>
        </div>
      </div>

      {/* Cascading Birthday Wish Cards */}
      <div className="w-full space-y-3.5 mb-8">
        {BIRTHDAY_WISHES.map((wish, index) => {
          const isRevealed = !!revealedCards[wish.id];

          return (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => toggleCard(wish.id)}
              className="cursor-pointer"
            >
              <div
                className={`p-4 sm:p-5 rounded-2xl transition-all border ${
                  isRevealed
                    ? 'bg-[#FFFDF8] border-[#EFA5B9] shadow-romantic'
                    : 'bg-[#FFFDF9] border-[#F8C8DC] shadow-sm hover:border-[#EFA5B9]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl select-none">{wish.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C65B82]">
                        {wish.badge}
                      </span>
                      <span className="text-[10px] text-[#8C6C7E] font-medium bg-[#FFF0B3]/70 px-2 py-0.5 rounded-full">
                        {isRevealed ? 'Tap to close' : 'Tap to open secret ✨'}
                      </span>
                    </div>

                    <p className="font-serif text-base sm:text-lg font-bold text-[#8B264A]">
                      {wish.frontText}
                    </p>

                    {/* Revealed Secret Message */}
                    <AnimatePresence>
                      {isRevealed && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pt-3 border-t border-[#F8C8DC]"
                        >
                          <p className="font-handwriting text-xl sm:text-2xl text-[#59404D] leading-snug">
                            {wish.revealedText}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Next Scene Button - SHOWN ONLY WHEN SHE HAS EXPLORED THE CONTENT */}
      {canProceed ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col items-center pb-6"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              soundEffects.playPop();
              onNext();
            }}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F4AFC4] via-[#EFA5B9] to-[#C65B82] text-white font-bold text-sm sm:text-base shadow-romantic flex items-center gap-2 cursor-pointer"
          >
            <span>Some moments that belong only to us... 📸🌸</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
          <span className="text-[11px] text-[#8C6C7E] mt-1.5 italic">
            Tap to turn the page
          </span>
        </motion.div>
      ) : (
        <div className="pb-6 text-center text-xs text-[#8C6C7E] italic">
          Blow out the candles & discover the wishes above to proceed ✨
        </div>
      )}
    </div>
  );
};
