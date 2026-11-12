import React from 'react';
import { GiftBox } from '../components/GiftBox/GiftBox';

interface SceneProps {
  onNext: () => void;
}

export const Scene8Gift: React.FC<SceneProps> = ({ onNext }) => {
  return (
    <div className="relative min-h-[82vh] flex flex-col items-center justify-center py-6 px-3">
      <GiftBox onContinue={onNext} />
    </div>
  );
};

