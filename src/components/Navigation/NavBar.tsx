import React, { useState } from 'react';
import { Volume2, VolumeX, Heart, Sparkles } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export const NavBar: React.FC = () => {
  const [isAudioOn, setIsAudioOn] = useState(false);

  const toggleAudio = () => {
    const nextState = !isAudioOn;
    setIsAudioOn(nextState);
    soundEffects.setMuted(!nextState);
    if (nextState) {
      soundEffects.playPop();
    }
  };

  return (
    <header className="fixed top-3 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto max-w-md w-full flex items-center justify-between px-4 py-2 rounded-full bg-[#FFFDF9] shadow-romantic border border-[#F8E4ED]">
        {/* Left: Romantic Title with Heart */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#F8C8DC] flex items-center justify-center text-xs shadow-inner">
            🎀
          </div>
          <span className="font-serif font-bold text-sm sm:text-base text-[#8B264A] tracking-wide flex items-center gap-1.5">
            Chhavi's World
            <Heart className="w-3.5 h-3.5 fill-[#E24C68] text-[#E24C68] animate-pulse" />
          </span>
        </div>

        {/* Right: Music Toggle with gentle cue */}
        <button
          onClick={toggleAudio}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all cursor-pointer min-h-[40px] text-xs font-semibold ${
            isAudioOn
              ? 'bg-[#FFF0B3] border-[#F3BE58] text-[#8B264A] shadow-sm'
              : 'bg-[#FFF7F0] border-[#F8C8DC] text-[#8C6C7E] hover:bg-white'
          }`}
          title={isAudioOn ? 'Mute Music' : 'Play Happy Birthday Instrumental Melody'}
          aria-label={isAudioOn ? 'Mute Music' : 'Play Happy Birthday Instrumental Melody'}
        >
          {isAudioOn ? (
            <>
              <Volume2 className="w-4 h-4 text-[#C65B82] animate-bounce" />
              <span className="text-[11px] font-bold text-[#8B264A]">Music On 🎶</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#8C6C7E]" />
              <span className="text-[11px]">Music Off</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
