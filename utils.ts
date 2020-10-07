/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Oct 05 2020 17:29:46 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

export const printType = (variable: any) => {
  console.log(variable, "=>", Object.prototype.toString.call(variable));
};
