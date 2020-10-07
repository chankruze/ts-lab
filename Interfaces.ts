/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Oct 07 2020 18:50:56 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const printLabel = (labeledObj: { label: string }) => {
  console.log(labeledObj.label);
};

let myObj = { size: 10, label: "size of object" };

const Interfaces = () => {
  console.log("\n**** BasicTypes.ts ****\n");
  // 1
  printLabel(myObj);
};

export default Interfaces;
