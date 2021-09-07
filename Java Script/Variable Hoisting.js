// It is the mechanism where variables and functions can be used before declaring them is called Hoisting in JS
/*
The variables and  function declarations are moved to the top of their scope before code execution
*/

console.log(Num)
Num = 10
console.log(Num)
var Num;

console.log(str1)
str1 = 'Demo String'
console.log(str1)
var str1;