export class SoundManager {
  constructor() {
    this.sounds = {
      correct: new Audio('./public/assets/sounds/youre-goddamn-right.mp3'),
      incorrect: new Audio('./public/assets/sounds/Voicy_Absolutely not.mp3'),
    };
    this.mute = false;
  }

  play(soundName) {
    if (!this.mute) {
      this.sounds[soundName].currentTime = 0;
      this.sounds[soundName].play();
    }
  }
}
