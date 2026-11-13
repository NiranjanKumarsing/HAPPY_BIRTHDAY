import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { CuteTeddy } from '../components/Decorations/CuteTeddy';
import { soundEffects } from '../utils/soundEffects';

interface SceneProps {
  onNext: () => void;
}

export const Scene1Welcome: React.FC<SceneProps> = ({ onNext }) => {
  const handleStart = () => {
    soundEffects.playPop();
    onNext();
  };

  return (
    <div className="relative min-h-[82vh] flex flex-col items-center justify-center text-center px-5 py-8 max-w-lg mx-auto w-full">
      {/* Decorative Floating Ribbons and Sparkles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-4 flex justify-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF9] border border-[#F8C8DC] text-[#C65B82] text-xs sm:text-sm font-semibold shadow-romantic">
          <Sparkles className="w-4 h-4 text-[#F3BE58] animate-spin" />
          A Special Birthday World
          <Sparkles className="w-4 h-4 text-[#F3BE58] animate-spin" />
        </span>
      </motion.div>

      {/* Cute Teddy Holding Gift */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="my-3 flex justify-center"
      >
        <CuteTeddy mood="gift" size={130} />
      </motion.div>

      {/* Opening Typography Sequence */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="space-y-3 w-full"
      >
        <p className="font-handwriting text-xl sm:text-3xl text-[#8C6C7E]">
          Someone has made something special for you...
        </p>

        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#8B264A] tracking-tight leading-tight">
          Jann, this little world belongs to you. 🎀
        </h1>

        <div className="py-2 flex justify-center">
          <span className="inline-block px-4 py-2 bg-[#FFF0B3] rounded-xl border border-[#FFE28A] text-xs sm:text-sm font-mono text-[#7A4B62] text-center max-w-[90%]">
            Made with love, a little madness, and a LOT of code. ✨
          </span>
        </div>
      </motion.div>

      {/* Call to action button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 flex flex-col items-center w-full"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 10px 25px -5px rgba(239, 165, 185, 0.4)',
              '0 15px 35px -5px rgba(198, 91, 130, 0.5)',
              '0 10px 25px -5px rgba(239, 165, 185, 0.4)',
            ],
          }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          onClick={handleStart}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F4AFC4] via-[#EFA5B9] to-[#C65B82] text-white font-bold text-base sm:text-lg shadow-romantic flex items-center gap-3 cursor-pointer group"
        >
          <span>Open Your Surprise</span>
          <Heart className="w-5 h-5 fill-white text-white group-hover:scale-125 transition-transform" />
        </motion.button>
        <p className="text-xs text-[#8C6C7E] mt-3 font-medium">
          Aapke liye ek pyaari si digital greeting card journey 🌸
        </p>
      </motion.div>
    </div>
  );
};

