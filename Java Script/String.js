
var exampleString = "This is JavaScript tutorial"

// toUpperCase() - It coverts our string -> uppercase characters
console.log(exampleString.toUpperCase())

//to LowerCase() - It converts our string -> lowercase characters
console.log(exampleString.toLowerCase())

// concat() - It merges two or more strings
var firstName = "Deepanshu"
var lastName = "Kaushik"

console.log(exampleString.concat(' ', firstName, ' ', lastName))

// We can also use '+' to concat two or more strings
console.log(firstName + ' ' + lastName)

// trim() - It removes extra spaces

var extraSpaceString = '      mystring'
console.log(extraSpaceString.trim())
 
var extraSpaceStringExample2 = '      mystring     '
console.log(extraSpaceStringExample2.trim())

//charAt() -. this take a position as an arg and returns the character at that position
var charAtExampleString = 'This is my test string'
console.log(charAtExampleString.charAt(5))

// split() -> splits our string on the basis of the arguments passed
var sampleString = 'This is my sample string'
console.log(sampleString.split(' '))

var sampleString2 = 'This,is,my,sample,string'
console.log(sampleString2.split(','))

var sampleString3 = "This is awesome"
console.log(sampleString3.split())
