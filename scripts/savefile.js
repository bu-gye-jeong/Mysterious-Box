const savePoint = "MysteriousBox";

const initialGame = {
  _point: 0,
  _reinforcement: 0,
};
window.game = {};

export function load() {
  game = mergeObject(JSON.parse(localStorage.getItem(savePoint)), initialGame);
}

export function save() {
  localStorage.setItem(savePoint, JSON.stringify(game));
}

// From https://github.com/spotky1004/Bunch-of-Achievements/blob/main/src/util/SaveLoad.js

function mergeObject(target, source) {
  target = target ?? {};
  for (const i in source) {
    if (Array.isArray(source[i])) {
      target[i] = target[i] ?? [];
      mergeArray(target[i], source[i]);
    } else if (typeof source[i] === "object") {
      target[i] = mergeObject(target[i], source[i]);
    } else {
      target[i] = source[i].constructor(target[i] ?? source[i]);
    }
  }
  return target;
}
function mergeArray(target, source) {
  for (let i = 0, l = source.length; i < l; i++) {
    if (Array.isArray(source[i])) {
      mergeArray(target[i], source[i]);
    } else if (typeof source[i] === "object") {
      target[i] = mergeObject(target[i], source[i]);
    } else {
      target[i] = source[i].constructor(target[i] ?? source[i]);
    }
  }
  return target;
}
