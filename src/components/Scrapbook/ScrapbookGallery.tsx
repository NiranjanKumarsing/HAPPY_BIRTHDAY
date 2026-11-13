import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import { PHOTO_MEMORIES, PhotoMemory } from '../../data/photos';
import { PhotoLightbox } from './PhotoLightbox';
import { soundEffects } from '../../utils/soundEffects';

export const ScrapbookGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoMemory | null>(null);

  const handleOpenPhoto = (photo: PhotoMemory) => {
    soundEffects.playPop();
    setSelectedPhoto(photo);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-2">
      {/* Visual Header */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DCCBFA]/60 text-[#59404D] mb-2 border border-[#DCCBFA]">
          <Camera className="w-3.5 h-3.5 text-[#C65B82]" />
          Our Little Memory Scrapbook
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B264A]">
          Humare Khoobsurat Lamhe 📸
        </h3>
        <p className="text-xs sm:text-sm text-[#8C6C7E] mt-1">
          Tap any photograph to open the scrapbook and read the memory closer ✨
        </p>
      </div>

      {/* Polaroid Grid / Masonry Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-3 sm:px-4 overflow-hidden py-4">
        {PHOTO_MEMORIES.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, rotate: 0 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOpenPhoto(photo)}
            className="group relative cursor-pointer mx-auto w-full max-w-[320px] sm:max-w-none"
            style={{
              transform: `rotate(${photo.rotation ? photo.rotation * 0.7 : 0}deg)`,
              transformOrigin: 'center center',
            }}
          >
            {/* Washi Tape Strip at the top */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 w-24 h-6 scrapbook-tape rounded-sm transform -rotate-1 opacity-90 border-t border-b border-[#FFF0B3]/50" />

            {/* Polaroid Paper Frame */}
            <div className="bg-[#FFFDF9] p-3.5 pb-5 rounded-2xl shadow-paper border border-[#F8C8DC] hover:shadow-romantic transition-all">
              {/* Photo Picture Window */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-[#F8C8DC] via-[#FFF7F0] to-[#DCCBFA] border border-[#F4AFC4]/40 flex items-center justify-center">
                {photo.image ? (
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Aesthetic Illustrated Placeholder if no image */
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-white/80 shadow-sm flex items-center justify-center text-[#E24C68] mb-2 border border-[#F8C8DC]">
                      <Camera className="w-6 h-6 text-[#C65B82]" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C65B82] mb-0.5">
                      {photo.category}
                    </span>
                    <p className="font-serif text-sm font-bold text-[#8B264A] leading-tight line-clamp-2">
                      {photo.title}
                    </p>
                    <span className="text-[9px] text-[#8C6C7E] mt-1 italic">
                      Tap to view closer
                    </span>
                  </div>
                )}

                {/* Sticker in corner */}
                <span className="absolute bottom-2 right-2 text-xl drop-shadow-sm select-none">
                  {photo.sticker || '🌸'}
                </span>
              </div>

              {/* Handwritten Note below photo */}
              <div className="mt-3 text-center px-1">
                <p className="font-handwriting text-xl sm:text-2xl text-[#59404D] leading-snug line-clamp-2">
                  {photo.caption}
                </p>
                <div className="flex items-center justify-center gap-1 mt-1 text-[11px] font-semibold text-[#C65B82]">
                  <Heart className="w-3 h-3 fill-[#F4AFC4] text-[#E24C68]" />
                  <span>{photo.category}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        photo={selectedPhoto}
        photos={PHOTO_MEMORIES}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(newP) => setSelectedPhoto(newP)}
      />
    </div>
  );
};
