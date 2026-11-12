import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface FloatingHeartsProps {
  count?: number;
  intensity?: 'subtle' | 'normal' | 'rich';
}

export const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count = 18, intensity = 'normal' }) => {
  const hearts = useMemo(() => {
    const items = [];
    const actualCount = intensity === 'subtle' ? 10 : intensity === 'rich' ? 26 : count;
    const colors = ['#F8C8DC', '#F4AFC4', '#EFA5B9', '#DCCBFA', '#FFD6C2', '#FFF0B3'];
    const emojis = ['💖', '💕', '✨', '🌸', '🎀', '💗'];

    for (let i = 0; i < actualCount; i++) {
      items.push({
        id: i,
        left: `${Math.random() * 95}%`,
        size: Math.floor(Math.random() * 16) + 14, // 14px to 30px
        duration: Math.random() * 8 + 8, // 8s to 16s
        delay: Math.random() * 6,
        color: colors[i % colors.length],
        emoji: emojis[i % emojis.length],
        drift: (Math.random() - 0.5) * 60,
      });
    }
    return items;
  }, [count, intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ y: '110vh', opacity: 0, scale: 0.5, x: 0 }}
          animate={{
            y: '-15vh',
            opacity: [0, 0.75, 0.85, 0],
            scale: [0.5, 1, 1.1, 0.9],
            x: [0, h.drift, -h.drift / 2, h.drift],
            rotate: [0, 15, -15, 10],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: h.left,
            fontSize: `${h.size}px`,
            filter: 'drop-shadow(0 2px 6px rgba(244, 175, 196, 0.4))',
          }}
        >
          {h.emoji}
        </motion.div>
      ))}
    </div>
  );
};

