let words = {
    number: '',
    adjective: '',
    pluralNoun: '',
    adverb: '',
    anotherAdjective: ''
  };
  
  function startMadlib() {
    words.number = prompt('Enter a number:');
    words.adjective = prompt('Enter an adjective:');
    words.pluralNoun = prompt('Enter a plural noun:');
    words.adverb = prompt('Enter an adverb:');
    words.anotherAdjective = prompt('Enter another adjective:');
  }
  
  startMadlib();
  console.log(`The ${words.adjective} ${words.pluralNoun} ${words.adverb} ${words.number} ${words.anotherAdjective}.`);
  
      


