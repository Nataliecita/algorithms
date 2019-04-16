/*
QUESTION:
Implement an algorithm to determine if a string has all unique characters. Optional:
What if you cannot use additional data structures?

PLAN:
- Create a dictionary to store the characters from the string
- Loop through the input and 
  - if you encounter a character in the dictionary return false
  - else add it
- If you loop through the whole input return true 

COMPLEXITY:
- Time: linear O(n)
- Space: linear O(n)
*/


// Using additional data structure

function isUnique(string){
  // Create dictionary
  let dictionary = {};

  for(let i = 0; i < string.length; i++){
    // Check if it is already there
    if(dictionary[string[i]]){
      return false
    } else {
      dictionary[string[i]] = string[i];
    }
    console.log(dictionary);
  }
  return true;
}

let test = "unique";
let test2 = "bark";