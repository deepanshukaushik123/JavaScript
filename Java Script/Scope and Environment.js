

var num1 = 10 // Global Variable
//num2 is local Variable which is declared inside function
function sum(num2) {
    console.log(num1 + num2)
}

sum(20)
console.log(num1)
console.log(num2)