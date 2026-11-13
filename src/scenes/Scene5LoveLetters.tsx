import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronRight, ChevronLeft } from 'lucide-react';
import { LOVE_LETTERS } from '../data/letters';
import { soundEffects } from '../utils/soundEffects';

interface SceneProps {
  onNext: () => void;
}

export const Scene5LoveLetters: React.FC<SceneProps> = ({ onNext }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentLetter = LOVE_LETTERS[activeIdx];
  const isLastLetter = activeIdx === LOVE_LETTERS.length - 1;

  const handleNextLetter = () => {
    soundEffects.playPop();
    if (activeIdx < LOVE_LETTERS.length - 1) {
      setActiveIdx(activeIdx + 1);
    }
  };

  const handlePrevLetter = () => {
    soundEffects.playPop();
    if (activeIdx > 0) {
      setActiveIdx(activeIdx - 1);
    }
  };

  return (
    <div className="relative min-h-[82vh] max-w-lg mx-auto py-6 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F8C8DC] text-[#8B264A] mb-2 border border-[#EFA5B9]">
          <Heart className="w-3.5 h-3.5 fill-[#C65B82] text-[#C65B82]" />
          Written From Niranjan's Heart
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B264A]">
          Some Words From My Heart 💗
        </h2>
        <p className="text-xs sm:text-sm text-[#8C6C7E] mt-1 font-medium">
          Aapke liye likhe gaye chaar chote se prem patra 💌
        </p>
      </div>

      {/* Letter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-6 overflow-x-auto max-w-full pb-1">
        {LOVE_LETTERS.map((letter, idx) => (
          <button
            key={letter.id}
            onClick={() => {
              soundEffects.playPop();
              setActiveIdx(idx);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeIdx === idx
                ? 'bg-[#C65B82] text-white shadow-romantic scale-105'
                : 'bg-[#FFFDF9] text-[#8C6C7E] border border-[#F8C8DC] hover:bg-[#F8C8DC]'
            }`}
          >
            <span>{letter.stampEmoji}</span>
            <span>{letter.tag}</span>
          </button>
        ))}
      </div>

      {/* The Romantic Stationery Letter Card */}
      <div className="relative w-full">
        {/* Decorative clip or bow on top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#FFF0B3] border-2 border-[#F3BE58] shadow-sm flex items-center justify-center text-sm">
            🎀
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentLetter.id}
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-[#FFFDF8] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#F8C8DC] vintage-letter-paper"
          >
            {/* Letter Stamp Header */}
            <div className="flex items-center justify-between border-b border-[#F8C8DC] pb-4 mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C65B82] block">
                  {currentLetter.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B264A]">
                  {currentLetter.title}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF0B3]/40 border-2 border-dashed border-[#F4AFC4] flex items-center justify-center text-2xl rotate-3">
                {currentLetter.stampEmoji}
              </div>
            </div>

            {/* Letter Lines */}
            <div className="font-handwriting text-2xl sm:text-3xl leading-relaxed text-[#59404D] space-y-4">
              {currentLetter.content.map((paragraph, i) => (
                <p key={i} className="first-letter:text-3xl first-letter:font-bold first-letter:text-[#8B264A]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Letter Footer */}
            <div className="mt-8 pt-4 border-t border-[#F8C8DC] flex items-center justify-between">
              <span className="text-xs font-handwriting text-xl text-[#8C6C7E]">
                Sirf aapke liye, Jann ✨
              </span>
              <span className="font-handwriting font-bold text-2xl text-[#8B264A]">
                — Niranjan ❤️
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Letter Carousel Controls */}
      <div className="flex items-center justify-between w-full mt-6 px-2">
        <button
          onClick={handlePrevLetter}
          disabled={activeIdx === 0}
          className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
            activeIdx === 0
              ? 'opacity-40 cursor-not-allowed bg-[#F8F0F3] border-gray-300 text-gray-400'
              : 'bg-[#FFF7F0] border-[#F8C8DC] text-[#8B264A] hover:bg-white shadow-sm'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Letter</span>
        </button>

        <span className="text-xs font-semibold text-[#8C6C7E]">
          {activeIdx + 1} of {LOVE_LETTERS.length}
        </span>

        {!isLastLetter && (
          <button
            onClick={handleNextLetter}
            className="px-4 py-2 rounded-full bg-[#FFF7F0] border border-[#F8C8DC] text-[#8B264A] text-xs sm:text-sm font-semibold flex items-center gap-1.5 hover:bg-white shadow-sm cursor-pointer"
          >
            <span>Next Letter</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* PROCEED BUTTON: SHOWN ONLY WHEN SHE IS AT THE LAST LETTER! */}
      {isLastLetter && (
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
            <span>Something special under the starlit night... 🌙✨</span>
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
