/*
    Merge Sort

    NOTE: This algorithmm uses recursive functions, please review fact.js if confused.

    Idea: Create sub array's spliiting them in half and leverage recurssion to sort array's.
    Code:
        Recursively call a merge sort function:
            Base case:
                return a sorted array of size 1.
            Recursive case:
                Split array in half and merge them.

    Time complexity:
        Recall that we are dividing the array in half which is on time log(n) (base 2).
        However each time we divide we have to sort the halved portions resulting in iteration over n elements or linear time.
        Notice, this must be done even if the array is sorted unless we hard code to check if the array is sorted.
        Therefore, best case = worst case => Ω(nlog(n)) = O(nlog(n)).

    Use case:
        Pro: For large data this sorting algorithm is better then bubble sort and is on nlog(n) which is not terrible.
        Con: Without adding addtional time complexity if the array is sorted we must have a time complexity of nlog(n) which is worse then linear.
*/

function sort(arr) {
    
    const n = arr.length;

    if (n <= 1) {
        return arr;
    }

    const mid = Math.round(n / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(sort(leftArr), sort(rightArr));
}

function merge(leftArr, rightArr) {

    let sortedArr = [];
    let left = 0;
    let right = 0;
    const nL = leftArr.length;
    const nR = rightArr.length;

    while (left < nL && right < nR) {
        if (leftArr[left] < rightArr[right]) {
            sortedArr.push(leftArr[left]);
            left++;
        }
        else {
            sortedArr.push(rightArr[right]);
            right++;
        }
    }

    // Add remaining elements from left array
    while (left < nL) {
        sortedArr.push(leftArr[left]);
        left++;
    }

    // Add remaining elements from right array
    while (right < nR) {
        sortedArr.push(rightArr[right]);
        right++;
    }

    return sortedArr;
}


let array = [3, 2, 5, 1, 4];
console.log(sort(array)); // Output: [1, 2, 3, 4, 5]