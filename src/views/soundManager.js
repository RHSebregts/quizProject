export class SoundManager {
  constructor() {
    this.sounds = {
      correct: new Audio('./public/assets/sounds/youre-goddamn-right.mp3'),
      incorrect: new Audio('./public/assets/sounds/Voicy_Absolutely not.mp3'),
    };
  }

  play(soundName) {
    this.sounds[soundName].currentTime = 0;
    this.sounds[soundName].play();
  }
}
