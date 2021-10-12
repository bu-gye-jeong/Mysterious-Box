import { upgradeChance, upgradeCosts } from "./data.js";

export const setters = {
  point(v) {
    document.getElementById("point").innerHTML = v + " pt";
  },
  reinforcement(v) {
    document.getElementById("boxUpgrade").innerHTML = "+" + v;
    document.getElementById("boxUpgradeChance").innerHTML =
      (upgradeChance(v) * 100).toFixed(1) + "%";
    document.getElementById("boxUpgradeCost").innerHTML =
      "Cost: " + upgradeCosts.boxUpgrade(v);
  },
  items(v) {
    [...document.getElementsByClassName("itemCount")].forEach((ele, idx) => {
      ele.innerHTML = v[idx];
    });
  },
};
