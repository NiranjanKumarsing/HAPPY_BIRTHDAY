import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, ChevronRight } from 'lucide-react';
import { CuteTeddy } from '../components/Decorations/CuteTeddy';
import { soundEffects } from '../utils/soundEffects';

interface SceneProps {
  onNext: () => void;
}

export const Scene9FinalRomantic: React.FC<SceneProps> = ({ onNext }) => {
  return (
    <div className="relative min-h-[82vh] max-w-lg mx-auto py-8 px-4 flex flex-col items-center justify-center text-center">
      {/* Floating lanterns in the dreamy evening sky */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {[
          { left: '15%', delay: 0 },
          { left: '80%', delay: 2 },
          { left: '48%', delay: 4 },
        ].map((lantern, idx) => (
          <motion.div
            key={idx}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{
              y: '-20vh',
              opacity: [0, 0.8, 0.85, 0],
              x: [0, 10, -10, 0],
            }}
            transition={{
              duration: 14,
              delay: lantern.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ left: lantern.left }}
            className="absolute text-3xl filter drop-shadow-[0_0_12px_rgba(255,240,179,0.8)] select-none"
          >
            🏮
          </motion.div>
        ))}
      </div>

      {/* Decorative Crescent Moon & Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFF0B3] via-[#FFE28A] to-[#F8C8DC] flex items-center justify-center shadow-glow border-2 border-white/60 mx-auto">
          <Moon className="w-8 h-8 text-[#8B264A] fill-[#8B264A]" />
        </div>
      </motion.div>

      {/* Sweet Animated Typography Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="w-full bg-[#FFFDF9]/90 backdrop-blur-md rounded-3xl p-7 sm:p-9 shadow-2xl border border-[#F8C8DC] space-y-5"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DCCBFA]/60 text-[#59404D] border border-[#DCCBFA]">
          <Sparkles className="w-3.5 h-3.5 text-[#C65B82]" />
          A Little Whispered Truth
        </span>

        <p className="font-serif italic text-xl sm:text-2xl text-[#8B264A] leading-relaxed">
          "Some people make life beautiful just by being in it..."
        </p>

        <div className="py-2">
          <h2 className="font-handwriting font-bold text-3xl sm:text-4xl text-[#C65B82] leading-snug">
            Mere liye woh insaan AAP hain, Jann. ❤️
          </h2>
        </div>

        <div className="pt-3 border-t border-[#F8C8DC]/60 space-y-2">
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#8B264A]">
            Happy Birthday, Chhavi! ✨
          </p>
          <p className="text-xs uppercase tracking-widest text-[#8C6C7E] font-medium">
            Forever your admirer,
          </p>
          <p className="font-handwriting font-bold text-3xl text-[#8B264A]">
            Niranjan.
          </p>
        </div>
      </motion.div>

      {/* Gentle Cute Teddy with Heart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="my-6"
      >
        <CuteTeddy mood="heart" size={85} />
      </motion.div>

      {/* Gentle transition to the final apology scene */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="w-full flex flex-col items-center gap-2"
      >
        <button
          onClick={() => {
            soundEffects.playPop();
            onNext();
          }}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F4AFC4] via-[#EFA5B9] to-[#C65B82] text-white font-bold text-sm sm:text-base shadow-romantic flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span>Ek Aakhri Baat, Dil Se... 🥺❤️</span>
          <ChevronRight className="w-4 h-4" />
        </button>
        <span className="text-xs text-[#8C6C7E]">
          A special personal message just between us
        </span>
      </motion.div>
    </div>
  );
};
