// Web Audio API Sound Synthesizer - 100% offline, lightweight, reliable across iOS & Android!

interface NoteEvent {
  freq: number;
  duration: number; // in milliseconds
  gap: number;      // pause after note in milliseconds
}

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false; // default ON when site is opened
  private melodyTimeout: number | null = null;
  private currentNoteIndex: number = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      const unlockAudio = () => {
        if (!this.ctx) {
          this.getContext();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume().then(() => {
            if (!this.isMuted && !this.melodyTimeout) {
              this.playNextHappyBirthdayNote();
            }
          }).catch(() => {});
        } else if (!this.isMuted && !this.melodyTimeout) {
          this.playNextHappyBirthdayNote();
        }
      };

      window.addEventListener('click', unlockAudio, { passive: true });
      window.addEventListener('touchstart', unlockAudio, { passive: true });
      window.addEventListener('pointerdown', unlockAudio, { passive: true });
      window.addEventListener('keydown', unlockAudio, { passive: true });
    }
  }

  // Exact Happy Birthday instrumental melody notes (in Hz)
  private happyBirthdayNotes: NoteEvent[] = [
    // Line 1: Hap-py birth-day to you
    { freq: 293.66, duration: 280, gap: 40 },  // D4
    { freq: 293.66, duration: 160, gap: 40 },  // D4
    { freq: 329.63, duration: 450, gap: 50 },  // E4
    { freq: 293.66, duration: 450, gap: 50 },  // D4
    { freq: 392.00, duration: 450, gap: 50 },  // G4
    { freq: 369.99, duration: 900, gap: 200 }, // F#4

    // Line 2: Hap-py birth-day to you
    { freq: 293.66, duration: 280, gap: 40 },  // D4
    { freq: 293.66, duration: 160, gap: 40 },  // D4
    { freq: 329.63, duration: 450, gap: 50 },  // E4
    { freq: 293.66, duration: 450, gap: 50 },  // D4
    { freq: 440.00, duration: 450, gap: 50 },  // A4
    { freq: 392.00, duration: 900, gap: 200 }, // G4

    // Line 3: Hap-py birth-day dear Chhavi
    { freq: 293.66, duration: 280, gap: 40 },  // D4
    { freq: 293.66, duration: 160, gap: 40 },  // D4
    { freq: 587.33, duration: 480, gap: 50 },  // D5
    { freq: 493.88, duration: 480, gap: 50 },  // B4
    { freq: 392.00, duration: 450, gap: 50 },  // G4
    { freq: 369.99, duration: 450, gap: 50 },  // F#4
    { freq: 329.63, duration: 850, gap: 200 }, // E4

    // Line 4: Hap-py birth-day to you
    { freq: 523.25, duration: 280, gap: 40 },  // C5
    { freq: 523.25, duration: 160, gap: 40 },  // C5
    { freq: 493.88, duration: 480, gap: 50 },  // B4
    { freq: 392.00, duration: 480, gap: 50 },  // G4
    { freq: 440.00, duration: 520, gap: 50 },  // A4
    { freq: 392.00, duration: 1200, gap: 800 }, // G4 (sustained celebration)
  ];

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
    if (!this.isMuted && !this.melodyTimeout) {
      this.playNextHappyBirthdayNote();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stopHappyBirthdayMelody();
    } else {
      this.stopHappyBirthdayMelody();
      this.currentNoteIndex = 0;
      this.playNextHappyBirthdayNote();
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

  // Plays Happy Birthday Instrumental Note by Note
  private playNextHappyBirthdayNote() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const note = this.happyBirthdayNotes[this.currentNoteIndex];
    const now = ctx.currentTime;
    const durationSeconds = note.duration / 1000;

    try {
      // Main music-box bell tone
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(note.freq, now);

      // Soft harmonic overtone for crystalline music-box feel
      const oscHarmonic = ctx.createOscillator();
      const gainHarmonic = ctx.createGain();
      oscHarmonic.type = 'sine';
      oscHarmonic.frequency.setValueAtTime(note.freq * 2, now);

      // Volume envelope
      gain.gain.setValueAtTime(0.045, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSeconds);

      gainHarmonic.gain.setValueAtTime(0.015, now);
      gainHarmonic.gain.exponentialRampToValueAtTime(0.0001, now + durationSeconds * 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      oscHarmonic.connect(gainHarmonic);
      gainHarmonic.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + durationSeconds);

      oscHarmonic.start(now);
      oscHarmonic.stop(now + durationSeconds);
    } catch {
      // ignore
    }

    // Schedule next note
    this.currentNoteIndex = (this.currentNoteIndex + 1) % this.happyBirthdayNotes.length;
    this.melodyTimeout = window.setTimeout(() => {
      this.playNextHappyBirthdayNote();
    }, note.duration + note.gap);
  }

  private stopHappyBirthdayMelody() {
    if (this.melodyTimeout) {
      clearTimeout(this.melodyTimeout);
      this.melodyTimeout = null;
    }
  }
}

export const soundEffects = new SoundEngine();
