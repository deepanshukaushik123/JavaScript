console.clear()

//var currentDay = 'Mon'

const currentDay = window. prompt("Enter the Day for Timing: ");
 alert("Your selected Day is " + currentDay);

switch(currentDay) {
    case 'Mon' :
        console.log('Timings: 10:00-06:00')
        break;

     case 'Tue' :
         console.log('Timings: 09:00-05:00')
         break;

    case 'Wed' :
        console.log('Timings: 09:30-05:30')
        break;

    case 'Thu' :
        console.log('Timings: 10:15-06:15')
        break;

    case 'Fri' :
        console.log('Timings: 09:05-06:05')
        break;

    case 'Sat' :
        console.log('Timings: 09:00-05:00')
        break;

    case 'Sun' :
        console.log('Timings: 09:00-01:00')

    default:
        console.log('Not a right day')

      
}
