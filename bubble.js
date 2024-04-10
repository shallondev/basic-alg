/*
    Bubble Sort

    Idea: "bubble" elements of higher order to the end of the array by swapping them, resulting in a sorted array.
    Code:
        Set a swap counter to a nonzero value.
        Repeat until swap counter is 0:
            Set swap counter to 0.
            Select a element starting with furthest left and then going to next element on next repeat.
            Repeat until end of remaining portion of array after selected element:
                if selected element is less than succesive element swap them.
                
    Time Complexity:
    At best: If the array is sorted then we still select a element and iterate of the array comparing to other elements, Symbol: Ω(n).
    At worst: If the array is reversed then we must iterate over the array, partially iterating over the array for each element, Symbol: O(n^2).

    Use cases:
    Pro: The best case is linear which for sorting alogrithms is not bad.
    Con: At worst we are on quadradic time which for large data is very time expensive.
*/

function bubbleSort(arr) {
    // Variables
    let swap = -1;
    const n = arr.length;
    let temp = 0;

    // Iterate over each element in array
    for (let i = 0; i < n - 1; i++) {
        
        // Set swap counter to 0
        swap = 0;

        // Iterate element i over the remaining array
        for (let j = 0; j < n - i - 1; j++) {

            // If element j is bigger then j+1 then "bubble it"
            if (arr[j] > arr[j + 1]) {
                
                // Increasing swap counter
                swap++;

                // Technique to "bubble array elements forward"
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

        // If no elements needed to be swapped then we are done
        if (swap === 0) {
            break; // Exit the loop if no swaps were made
        }
    }

    return arr; // Return the sorted array
}

let array = [3, 2, 5, 1, 4];
console.log(bubbleSort(array)); // Output: [1, 2, 3, 4, 5]
