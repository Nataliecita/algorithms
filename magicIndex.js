/*
Question: A magic index in an array A[0…n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index if one exists, in an array A. FOLLOW UP: What if the values are not distinct?

Example Input: [-2,0,2,4,8,10, 14 ]
Output: 2
*/

/*
PLAN: Since our array is sorted, lets do a binary search comparing both the middle with the value at middle, if the value is bigger than the index check left, otherwise check right since the value is smaller, all while checking if it's the same
*/

function findMagicIndex(array){
  let low = 0;
  let high = array.length - 1;
  let middle;
  
  while(low<= high){
    //get middle
    middle = Math.floor((low + high) / 2);

    if(array[middle] == middle){
      return middle;
    }
    // check right
    if(middle > array[middle]){
      low = middle + 1;
      // check left
    } else{
      high = middle -1;
    }
  }
  return false;
}

let array = [-2,0,2,4,8,10, 14 ];

findMagicIndex(array);