// Create a file called solutions.js inside of tonight's homework folder and work in there for the problems below

// function setAlarm(employed, vacationing) {
//     if (employed === true && vacationing === false) {
//       return true;
//     } else if (employed === true && vacationing === true) {
//       return false;
//     } else if (employed === false && vacationing === false) {
//       return false;
//     } else employed === false && vacationing === true;
//     return false;
//   }
// //   console.log(setAlarm(true, true));
// //   console.log(setAlarm(false, false));
// //   console.log(setAlarm(false, true));
// //   console.log(setAlarm(true, false));

// setAlarm(true, true) // => returns false
// setAlarm(false, false) // => returns false
// setAlarm(false, true) // => returns false
// setAlarm(true, false) // => returns true

//2. Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.

// function oddNumberCount(number) {
//     let count = 0;
//     for (let i = 1; i < number; i+=1) {
//       if (i % 2 !== 0) {
//         count+=1;
//       }
//     }
//     return count;
//   }

// //   console.log(oddNumberCount(7))
// //   console.log(oddNumberCount(16))

// oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
// oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)


// 3. Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.

function trollsBeGone(sentence) {
    // Define a string of vowels that we want to remove
    const vowels = "aeiouAEIOU";
    // Initialize a new string to hold the result without vowels
    let newSentence = "";
    // Loop through each character in the original sentence
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];  // Get the character at the current index
      // If the character is not a vowel, add it to the new sentence
      if (!vowels.includes(char)) {
        newSentence += char;
      }
    }
    // Return the new sentence without vowels
    return newSentence;
  }
  

// console.log(trollsBeGone("This website is for losers LOL")) 

trollsBeGone("This website is for losers LOL") // => returns "Ths wbst s fr lsrs LL"