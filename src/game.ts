import type { Card } from "./types.js";
import { AudioController } from "./sounds.js";
import * as Utils from "./utils.js";

export class Game {
  pairs: number;
  cards: Card[] = [];

  firstIndex = -1;
  secondIndex = -1;
  lock = false;
  found = 0;

  audio: AudioController;

  constructor(pairs: number, audio: AudioController) {
    this.pairs = pairs;
    this.audio = audio;
    this.start();
  }

  private getCard(index: number): Card {
    return this.cards[index];
  }

  private buildCards(pairs: number): Card[] {
    let values: number[] = [];
    for (let i = 0; i < pairs; i++) {
      values.push(i);
      values.push(i);
    }

    Utils.shuffle(values);

    let result: Card[] = [];
    for (let i = 0; i < values.length; i++) {
      result.push({ id: i, value: values[i], state: "hidden" });
    }
    return result;
  }

  buildGrid(): void {
    const grid = document.getElementById("grid") as HTMLElement;
    grid.innerHTML = "";

    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i]!;
      const div = document.createElement("div");
      div.className = "card";

      const img = document.createElement("img");

      if (card.state === "hidden") img.src = "./assets/back.jpg";
      else img.src = "./assets/images/" + card.value + ".jpg";

      if (card.state === "matched") {
        img.style.opacity = "0.5";
        img.style.pointerEvents = "none";
      }

      img.addEventListener("click", () => {
        this.flipCard(card.id);
      });

      div.appendChild(img);
      grid.appendChild(div);
    }

    Utils.setProgress(this.found, this.pairs);
  }

  flipCard(index: number): void {
    if (this.lock) return;
    
    this.audio.startBackground();

    const clicked = this.getCard(index);

    if (clicked.state === "matched" || clicked.state === "visible") return;

    if (this.firstIndex === -1) {
      this.firstIndex = index;
      clicked.state = "visible";
      this.audio.play(this.audio.flipSound);
      this.buildGrid();
      return;
    }

    if (this.secondIndex === -1 && index !== this.firstIndex) {
      this.secondIndex = index;
      clicked.state = "visible";
      this.audio.play(this.audio.flipSound);
      this.buildGrid();
    }

    if (this.firstIndex === -1 || this.secondIndex === -1) return;

    this.lock = true;

    const first = this.getCard(this.firstIndex);
    const second = this.getCard(this.secondIndex);

    if (first.value === second.value) {
      first.state = "matched";
      second.state = "matched";
      this.found++;

      this.audio.play(this.audio.goodSound);

      this.firstIndex = -1;
      this.secondIndex = -1;
      this.lock = false;

      this.buildGrid();

      if (this.found === this.pairs) {
        this.audio.play(this.audio.gameOverSound);
      }
      return;
    }

    this.audio.play(this.audio.failSound);

    setTimeout(() => {
      const c1 = this.getCard(this.firstIndex);
      const c2 = this.getCard(this.secondIndex);
      c1.state = "hidden";
      c2.state = "hidden";

      this.firstIndex = -1;
      this.secondIndex = -1;
      this.lock = false;
      this.buildGrid();
    }, 1000);
  }

  start(): void {
    this.found = 0;
    this.firstIndex = -1;
    this.secondIndex = -1;
    this.lock = false;

    this.cards = this.buildCards(this.pairs);
    this.buildGrid();
  }
}