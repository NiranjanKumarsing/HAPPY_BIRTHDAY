import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import { PhotoMemory } from '../../data/photos';
import { soundEffects } from '../../utils/soundEffects';

interface PhotoLightboxProps {
  photo: PhotoMemory | null;
  photos: PhotoMemory[];
  onClose: () => void;
  onNavigate: (newPhoto: PhotoMemory) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    soundEffects.playPop();
    const nextIdx = (currentIndex + 1) % photos.length;
    onNavigate(photos[nextIdx]);
  };

  const handlePrev = () => {
    soundEffects.playPop();
    const prevIdx = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[prevIdx]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-[calc(100vw-24px)] sm:max-w-lg max-h-[90vh] overflow-y-auto bg-[#FFFDF9] rounded-3xl p-4 sm:p-7 shadow-2xl border-4 border-white vintage-letter-paper"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => {
              soundEffects.playPop();
              onClose();
            }}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#FFF0B3] border border-[#F4AFC4] text-[#8B264A] flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Photo Preview Frame */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-tr from-[#F8C8DC] via-[#FFF7F0] to-[#DCCBFA] border-2 border-[#F4AFC4]/50 shadow-inner flex items-center justify-center">
            {photo.image ? (
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-contain sm:object-cover bg-black/10"
              />
            ) : (
              /* Aesthetic Illustrated Placeholder if no image set */
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white/80 shadow-md flex items-center justify-center text-[#E24C68] mb-3 border border-[#F8C8DC]">
                  <Camera className="w-8 h-8 text-[#C65B82]" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#C65B82] mb-1">
                  {photo.category}
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#8B264A]">
                  {photo.title}
                </p>
                <p className="text-xs text-[#8C6C7E] mt-1 max-w-xs italic">
                  Photo ready to be customized in <code className="bg-[#FFF0B3] px-1 py-0.5 rounded font-mono text-[10px]">src/data/photos.ts</code>
                </p>
              </div>
            )}

            {/* Sticker corner */}
            <div className="absolute top-3 left-3 text-2xl drop-shadow-sm select-none">
              {photo.sticker || '🌸'}
            </div>
          </div>

          {/* Details below photo */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F8C8DC]/60 text-[#8B264A] mb-2">
              <Sparkles className="w-3 h-3 text-[#E24C68]" />
              <span>{photo.category}</span>
              {photo.date && <span>• {photo.date}</span>}
            </div>

            <p className="font-handwriting text-2xl sm:text-3xl text-[#59404D] leading-snug px-2">
              "{photo.caption}"
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-5 pt-3 border-t border-[#F8C8DC]">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-full bg-[#FFF7F0] border border-[#F8C8DC] text-[#8B264A] text-xs sm:text-sm font-semibold flex items-center gap-1.5 hover:bg-[#F8C8DC] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <span className="text-xs text-[#8C6C7E] font-medium">
              {currentIndex + 1} of {photos.length}
            </span>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-full bg-[#FFF7F0] border border-[#F8C8DC] text-[#8B264A] text-xs sm:text-sm font-semibold flex items-center gap-1.5 hover:bg-[#F8C8DC] transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
