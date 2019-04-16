/*
QUESTION: Given two strings, write a method to decide if one is a permutation of the other


Plan:
- Verify what permutation is
  - re arrangement of letters aka we don't care about the order
- Attack
  - Check that the length is the same
  - create a dictionary and store all values of the string1 in there adding a 1 
  - Another loop, iterate through string 2 and look up that character if its not there return false, else subtract from the dictionary


I: string1, string2
O: boolean
C: Space: O(N), Time O(N)
E: empty string 

*/

function isPermutation(string1, string2){
  // check that both strings are the same length
  if(string1.length !== string2.length){
    return false;
  }
  
  // Create dictionary
  let dictionary = {}

  // store string1 in dictionary
  for(let i = 0; i< string1.length; i++){
    let char = string1[i];

    if(dictionary[char]){
      dictionary[char]++;
    } else{
      dictionary[char] = 1;
    }
  }

  // Remove from dictionary
  for(let i = 0; i< string2.length; i++){
    let char = string2[i];

    if(dictionary[char] && dictionary[char]!== 0){
      dictionary[char]--;
    } else{
      return false;
    }
  }
  return true;
}


let s1 = "hii"; 
let s2= "ihi";
let s3 = "hello";
let s4= "helli";
isPermutation(s1,s2)// true
isPermutation(s3,s4)// false