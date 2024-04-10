/* 
    Binary Search

    Idea: "divide and conquer"
    Code: 
        Repeat until subarray is size 0:
            calculate middle point of array, if target return and stop.
            Interpret left vs right and repeat depending which side the target must be on.
    
    NOTE: The array must have a order to interpret which side is better, otherwise we are not always going to find the target when it exists in the array.

    Time Complexity:
    At Best: The target is the middle element and we are done, symbol: Ω(1)
    At Worse: We must divide the array in half until a array of size 0 exists, symbol: O(log(n))
    NOTE: log(n) is log base 2, remember if you are doing something like bineary search it is log(n).
*/

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;

    while (left <= right) {
        mid = Math.round((left + right) / 2); // Get the mid point of the array by index

        // If we found the target we are done
        if (arr[mid] === target) { 
            return true;
        }

        // If the mid point is less then the target then create a sub array of the right of the mid point
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If the mid point is greater then the target create a sub array to the left of the mid point
        else {
            right = mid - 1;
        }
    }

    // If we fail to find the target return false
    return false;
}

// Test case 1: Target exists in the array
const arr1 = [1, 2, 3, 4, 5];
console.log(binarySearch(arr1, 3)); // Expected output: true

// Test case 2: Target does not exist in the array
const arr2 = [1, 2, 3, 4, 5];
console.log(binarySearch(arr2, 6)); // Expected output: false

// Test case 3: Target is the first element in the array
const arr3 = [6, 7, 8, 9, 10];
console.log(binarySearch(arr3, 6)); // Expected output: true

// Test case 4: Target is the last element in the array
const arr4 = [11, 12, 13, 14, 15];
console.log(binarySearch(arr4, 15)); // Expected output: true

// Test case 5: Empty array
const arr5 = [];
console.log(binarySearch(arr5, 5)); // Expected output: false