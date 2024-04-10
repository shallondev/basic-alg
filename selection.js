/*
    Selection Sort

    Idea: Find the smallest element and 'unshift' them to the front of the array.
    Code:
        Iterate over the array:
            Iterate over sub array of unordered data:
                Find smallest element and swap it with first element of unordered sub array.
    
    Time complexity:
    No matter what we must iterate entire array selecting a element for comparison and then iterating over unordered sub arrays for comparison.
    => best case = worst case => Ω(n^2) = O(n^2).

    Use case:
    Pro: Time wise, selection sort is kinda awful but generally easier to code then bubble.
    Con: Quadratic time for large data is terrible for time effeciency making this kinda a bad algorithm, especially since bubble sort is already bad this is worse lol.
*/

function selectionSort(arr) {
    
    // Variable.
    const n = arr.length;
    
    // Iterate over array.
    for (let i = 0; i < n - 1; i++) { // n-1 since last iteration would not be needed.
        
        // Set a min variable since we need i.
        let min = i;

        // Iterate over unordered data.
        for (let j = i + 1; j < n; j++) {
            
            // Find the smallest value.
            if (arr[j] < arr[min]) {

                min = j;

            }
        }

        // Send the smallest value to the front.
        [arr[i], arr[min]] = [arr[min], arr[i]]; // I did not know you did not need temp vairables in JS, cool.
    }

    // Return sorted array
    return arr;
}

let array = [3, 2, 5, 1, 4];
console.log(selectionSort(array)); // Output: [1, 2, 3, 4, 5]
