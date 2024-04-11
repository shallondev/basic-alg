class Algo {
    constructor() {
        this.arr = [];
        this.length = 0;
        this.targetIndex = null;
    }

    binarySearch(target) {
        let left = 0;
        let right = this.length - 1;
        let mid = 0;

        while (left <= right) {
            mid = Math.floor((left + right) / 2); // Using Math.floor to get integer division

            // If we found the target we return the index
            if (this.arr[mid] === target) {
                this.targetIndex = mid; // Update targetIndex
                return;
            }

            // If the mid point is less than the target then search in the right half
            if (this.arr[mid] < target) {
                left = mid + 1;
            }
            // If the mid point is greater than the target search in the left half
            else {
                right = mid - 1;
            }
        }

        // If we fail to find the target, set targetIndex to null
        this.targetIndex = null;
    }
}


Algo.createArray = function(...values) {
    const al = new Algo()
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] === 'number') {
            al.arr.push(values[i])
            al.length++;
        }
    }
    return al
}

module.exports = Algo