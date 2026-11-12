import React, { useState } from 'react';
import { Volume2, VolumeX, RotateCcw, List, X, Sparkles, Heart } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

interface NavBarProps {
  currentScene: number;
  totalScenes: number;
  onSelectScene: (scene: number) => void;
  onReset: () => void;
}

export const SCENE_NAMES = [
  { id: 1, name: 'Magical Welcome', emoji: '🎀' },
  { id: 2, name: 'The Envelope', emoji: '💌' },
  { id: 3, name: 'Birthday Wishes', emoji: '🎂' },
  { id: 4, name: 'Memory Scrapbook', emoji: '📸' },
  { id: 5, name: 'Words From Heart', emoji: '💗' },
  { id: 6, name: 'Shayari Sirf Aapke Naam', emoji: '🌙' },
  { id: 7, name: 'Little Things I Love', emoji: '🧸' },
  { id: 8, name: 'The Birthday Gift', emoji: '🎁' },
  { id: 9, name: 'A Final Message', emoji: '✨' },
  { id: 10, name: 'Ek Chhoti Si Maafi', emoji: '🥺' },
];

export const NavBar: React.FC<NavBarProps> = ({
  currentScene,
  totalScenes,
  onSelectScene,
  onReset,
}) => {
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleAudio = () => {
    const nextState = !isAudioOn;
    setIsAudioOn(nextState);
    soundEffects.setMuted(!nextState);
    if (nextState) {
      soundEffects.playPop();
    }
  };

  return (
    <>
      {/* Top Floating Glassmorphism Pill */}
      <header className="fixed top-3 inset-x-0 z-40 flex justify-center px-3 pointer-events-none">
        <div className="pointer-events-auto max-w-lg w-full flex items-center justify-between px-3.5 py-2 rounded-full glass-romantic shadow-romantic border border-white/80">
          {/* Left: Menu & Scene Selector */}
          <button
            onClick={() => {
              soundEffects.playPop();
              setIsMenuOpen(true);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#FFF7F0] border border-[#F8C8DC] text-[#8B264A] text-xs font-semibold hover:bg-white transition-all cursor-pointer min-h-[44px]"
            aria-label="Open Chapter List"
          >
            <List className="w-4 h-4 text-[#C65B82]" />
            <span className="hidden xs:inline">Scenes</span>
          </button>

          {/* Center: Progress Indicator */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-xs font-bold text-[#8B264A]">
              <span>Chhavi's World</span>
              <Heart className="w-3 h-3 fill-[#E24C68] text-[#E24C68]" />
            </div>
            <div className="text-[11px] font-medium text-[#8C6C7E]">
              Scene {currentScene} / {totalScenes}
            </div>
          </div>

          {/* Right: Audio Toggle & Replay */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full border transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center ${
                isAudioOn
                  ? 'bg-[#FFF0B3] border-[#F3BE58] text-[#8B264A] shadow-sm'
                  : 'bg-[#FFF7F0] border-[#F8C8DC] text-[#8C6C7E] hover:bg-white'
              }`}
              title={isAudioOn ? 'Mute Music' : 'Play Gentle Melody'}
              aria-label={isAudioOn ? 'Mute Music' : 'Play Gentle Melody'}
            >
              {isAudioOn ? (
                <Volume2 className="w-4 h-4 text-[#C65B82] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => {
                soundEffects.playPop();
                onReset();
              }}
              className="p-2 rounded-full bg-[#FFF7F0] border border-[#F8C8DC] text-[#8C6C7E] hover:bg-white transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              title="Start From Beginning"
              aria-label="Start From Beginning"
            >
              <RotateCcw className="w-4 h-4 text-[#8B264A]" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Scene Selector Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setIsMenuOpen(false)} />

          <div className="relative z-10 w-full max-w-sm bg-[#FFFDF9] rounded-3xl p-5 shadow-2xl border border-[#F8C8DC] vintage-letter-paper max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#F8C8DC]">
              <div className="flex items-center gap-2">
                <span className="text-xl">📖</span>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#8B264A]">
                    Story Chapters
                  </h4>
                  <p className="text-[11px] text-[#8C6C7E]">
                    Jump to any scene in Chhavi's world
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-[#FFF0B3] border border-[#F4AFC4] text-[#8B264A] flex items-center justify-center hover:bg-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chapters list */}
            <div className="overflow-y-auto py-2 space-y-1.5 flex-1 pr-1">
              {SCENE_NAMES.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => {
                    soundEffects.playPop();
                    onSelectScene(scene.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-left transition-all cursor-pointer ${
                    currentScene === scene.id
                      ? 'bg-gradient-to-r from-[#F8C8DC] to-[#FFF0B3] border border-[#EFA5B9] font-bold text-[#8B264A] shadow-sm'
                      : 'hover:bg-[#F8C8DC]/30 text-[#59404D]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{scene.emoji}</span>
                    <div>
                      <span className="text-xs text-[#8C6C7E] block leading-none">
                        Scene {scene.id}
                      </span>
                      <span className="text-sm font-medium">{scene.name}</span>
                    </div>
                  </div>
                  {currentScene === scene.id && (
                    <Sparkles className="w-4 h-4 text-[#C65B82]" />
                  )}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#F8C8DC] text-center">
              <p className="text-[11px] font-handwriting text-lg text-[#C65B82]">
                A Little World Made Exclusively For You, Jann ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

