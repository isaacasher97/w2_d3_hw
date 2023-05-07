// Create a file called solutions.js inside of tonight's homework folder and work in there for the problems below

function setAlarm(employed, vacationing) {
    if (employed === true && vacationing === false) {
      return true;
    } else if (employed === true && vacationing === true) {
      return false;
    } else if (employed === false && vacationing === false) {
      return false;
    } else employed === false && vacationing === true;
    return false;
  }
//   console.log(setAlarm(true, true));
//   console.log(setAlarm(false, false));
//   console.log(setAlarm(false, true));
//   console.log(setAlarm(true, false));

setAlarm(true, true) // => returns false
setAlarm(false, false) // => returns false
setAlarm(false, true) // => returns false
setAlarm(true, false) // => returns true