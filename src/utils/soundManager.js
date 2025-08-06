class SoundManager {
  constructor() {
    this.context = null;
    this.enabled = true;
    this.initAudioContext();
  }

  initAudioContext() {
    try {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      console.warn('Web Audio API not supported');
    }
  }

  // Create different types of sounds
  createBeep(frequency = 800, duration = 100, volume = 0.1) {
    if (!this.context || !this.enabled) return;

    const oscillator = this.context.createOscillator();
    const gainNode = this.context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.context.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(volume, this.context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration / 1000);

    oscillator.start(this.context.currentTime);
    oscillator.stop(this.context.currentTime + duration / 1000);
  }

  // Sound presets
  playHover() {
    this.createBeep(600, 50, 0.05);
  }

  playClick() {
    this.createBeep(800, 80, 0.08);
  }

  playSuccess() {
    this.createBeep(523, 100, 0.06); // C5
    setTimeout(() => this.createBeep(659, 100, 0.06), 100); // E5
    setTimeout(() => this.createBeep(784, 200, 0.06), 200); // G5
  }

  playNotification() {
    this.createBeep(880, 150, 0.04);
  }

  playTransition() {
    this.createBeep(440, 200, 0.03);
  }

  toggle() {
    this.enabled = !this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }
}

export const soundManager = new SoundManager();