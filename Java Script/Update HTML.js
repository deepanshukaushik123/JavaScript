var countDownElement = document.getElementById('countdown')

var initialCountdownVal = countDownElement.innerHTML
var bgImageElement = document.getElementById('bg-image')
// var bgImageElement = document.getElementById('bg-image-2')



setInterval(function(){
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;  // Using ternary operator
    countDownElement.innerHTML = initialCountdownVal
    var backimagepath = initialCountdownVal % 2 === 0 ? 'Background-1.jpg' :  'Background-2.jpg'

    bgImageElement.src = backimagepath
}, 1000);

