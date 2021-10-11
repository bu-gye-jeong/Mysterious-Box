export const upgradeChance = (l) => 0.9 ** l;

export const upgradeCosts = {
  boxUpgrade: (l) => Math.floor(1.6 ** l),
};
