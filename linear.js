/* 
    Linear Search
   
    Idea: Iterates over entire array comparing if each element is the target.
   
    Time Complexity 
    At Best: First element is the target and return true, symbol: Ω(1)
    At Worse: Must iterate the entire array of size n, symbol: O(n)
*/

// With for loops
function linearSearch(arr, target) {
    // Iterate over array
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === target) {
            return true; // If target if found return and stop
        }
    }
    return false // If target is not found return false and stop
}

/* 
    Using foreach
    NOTE: Because of forEach we are on Ω(n) not Ω(1) because we must iterate the entire array!
*/
function linearSearchEach(arr, target) {
    let found = false;

    arr.forEach(element => {
        if (element === target) {
            found = ture;
        }
    })

    return found;
}

// Test case 1: Target exists in the array
const arr1 = [1, 2, 3, 4, 5];
console.log(linearSearch(arr1, 3)); // Expected output: true

// Test case 2: Target does not exist in the array
const arr2 = [1, 2, 3, 4, 5];
console.log(linearSearch(arr2, 6)); // Expected output: false

// Test case 3: Target is the first element in the array
const arr3 = [6, 7, 8, 9, 10];
console.log(linearSearch(arr3, 6)); // Expected output: true

// Test case 4: Target is the last element in the array
const arr4 = [11, 12, 13, 14, 15];
console.log(linearSearch(arr4, 15)); // Expected output: true

// Test case 5: Empty array
const arr5 = [];
console.log(linearSearch(arr5, 5)); // Expected output: false