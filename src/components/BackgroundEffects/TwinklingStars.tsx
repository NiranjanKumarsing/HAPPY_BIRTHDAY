import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface TwinklingStarsProps {
  count?: number;
}

export const TwinklingStars: React.FC<TwinklingStarsProps> = ({ count = 25 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 95}%`,
      left: `${Math.random() * 95}%`,
      size: Math.random() * 6 + 4,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 1.5,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0.2, scale: 0.6 }}
          animate={{
            opacity: [0.15, 0.9, 0.2],
            scale: [0.6, 1.25, 0.6],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: '50%',
            backgroundColor: '#FFF0B3',
            boxShadow: '0 0 10px 2px rgba(255, 240, 179, 0.8), 0 0 16px 4px rgba(248, 200, 220, 0.5)',
          }}
        />
      ))}
    </div>
  );
};

