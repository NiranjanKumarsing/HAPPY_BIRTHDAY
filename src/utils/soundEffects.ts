// Web Audio API Sound Synthesizer - 100% offline, lightweight, reliable across iOS & Android!

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true; // default silent as per requirements
  private musicInterval: number | null = null;
  private musicNotesIndex: number = 0;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public init() {
    this.getContext();
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stopRomanticMelody();
    } else {
      this.startRomanticMelody();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public playPop() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch {
      // ignore
    }
  }

  public playChime() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const now = ctx.currentTime + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.55);
      });
    } catch {
      // ignore
    }
  }

  public playEnvelopeOpen() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      // Gentle warm harp sweep
      const freqs = [392.0, 493.88, 587.33, 659.25, 783.99]; // G4, B4, D5, E5, G5
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const now = ctx.currentTime + idx * 0.07;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);

        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.65);
      });
    } catch {
      // ignore
    }
  }

  public playCandleBlow() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      // Soft airy whoosh + gentle chime
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.25);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.26);

      // Followed by little bell
      setTimeout(() => {
        this.playChime();
      }, 150);
    } catch {
      // ignore
    }
  }

  public playMagicSparkle() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const notes = [659.25, 783.99, 987.77, 1046.5, 1318.51, 1567.98];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const now = ctx.currentTime + idx * 0.06;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.5);
      });
    } catch {
      // ignore
    }
  }

  // Gentle music box background melody
  private startRomanticMelody() {
    if (this.musicInterval) return;
    const ctx = this.getContext();
    if (!ctx) return;

    // Soft pentatonic romantic lullaby / music-box notes (Hz)
    // E5, G5, A5, B5, D6, E6, D6, B5, A5, G5, E5, D5
    const melody = [
      659.25, 783.99, 880.0, 987.77, 1174.66, 1318.51, 
      1174.66, 987.77, 880.0, 783.99, 659.25, 587.33,
      659.25, 880.0, 783.99, 587.33, 523.25, 587.33
    ];

    this.musicInterval = window.setInterval(() => {
      if (this.isMuted) return;
      const actx = this.getContext();
      if (!actx) return;

      const freq = melody[this.musicNotesIndex % melody.length];
      this.musicNotesIndex++;

      try {
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        const now = actx.currentTime;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        // Very soft, gentle music box envelope
        gain.gain.setValueAtTime(0.028, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

        osc.connect(gain);
        gain.connect(actx.destination);

        osc.start(now);
        osc.stop(now + 0.75);
      } catch {
        // ignore
      }
    }, 420);
  }

  private stopRomanticMelody() {
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }
}

export const soundEffects = new SoundEngine();

