console.clear()

var mCar = {
    "p1" : "350 kmph",
    "gallardo" : '320 kmph',
    "veyron" : '409 kmph',
    "agera" : '429 kmph'
}

console.log(mCar)
console.log(typeof(mCar))

var mAgera = {
    name : 'Agera',
    manufacturer : {
        name : "Koenigsegg",
        location : "Sweden"
    },
    topSpeed : 429,
     color : 'Black',
     spoilers : false,
     applyBrakes: function() {
         setTimeout(function() {
         console.log('Car Stopped');
     }, 5000)
}
}

console.log(mAgera.applyBrakes()) // applyBrakes function after 5 sec
console.log(mAgera.name)
console.log(mAgera.color)
console.log(mAgera.topSpeed)
console.log(mAgera.spoilers)
console.log(typeof(mAgera))