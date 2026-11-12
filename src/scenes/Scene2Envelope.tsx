import React from 'react';
import { Envelope } from '../components/Envelope/Envelope';

interface SceneProps {
  onNext: () => void;
}

export const Scene2Envelope: React.FC<SceneProps> = ({ onNext }) => {
  return (
    <div className="relative min-h-[82vh] flex flex-col items-center justify-center py-6 px-3">
      <Envelope onContinue={onNext} />
    </div>
  );
};

