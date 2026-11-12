import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface FallingPetalsProps {
  count?: number;
}

export const FallingPetals: React.FC<FallingPetalsProps> = ({ count = 16 }) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 7, // 7-13s
      size: Math.random() * 10 + 12,
      rotation: Math.random() * 360,
      sway: Math.random() * 80 - 40,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: '-10vh', opacity: 0, x: 0, rotate: p.rotation }}
          animate={{
            y: '105vh',
            opacity: [0, 0.8, 0.75, 0],
            x: [0, p.sway, -p.sway, p.sway * 1.5],
            rotate: [p.rotation, p.rotation + 180, p.rotation + 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            background: 'linear-gradient(135deg, #F4AFC4 0%, #EFA5B9 60%, #C65B82 100%)',
            borderRadius: '60% 40% 60% 40% / 70% 30% 70% 30%',
            boxShadow: '0 2px 6px rgba(198, 91, 130, 0.25)',
            transformOrigin: 'center center',
          }}
        />
      ))}
    </div>
  );
};

