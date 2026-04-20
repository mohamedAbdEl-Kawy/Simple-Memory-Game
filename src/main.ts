import { Game } from "./game.js";
import { AudioController } from "./sounds.js";
const audio = new AudioController();
const game = new Game(9, audio);
window.onload = function () {
  game.start();
};