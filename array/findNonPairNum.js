/*
Question: Find the element that appears once in a sorted array where all other elements appear twice one after another. Find that element in 0(logn) complexity.

Example: Input:   arr[] = {1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8}

Output:  4    
*/

/*
PLAN: Since we have a sorted array, let's use binary search to find the non-paired element. Using the mid element to tell us which side to go to. 

 At even indexes the pair of elements should start, and odd indexes, the pair of elements should end.

 When mid is even, the pair would start therefore I will check my right side, else I (when the mid is an odd number) I will check my left side(ouput element lying on that side).
*/

function findNonPair(array){
  var low = 0;
  var high = array.length - 1;
  var mid = Math.floor((low + high ) / 2);

  //while left pointer is less than right pointer
  while(low < high){
    console.log(`high: ${high}, mid: ${mid}, low${low}`);

    var mid = (low + high ) / 2;

    // check right side
    if(mid % 2 === 0){
      if(array[mid] == array[mid+1]){
        // get a new low
        low = mid + 2;
      }
      else{
        // get a new high
        high = mid;
      }
      // check left side
    } else{
      if(array[mid] == array[mid-1]){
        //get a new low
        low = mid + 1;
      }else {
        //get a new high
        high = mid -1;
      } 
    }
  }
  return array[low];
}

var array = [1,1,3,3,4,5,5,7,7,8,8];

findNonPair(array);
