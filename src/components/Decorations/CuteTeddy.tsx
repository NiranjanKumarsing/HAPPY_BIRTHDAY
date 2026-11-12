import React from 'react';
import { motion } from 'framer-motion';

export type TeddyMood = 'idle' | 'blush' | 'dance' | 'hug' | 'wink' | 'heart' | 'gift' | 'sorry';

interface CuteTeddyProps {
  mood?: TeddyMood;
  className?: string;
  size?: number;
}

export const CuteTeddy: React.FC<CuteTeddyProps> = ({
  mood = 'idle',
  className = '',
  size = 120,
}) => {
  const isDancing = mood === 'dance';
  const isSorry = mood === 'sorry';
  const hasGift = mood === 'gift';
  const hasHeart = mood === 'heart' || mood === 'hug' || mood === 'sorry';

  return (
    <motion.div
      className={`relative inline-block select-none ${className}`}
      animate={
        isDancing
          ? {
              rotate: [-5, 5, -5],
              y: [0, -8, 0],
            }
          : isSorry
          ? {
              y: [0, 2, 0],
              rotate: [-1, 1, -1],
            }
          : {
              y: [0, -4, 0],
            }
      }
      transition={{
        duration: isDancing ? 0.8 : 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Soft Teddy Fur Gradient */}
        <defs>
          <radialGradient id="teddyBody" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#E8C39E" />
            <stop offset="100%" stopColor="#D4A77D" />
          </radialGradient>
          <radialGradient id="teddyInnerEar" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F8C8DC" />
            <stop offset="100%" stopColor="#EFA5B9" />
          </radialGradient>
          <radialGradient id="heartGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FF7B90" />
            <stop offset="100%" stopColor="#C65B82" />
          </radialGradient>
        </defs>

        {/* Left Ear */}
        <circle cx="28" cy="24" r="14" fill="url(#teddyBody)" />
        <circle cx="28" cy="24" r="8" fill="url(#teddyInnerEar)" opacity="0.8" />

        {/* Right Ear */}
        <circle cx="72" cy="24" r="14" fill="url(#teddyBody)" />
        <circle cx="72" cy="24" r="8" fill="url(#teddyInnerEar)" opacity="0.8" />

        {/* Little Head Bow / Flower */}
        <circle cx="34" cy="18" r="4" fill="#F4AFC4" />
        <circle cx="40" cy="18" r="4" fill="#F4AFC4" />
        <circle cx="37" cy="18" r="2.5" fill="#FFF0B3" />

        {/* Body */}
        <ellipse cx="50" cy="68" rx="28" ry="24" fill="url(#teddyBody)" />
        {/* Tummy */}
        <ellipse cx="50" cy="69" rx="18" ry="16" fill="#F7E6D4" opacity="0.85" />

        {/* Left Foot */}
        <ellipse cx="30" cy="88" rx="10" ry="7" fill="url(#teddyBody)" />
        <circle cx="30" cy="88" r="4" fill="#F8C8DC" opacity="0.6" />

        {/* Right Foot */}
        <ellipse cx="70" cy="88" rx="10" ry="7" fill="url(#teddyBody)" />
        <circle cx="70" cy="88" r="4" fill="#F8C8DC" opacity="0.6" />

        {/* Head */}
        <circle cx="50" cy="40" r="26" fill="url(#teddyBody)" />

        {/* Snout */}
        <ellipse cx="50" cy="46" rx="12" ry="9" fill="#F7E6D4" />

        {/* Little Nose */}
        <ellipse cx="50" cy="43" rx="3.5" ry="2.5" fill="#59404D" />

        {/* Mouth */}
        {isSorry ? (
          // Sweet bashful small curve
          <path d="M 47 48 Q 50 49 53 48" stroke="#59404D" strokeWidth="1.6" strokeLinecap="round" />
        ) : (
          <path d="M 46 48 Q 50 52 54 48" stroke="#59404D" strokeWidth="1.6" strokeLinecap="round" />
        )}

        {/* Eyes */}
        {mood === 'wink' ? (
          <>
            <circle cx="39" cy="36" r="3" fill="#59404D" />
            <circle cx="38" cy="35" r="1" fill="#FFFFFF" />
            <path d="M 58 37 Q 61 33 64 37" stroke="#59404D" strokeWidth="2" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="39" cy="36" r="3.2" fill="#59404D" />
            <circle cx="38" cy="34.8" r="1.1" fill="#FFFFFF" />
            <circle cx="61" cy="36" r="3.2" fill="#59404D" />
            <circle cx="60" cy="34.8" r="1.1" fill="#FFFFFF" />
          </>
        )}

        {/* Cheeks blush */}
        <ellipse cx="33" cy="43" rx="4.5" ry="3" fill="#F4AFC4" opacity="0.75" />
        <ellipse cx="67" cy="43" rx="4.5" ry="3" fill="#F4AFC4" opacity="0.75" />

        {/* Arms / What Teddy is holding */}
        {hasGift ? (
          <>
            {/* Gift Box */}
            <rect x="40" y="58" width="20" height="18" rx="3" fill="#F8C8DC" stroke="#EFA5B9" strokeWidth="1.5" />
            {/* Ribbon */}
            <line x1="50" y1="58" x2="50" y2="76" stroke="#FFF0B3" strokeWidth="3" />
            <line x1="40" y1="67" x2="60" y2="67" stroke="#FFF0B3" strokeWidth="3" />
            {/* Ribbon Bow */}
            <circle cx="47" cy="56" r="2.5" fill="#FFF0B3" />
            <circle cx="53" cy="56" r="2.5" fill="#FFF0B3" />

            {/* Arms hugging gift */}
            <ellipse cx="34" cy="66" rx="6" ry="10" transform="rotate(-25 34 66)" fill="url(#teddyBody)" />
            <ellipse cx="66" cy="66" rx="6" ry="10" transform="rotate(25 66 66)" fill="url(#teddyBody)" />
          </>
        ) : hasHeart ? (
          <>
            {/* Puffy Love Heart */}
            <g transform="translate(50, 68) scale(0.9) translate(-50, -68)">
              <path
                d="M 50 60 C 45 52 32 52 32 63 C 32 73 48 81 50 83 C 52 81 68 73 68 63 C 68 52 55 52 50 60 Z"
                fill="url(#heartGrad)"
              />
              <circle cx="41" cy="58" r="2" fill="#FFFFFF" opacity="0.5" />
            </g>
            {/* Arms hugging heart */}
            <ellipse cx="32" cy="67" rx="6" ry="9" transform="rotate(-30 32 67)" fill="url(#teddyBody)" />
            <ellipse cx="68" cy="67" rx="6" ry="9" transform="rotate(30 68 67)" fill="url(#teddyBody)" />
          </>
        ) : (
          <>
            {/* Normal Cute Little Paws */}
            <ellipse cx="28" cy="64" rx="7" ry="11" transform="rotate(-20 28 64)" fill="url(#teddyBody)" />
            <ellipse cx="72" cy="64" rx="7" ry="11" transform="rotate(20 72 64)" fill="url(#teddyBody)" />
          </>
        )}
      </svg>
    </motion.div>
  );
};

