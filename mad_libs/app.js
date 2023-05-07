// First, create an object called words with the keys given below. Each key's property should be an empty string. This is where we will save the user's input later.
let words = {
    number: '',
    adjective: '',
    pluralNoun: '',
    adverb: '',
    anotherAdjective: ''
  };
// Now that we have our object set up, we want to work on accepting user input so that we can save it to the object.
// Start by creating a function called startMadlib that prompts a user to enter each word type and save their input to the appropriate object key. For example, the following prompt's user input should be saved to the number key in our words object:
  function startMadlib() {
    words.number = prompt('Enter a number:');
    words.adjective = prompt('Enter an adjective:');
    words.pluralNoun = prompt('Enter a plural noun:');
    words.adverb = prompt('Enter an adverb:');
    words.anotherAdjective = prompt('Enter another adjective:');
  }

  startMadlib();
  
//   Now that we've accepted the user's input and saved it to the object, we can use those values to create a MadLib!
// Use the following story and concatenate or interpolate the values from the object into it.

  let story = `Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdjective} fame.`;
  
  console.log(story);
  alert(story);
      


