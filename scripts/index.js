import { load, save } from "./savefile.js";
import { setters } from "./setters.js";
import { tick } from "./tick.js";

setInterval(tick, 1000 / 60);
setInterval(save, 5 * 1000);

load();

Object.keys(game).forEach((key) => {
  Object.defineProperty(game, key.substring(1), {
    set: (v) => {
      game[key] = v;
      setters[key.substring(1)](v);
    },
    get: () => game[key],
  });
});
