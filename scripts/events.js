import { upgradeChance, upgradeCosts } from "./data.js";

document.getElementById("boxUpgradeButton").onclick = () => {
  const point = game.point;
  const cost = upgradeCosts.boxUpgrade(game.reinforcement);
  if (cost <= point) {
    game.point -= cost;
    const indicator = document.createElement("div");
    indicator.classList.add("boxUpgradeIndicator");
    if (upgradeChance(game.reinforcement) > Math.random()) {
      game.reinforcement += 1;
      indicator.classList.add("plus");
      indicator.innerText = "+1";
    } else {
      game.reinforcement -= 1;
      indicator.classList.add("minus");
      indicator.innerText = "-1";
    }
    document.getElementById("box").appendChild(indicator);
    setTimeout(() => {
      indicator.remove();
    }, 1000);
  }
};
