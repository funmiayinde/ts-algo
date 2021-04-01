// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (str1: string, str2: string): boolean => {
  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];

    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }
  return true;
};
