var countDownElement = document.getElementById('countdown')

var initialCountdownVal = countDownElement.innerHTML

var bgImage = document.getElementById("bg-image")
// var bgImageElement = document.getElementById('bg-image')
// var bgImageElement = document.getElementById('bg-image-2')



var interval = setInterval(function(){
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;  // Using ternary operator
    countDownElement.innerHTML = initialCountdownVal
    // var backimagepath = initialCountdownVal % 2 === 0 ? 'Background-1.jpg' :  'Background-2.jpg'
    countDownElement.style.fontSize = initialCountdownVal * 100 + "px"

    bgImage.style.width = initialCountdownVal * 10 + "%"

    console.log(initialCountdownVal * 100 + "px")
    // bgImageElement.src = backimagepath

    if (initialCountdownVal <= 0) {
    clearInterval(interval)
    }
}, 1000);

