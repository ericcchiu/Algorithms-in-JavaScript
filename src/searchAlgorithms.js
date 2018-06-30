
// Binary Search 
const binarySearch = function (list, target, isSorted) { 
  // Create initial, mid, and final indexes 
  let initial = 0; 
  let final = list.length - 1; 
  let mid = null; 
  // If list is not sorted, code does not run 
  if (isSorted === false) { 
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