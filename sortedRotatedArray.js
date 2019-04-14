/*Question:
Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order.

input: [9, 10, 3, 5] , 3

*/

/*
PLAN: iterate through the array checking each value

Search(set):
    if size of set is 1 and set[0] == item 
        return info on set[0]
    divide the set into parts A and B
    if A is sorted and the item is in the A's range
        return Search(A)
    if B is sorted and the item is in the B's range
        return Search(B)
    if A is not sorted
        return Search(A)
    if B is not sorted
        return Search(B)
    return "not found"

    O(log(N))

Reduced to the problem of finding the largest number position, which can be done by checking the first and last and middle number of the area, recursively reduce the area, divide and conquer, This is O(log(N)) no larger than the binary search O(log(N)).

EDIT: For example, you have

6 7 8 1 2 3 4 5  
^       ^     ^ 
By looking at the 3 numbers you know the location of the smallest/largest numbers (will be called mark later on) is in the area of 6 7 8 1 2, so 3 4 5 is out of consideration (usually done by moving your area start/end index(int) pointing to the number 6 and 2 ).

Next step,

6 7 8 1 2  
^   ^   ^  
Once again you will get enough information to tell which side (left or right) the mark is, then the area is reduced to half again (to 6 7 8).

This is the idea: I think you can refine a better version of this, actually, for an interview, an OK algorithm with a clean piece of codes are better than the best algorithm with OK codes: you 'd better hand-on some to heat-up.

Good luck!
*/

