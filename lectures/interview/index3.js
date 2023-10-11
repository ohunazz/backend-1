// Input [1, 6, 3, 9, 0, -10, 100]
// [100, 9]
// Create a function that takes an array of numbers. Return two largest one in array [firstLargest, secondLargest];

function findLargestNumber(arr) {
    let firstLargest = [0];
    let secondLargest = [1];

    for (let num of arr) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        }
    }
    return [firstLargest, secondLargest];
}

console.log(findLargestNumber([1, 6, 3, 9, 15, 0, -10, 100]));
