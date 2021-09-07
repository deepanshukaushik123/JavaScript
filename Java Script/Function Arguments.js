console.clear()

function Greetings(PersonName) {
    console.log('Welcome' + PersonName)
}

Greetings(' Deepanshu')

function totalSum(num1, num2, num3) {
    console.log('num1 =>' + num1)
    console.log('num2 =>' + num2)
    console.log('num3 =>' + num3)
    // console.log(num1 + num2)
    if (num3 !== undefined) {
        console.log(num1 + num2 + num3)
    } else {
        console.log(num1 + num2)
    }
}

totalSum(2, 5) // These values will be num1 and num2
totalSum(22, 34, 54)
// totalSum()