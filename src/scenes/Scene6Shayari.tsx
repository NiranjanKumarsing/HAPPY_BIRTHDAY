import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, ChevronRight, ChevronLeft } from 'lucide-react';
import { SHAYARIS } from '../data/shayaris';
import { soundEffects } from '../utils/soundEffects';

interface SceneProps {
  onNext: () => void;
}

export const Scene6Shayari: React.FC<SceneProps> = ({ onNext }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentShayari = SHAYARIS[activeIdx];
  const isLastShayari = activeIdx === SHAYARIS.length - 1;

  const handleNext = () => {
    soundEffects.playPop();
    if (activeIdx < SHAYARIS.length - 1) {
      setActiveIdx(activeIdx + 1);
    }
  };

  const handlePrev = () => {
    soundEffects.playPop();
    if (activeIdx > 0) {
      setActiveIdx(activeIdx - 1);
    }
  };

  return (
    <div className="relative min-h-[82vh] max-w-lg mx-auto py-6 px-4 flex flex-col items-center">
      {/* Visual Header with Crescent Moon */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCCBFA]/60 border border-[#DCCBFA] text-[#59404D] text-xs font-semibold mb-2 shadow-sm">
          <Moon className="w-4 h-4 text-[#C65B82] fill-[#C65B82]" />
          <span>Shayari Book • Ek Haseen Shaam</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B264A]">
          Shayari, Sirf Aapke Naam 🌙
        </h2>
        <p className="text-xs sm:text-sm text-[#8C6C7E] mt-1 font-medium">
          Lafz jo sirf aur sirf aapki tareef mein bune gaye hain ✨
        </p>
      </div>

      {/* Shayari Card with Parchment & Ink Aesthetic */}
      <div className="relative w-full">
        {/* Glow behind card */}
        <div className="absolute inset-2 bg-gradient-to-tr from-[#DCCBFA] via-[#F8C8DC] to-[#FFF0B3] rounded-3xl blur-xl opacity-50 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentShayari.id}
            initial={{ opacity: 0, y: 20, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -20, rotate: 1 }}
            transition={{ duration: 0.45 }}
            className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F2] to-[#FFF5EA] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#EFA5B9]/60 vintage-letter-paper"
          >
            {/* Top Ornate Header */}
            <div className="flex items-center justify-between border-b border-[#F4AFC4]/50 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#DCCBFA]/50 flex items-center justify-center text-sm font-serif font-bold text-[#8B264A]">
                  {currentShayari.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C65B82]">
                  {currentShayari.themeHint}
                </span>
              </div>
              <span className="text-2xl drop-shadow-sm">{currentShayari.illustration}</span>
            </div>

            {/* Shayari Title */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B264A] text-center mb-6">
              ~ {currentShayari.title} ~
            </h3>

            {/* Poetic Couplets */}
            <div className="space-y-4 my-6 text-center">
              {currentShayari.lines.map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + idx * 0.12, duration: 0.4 }}
                  className="font-handwriting text-2xl sm:text-3xl text-[#59404D] leading-relaxed tracking-wide"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Bottom Inscription */}
            <div className="mt-8 pt-4 border-t border-[#F4AFC4]/50 flex items-center justify-between text-xs text-[#8C6C7E]">
              <span className="italic font-serif">Aapke liye dil se...</span>
              <span className="font-handwriting font-bold text-xl text-[#C65B82]">
                Niranjan ki kalam se ❤️
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation for Poetry */}
      <div className="flex items-center justify-between w-full mt-6 px-2">
        <button
          onClick={handlePrev}
          disabled={activeIdx === 0}
          className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
            activeIdx === 0
              ? 'opacity-40 cursor-not-allowed bg-[#F8F0F3] border-gray-300 text-gray-400'
              : 'bg-[#FFF7F0] border-[#F8C8DC] text-[#8B264A] hover:bg-white shadow-sm'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Pichli Shayari</span>
        </button>

        <span className="text-xs font-semibold text-[#8C6C7E]">
          {activeIdx + 1} of {SHAYARIS.length}
        </span>

        {!isLastShayari && (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-full bg-[#FFF7F0] border border-[#F8C8DC] text-[#8B264A] text-xs sm:text-sm font-semibold flex items-center gap-1.5 hover:bg-white shadow-sm cursor-pointer"
          >
            <span>Agli Shayari</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* PROCEED BUTTON: SHOWN ONLY WHEN SHE REACHES THE LAST SHAYARI! */}
      {isLastShayari && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 w-full flex flex-col items-center"
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
            <span>A few little things that make you so special... 🧸🌸</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
          <span className="text-[11px] text-[#8C6C7E] mt-1.5 italic">
            Tap to continue
          </span>
        </motion.div>
      )}
    </div>
  );
};
