console.clear()

function mSum () {
    var x = 10
    var y = 15
    var sum = x + y;
    console.log(sum)

}

mSum() //Calling a Function

function nSum () {
    var mNum = 15
    var mNum2 = 25
    var mSum = mNum + mNum2;

    return mSum // WIth return it will print 40 and without it Undefined
}

console.log(nSum())

var totalSum = 100 + nSum()
console.log(totalSum);