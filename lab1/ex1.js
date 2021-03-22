//Lab1 - Ex1
let myArray = ["spring", "autumn", "winter"];

for (let [i, a] of myArray.entries()) {
  let n = myArray[i].length;
  let str1 = myArray[i].substring(0, 2);
  let str2 = myArray[i].substring(myArray[i].length - 2);
  let str3 = str1 + str2;
  myArray[a] = str3;
  if (n < 2) myArray[a] = " ";
  console.log(myArray[(i, a)]);
}
