/*
Question: A magic index in an array A[0…n-1] is defined to be an index such that A[i] = i. Given a sorted array of NON-distinct integers, write a method to find a magic index if one exists, in an array A. 

Example Input: [0,0,1,2,5,8,10, 14 ]
Output: 0
*/

/*
 PLAN: Since array is sorted we can use binary search. However, because the values are distinct it will have to be modified 
*/

function findMagicIndex(array, low, high){

  if (high < low) return false;
  let middle = Math.floor((low + high) / 2);

  if(array[middle] === middle){
    return middle;
  }

  if(middle < array[middle]){
    low = Math.min(array[middle], middle + 1)
  } else{
    high = Math.min(array[middle], middle - 1);
  }
  return false;
}

/// NOT WORKING