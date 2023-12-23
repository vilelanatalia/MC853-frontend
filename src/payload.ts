const numberOfElements = 2000;
const baseString = "abcdefghij";

export const payload = {
  load: new Array(numberOfElements).fill(baseString),
  size: numberOfElements * new Blob([baseString]).size,
};
