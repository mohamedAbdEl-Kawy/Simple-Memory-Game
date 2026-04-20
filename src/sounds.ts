export class AudioController {

  bgSound: HTMLAudioElement;
  flipSound: HTMLAudioElement;
  goodSound: HTMLAudioElement;
  failSound: HTMLAudioElement;
  gameOverSound: HTMLAudioElement;
  audioStarted: boolean = false;

  constructor() {
    this.bgSound = new Audio("./assets/audio/fulltrack.mp3");
    this.bgSound.loop = true;

    this.flipSound = new Audio("./assets/audio/flip.mp3");
    this.goodSound = new Audio("./assets/audio/good.mp3");
    this.failSound = new Audio("./assets/audio/fail.mp3");
    this.gameOverSound = new Audio("./assets/audio/game-over.mp3");
  }

  startBackground(): void {
    if (this.audioStarted) return;

    this.audioStarted = true;
    this.bgSound.play().catch(() => {console.log("error happened when trying to play bg audio")});
  }

  play(sound: HTMLAudioElement): void {
    sound.currentTime = 0;
    sound.play().catch(() => {console.log("error happened when trying to play bg audio")});
  }
}