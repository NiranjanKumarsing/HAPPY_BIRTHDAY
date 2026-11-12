import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { triggerCandleExtinguish } from '../../utils/confetti';
import { soundEffects } from '../../utils/soundEffects';

interface BirthdayCakeProps {
  onBlownOut?: () => void;
}

export const BirthdayCake: React.FC<BirthdayCakeProps> = ({ onBlownOut }) => {
  const [candlesLit, setCandlesLit] = useState([true, true, true]);
  const [wishMade, setWishMade] = useState(false);

  const areAllBlown = !candlesLit.some((lit) => lit);

  const handleBlowCandle = (index: number) => {
    soundEffects.playCandleBlow();
    const updated = [...candlesLit];
    updated[index] = false;
    setCandlesLit(updated);

    if (!updated.some((lit) => lit) && !wishMade) {
      setWishMade(true);
      triggerCandleExtinguish();
      if (onBlownOut) onBlownOut();
    }
  };

  const handleBlowAll = () => {
    soundEffects.playCandleBlow();
    setCandlesLit([false, false, false]);
    setWishMade(true);
    triggerCandleExtinguish();
    if (onBlownOut) onBlownOut();
  };

  return (
    <div className="relative flex flex-col items-center select-none py-4">
      {/* Interactive prompt */}
      <div className="text-center mb-3">
        {!areAllBlown ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleBlowAll}
            className="px-4 py-1.5 rounded-full bg-[#FFF0B3] border border-[#F3BE58] text-[#8B264A] text-xs sm:text-sm font-semibold shadow-sm flex items-center gap-1.5 mx-auto hover:bg-[#FFE885] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E24C68]" />
            <span>Tap candles to blow them out 🎂✨</span>
          </motion.button>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4F0E2] text-[#285A43] text-xs sm:text-sm font-bold shadow-sm"
          >
            <span>✨ Dua maang lijiye Jann, har khwahish zaroor poori hogi! ❤️</span>
          </motion.div>
        )}
      </div>

      {/* The 3D-styled Pastel Layer Cake SVG */}
      <div className="relative w-64 sm:w-72 h-64 flex items-end justify-center">
        {/* Glow */}
        <div className="absolute inset-x-8 bottom-4 h-24 bg-[#F8C8DC] rounded-full blur-xl opacity-60 pointer-events-none" />

        <svg viewBox="0 0 240 220" className="w-full h-full drop-shadow-xl overflow-visible">
          <defs>
            <linearGradient id="frostingTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF7F0" />
              <stop offset="100%" stopColor="#F8C8DC" />
            </linearGradient>
            <linearGradient id="cakeBase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8C8DC" />
              <stop offset="100%" stopColor="#F4AFC4" />
            </linearGradient>
            <linearGradient id="cakeTier2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4AFC4" />
              <stop offset="100%" stopColor="#EFA5B9" />
            </linearGradient>
            <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#DCCBFA" />
            </linearGradient>
            <radialGradient id="flameGrad" cx="50%" cy="80%" r="60%">
              <stop offset="0%" stopColor="#FFF0B3" />
              <stop offset="40%" stopColor="#F3BE58" />
              <stop offset="100%" stopColor="#FF4D4D" />
            </radialGradient>
          </defs>

          {/* Golden/Pastel Cake Stand Plate */}
          <ellipse cx="120" cy="205" rx="100" ry="14" fill="url(#plateGrad)" stroke="#EFA5B9" strokeWidth="2" />
          <path d="M 80 205 Q 120 216 160 205 L 150 218 Q 120 224 90 218 Z" fill="#DCCBFA" opacity="0.8" />

          {/* BOTTOM TIER */}
          {/* Main body */}
          <path d="M 35 150 C 35 150 35 190 35 190 C 35 204 205 204 205 190 L 205 150 Z" fill="url(#cakeBase)" />
          {/* Frosting Drips on bottom tier */}
          <path
            d="M 35 150 C 50 162 60 152 75 165 C 90 152 105 166 120 153 C 135 165 150 152 165 164 C 180 152 195 160 205 150 C 205 138 35 138 35 150 Z"
            fill="url(#frostingTop)"
          />
          {/* Bottom tier top ellipse */}
          <ellipse cx="120" cy="148" rx="85" ry="14" fill="#FFFDF8" />

          {/* TOP TIER */}
          <path d="M 60 95 C 60 95 60 140 60 140 C 60 152 180 152 180 140 L 180 95 Z" fill="url(#cakeTier2)" />
          {/* Decorative frosting piping */}
          <path
            d="M 60 95 C 75 106 85 96 100 108 C 115 97 125 107 140 96 C 155 106 165 97 180 95 C 180 84 60 84 60 95 Z"
            fill="url(#frostingTop)"
          />
          {/* Top tier top surface */}
          <ellipse cx="120" cy="94" rx="60" ry="11" fill="#FFFDF8" />

          {/* Strawberry / Flower decorations on top */}
          <circle cx="85" cy="92" r="5" fill="#E24C68" />
          <circle cx="120" cy="95" r="5" fill="#E24C68" />
          <circle cx="155" cy="92" r="5" fill="#E24C68" />

          {/* CANDLES */}
          {[
            { x: 92, y: 55, idx: 0, color: '#DCCBFA' },
            { x: 120, y: 48, idx: 1, color: '#FFF0B3' },
            { x: 148, y: 55, idx: 2, color: '#F8C8DC' },
          ].map((candle) => {
            const isLit = candlesLit[candle.idx];
            return (
              <g
                key={candle.idx}
                className="cursor-pointer"
                onClick={() => handleBlowCandle(candle.idx)}
              >
                {/* Candle Stick with stripes */}
                <rect
                  x={candle.x - 4}
                  y={candle.y}
                  width="8"
                  height="38"
                  rx="3"
                  fill={candle.color}
                  stroke="#EFA5B9"
                  strokeWidth="1"
                />
                <line x1={candle.x - 3} y1={candle.y + 8} x2={candle.x + 3} y2={candle.y + 14} stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
                <line x1={candle.x - 3} y1={candle.y + 20} x2={candle.x + 3} y2={candle.y + 26} stroke="#FFF" strokeWidth="2" strokeLinecap="round" />

                {/* Candle Wick */}
                <line x1={candle.x} y1={candle.y} x2={candle.x} y2={candle.y - 6} stroke="#59404D" strokeWidth="1.5" />

                {/* Animated Flame */}
                <AnimatePresence>
                  {isLit ? (
                    <motion.g
                      initial={{ scale: 0 }}
                      animate={{
                        scale: [1, 1.15, 0.95, 1],
                        y: [0, -2, 1, 0],
                      }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.3 },
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8 + candle.idx * 0.2,
                        ease: 'easeInOut',
                      }}
                    >
                      {/* Outer Flame Glow */}
                      <circle cx={candle.x} cy={candle.y - 14} r="10" fill="#FFF0B3" opacity="0.45" filter="blur(3px)" />
                      {/* Teardrop Flame */}
                      <path
                        d={`M ${candle.x} ${candle.y - 24} C ${candle.x + 5} ${candle.y - 14} ${candle.x + 4} ${candle.y - 7} ${candle.x} ${candle.y - 6} C ${candle.x - 4} ${candle.y - 7} ${candle.x - 5} ${candle.y - 14} ${candle.x} ${candle.y - 24} Z`}
                        fill="url(#flameGrad)"
                      />
                      {/* Inner Blue/White Core */}
                      <ellipse cx={candle.x} cy={candle.y - 9} rx="2" ry="3" fill="#FFFFFF" />
                    </motion.g>
                  ) : (
                    /* Smoke puff when blown out */
                    <motion.g
                      initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                      animate={{ opacity: 0, y: -20, scale: 1.5 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                      <circle cx={candle.x} cy={candle.y - 10} r="3" fill="#8C6C7E" opacity="0.4" />
                      <circle cx={candle.x - 2} cy={candle.y - 16} r="4" fill="#8C6C7E" opacity="0.3" />
                      <circle cx={candle.x + 3} cy={candle.y - 22} r="5" fill="#8C6C7E" opacity="0.2" />
                    </motion.g>
                  )}
                </AnimatePresence>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
