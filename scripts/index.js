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
      if (typeof setters[key.substring(1)] === "function")
        setters[key.substring(1)](v);
    },
    get: () => game[key],
  });
});

Object.keys(game).forEach((key) => {
  game[key.substring(1)] = game[key];
});

const itemTab = document.getElementById("itemTab");
if (itemTab.hasChildNodes()) {
  [...itemTab.children].forEach((ele, idx) => {
    ele.style.backgroundImage = `url(./resources/in${idx + 1}.png)`;
  });
}
