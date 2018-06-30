// Simple Search 
/* 
  Simple search takes in a list of numbers and returns the position of the target value where 
it is found. It returns -1 if value is not found in the list. Simple search is slow and goes through 
every element from front to back. It works with sorted and unsorted lists.

Big O notation: linear time O(n) 
*/ 

const simpleSearch = function (list,target) { 
  // Create a position variable 
  let position = -1; 
    // Loop over every element in the list 
    for (let i = 0; i < list.length; i++) { 
      // Check if target value is found in the list 
      if (list[i] === target) {
        // return the index  where value is found
        return position = i; 
      }
    }
    // Return -1 if not found in list        
    return position; 
}




// Binary Search 
/*
Binary search is an algorithm; its input is a sorted list of elements. It returns the target value's 
position in the list. Otherwise, binary search returns -1. 

The search starts by dividing the list in half and checks if the target value is found in the first
and second half of the list. When the target value is found in either the first or second half it 
stops searching in the part of the list where it is not found. 

The search only works for a sorted list. 

Big O notation: log time O(log n)
*/
const binarySearch = function (list, target, isSorted) { 
  // Create initial, mid, and final indexes 
  let initial = 0; 
  let final = list.length - 1; 
  let mid = null; 
  // If list is not sorted, code does not run 
  if (arguments[2] === false) { 
    return 'List not sorted'
  } else { 
    // While initial is less than equal to final 
    while (initial <= final) { 
      // Start with the mid index 
      mid = Math.floor((initial + final)/2); 
  
      if (list[mid] === target) { 
        return mid; 
      } else if (list[mid] < target) { 
        initial = mid + 1;  // target found in second half 
      } else { 
        final = mid - 1; // target found in first half  
      }
    }
  }
    return -1; // Not found in list  
}; 