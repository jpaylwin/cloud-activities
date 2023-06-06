function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const magicOutput = yourFunc(namesArray);
  
    return magicOutput;
  }

  function upperCaseAllLetters(array) {
    const uppercasedArray = array.map((name) => name.toUpperCase());
    return uppercasedArray;
  }
  
  const result = magician(upperCaseAllLetters);
  console.log(result);




  function sortAllLetters(array) {
    const sortArray = array.map((name) => name.sort());
    return sortArray;
  }
  
  const result1 = magician(sortAllLetters);
  console.log(result1);
