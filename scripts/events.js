import { upgradeCosts } from "./data.js";

document.getElementById("boxUpgradeButton").onclick = () => {
  const point = game.point;
  const cost = upgradeCosts.boxUpgrade(game.reinforcement);
  if (cost <= point) {
    game.point -= cost;
  }
};
