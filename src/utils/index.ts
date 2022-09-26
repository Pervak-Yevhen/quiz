import { SIZE_EXP } from "../constants/regexp";

export const getMediumWidth = ():number => Number(
  getComputedStyle(document.documentElement)
    .getPropertyValue('--s-medium-width').trim().match(SIZE_EXP)?.[1]
);
