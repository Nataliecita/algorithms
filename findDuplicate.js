/*
QUESTION: Given an array that contains numbers from 1 to n-1 and exactly 1 duplicate, find that duplicate.
*/

/*
PLAN: Use a dictionary to store values and if when you store the value the key already appears then you return that number as you iterate through the array
*/

function findDuplicate(array){
  let dictionary = {};

  for(let i = 0; i < array.length; i++){
    if(array[i] in dictionary){
      return array[i];
    } else{
      dictionary[array[i]] = 1;
    }
  }
  return false;
}