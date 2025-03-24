export class SoundManager {
  constructor() {
    this.sounds = {
      correctSound: new Audio('/public/assets/audio/youre-goddamn-right.mp3'),
      incorrectSound: new Audio(
        '/public/assets/audio/Voicy_Absolutely not.mp3'
      ),
    };
  }

  play(soundName) {
    this.sounds[soundName].currentTime = 0;
    this.sounds[soundName].play();
  }
}
