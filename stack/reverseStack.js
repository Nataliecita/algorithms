/*
QUESTION: Reverse a stack and put the reversed value back in the same stack. You can use only one other stack and a temp variable.

*/

function reverseStack(originalStack){
  var tempStack = [];
  var temp;

  for(var i = 0; i< originalStack.length; i++){
    // store popped value in temp
    temp = originalStack.pop();

    // count elements in original stack to put into tempStack
    var count = originalStack.length ;
    
    while(count - i > 0 ){
      // pop first element
      tempStack.push(originalStack.pop())
      // one less element in the original stack, which has been pushed to the temp stack
      count--;

    }

    // original stack is empty, we can now put the temp element in 
    originalStack.push(temp);
    count = tempStack.length;
    while(count > 0){
      originalStack.push(tempStack.pop());
      count--;
    }
          
  }
  return originalStack;
}

var normal = [1,2,3];