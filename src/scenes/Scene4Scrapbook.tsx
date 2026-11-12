import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { ScrapbookGallery } from '../components/Scrapbook/ScrapbookGallery';
import { soundEffects } from '../utils/soundEffects';

interface SceneProps {
  onNext: () => void;
}

export const Scene4Scrapbook: React.FC<SceneProps> = ({ onNext }) => {
  return (
    <div className="relative min-h-[82vh] max-w-4xl mx-auto py-4 px-3 flex flex-col items-center">
      <ScrapbookGallery />

      <div className="w-full flex justify-center py-8">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            soundEffects.playPop();
            onNext();
          }}
          className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F4AFC4] via-[#EFA5B9] to-[#C65B82] text-white font-bold text-sm sm:text-base shadow-romantic flex items-center gap-2 cursor-pointer"
        >
          <span>Next: Letters From My Heart</span>
          <Heart className="w-4 h-4 fill-white" />
        </motion.button>
      </div>
    </div>
  );
};
