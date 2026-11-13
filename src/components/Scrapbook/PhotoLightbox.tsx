import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  const currentIndex = photo ? photos.findIndex((p) => p.id === photo.id) : -1;

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

  // Keyboard navigation
  useEffect(() => {
    if (!photo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, currentIndex]);

  // Lock body scroll while open — prevents background from scrolling on mobile
  useEffect(() => {
    if (photo) {
      const prevOverflow = document.body.style.overflow;
      const prevPosition = document.body.style.position;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.style.position = prevPosition;
        document.body.style.width = '';
      };
    }
  }, [photo]);

  // Render into document.body via portal — bypasses ALL parent overflow/transform constraints
  // This guarantees true viewport-center positioning regardless of scroll position
  return createPortal(
    <AnimatePresence>
      {photo && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px',
            backgroundColor: 'rgba(0,0,0,0.65)',
          }}
        >
          {/* Backdrop — tap outside to close */}
          <div
            style={{ position: 'absolute', inset: 0 }}
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '440px',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#FFFDF9',
              borderRadius: '24px',
              padding: '16px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              border: '4px solid #fff',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => { soundEffects.playPop(); onClose(); }}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 20,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#FFF0B3',
                border: '1px solid #F4AFC4',
                color: '#8B264A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              }}
              aria-label="Close"
            >
              <X style={{ width: '18px', height: '18px' }} />
            </button>

            {/* Photo Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #F8C8DC, #FFF7F0, #DCCBFA)',
              border: '2px solid rgba(244,175,196,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {photo.image ? (
                <img
                  src={photo.image}
                  alt={photo.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', border: '1px solid #F8C8DC' }}>
                    <Camera style={{ width: '28px', height: '28px', color: '#C65B82' }} />
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#C65B82', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{photo.category}</span>
                  <p style={{ fontFamily: 'serif', fontSize: '15px', fontWeight: 'bold', color: '#8B264A' }}>{photo.title}</p>
                </div>
              )}
              {/* Sticker */}
              <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '22px', userSelect: 'none' }}>
                {photo.sticker || '🌸'}
              </div>
            </div>

            {/* Caption */}
            <div style={{ marginTop: '14px', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(248,200,220,0.6)', color: '#8B264A', fontSize: '11px', fontWeight: '600', marginBottom: '8px' }}>
                <Sparkles style={{ width: '11px', height: '11px', color: '#E24C68' }} />
                <span>{photo.category}</span>
                {photo.date && <span>• {photo.date}</span>}
              </div>
              <p style={{ fontFamily: 'Caveat, Dancing Script, cursive', fontSize: '22px', color: '#59404D', lineHeight: '1.4', padding: '0 8px' }}>
                "{photo.caption}"
              </p>
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #F8C8DC' }}>
              <button
                onClick={handlePrev}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '999px', background: '#FFF7F0', border: '1px solid #F8C8DC', color: '#8B264A', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}
              >
                <ChevronLeft style={{ width: '15px', height: '15px' }} />
                <span>Prev</span>
              </button>

              <span style={{ fontSize: '11px', color: '#8C6C7E', fontWeight: '500' }}>
                {currentIndex + 1} of {photos.length}
              </span>

              <button
                onClick={handleNext}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '999px', background: '#FFF7F0', border: '1px solid #F8C8DC', color: '#8B264A', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}
              >
                <span>Next</span>
                <ChevronRight style={{ width: '15px', height: '15px' }} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
