// Create a function that takes an array of numbers, and target number. Check if two numbers can be added and get the target sum. Do not use nested arrays, includes, indexOf methods. Use objects.

// [1, 4, 5, 7], 8 => true
// [1, 3, 7, 8, 0, 4], 7 => true

const checkSum = (arr, target) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        const difference = target - arr[i];

        if (obj[difference]) {
            return true;
        }
        obj[arr[i]] = true;
    }
    return false;
};

console.log(checkSum([1, 4, 5, 7], 8)); // true
console.log(checkSum([1, 4, 5, 6], 12)); // false
console.log(checkSum([1, 3, 7, 8, 0, 4], 7)); // true
console.log(checkSum([1, 5, 5, 7], 10)); // true

// Your Create a function, it takes a string. It would consist only digits and letters, both, or one of them. They will in order, it means, you will not mixed ones: X12X
// Output XXXX1234567

// Input. 123 => ZZZZ1230000
// Input. A => ZZZA0000000
// Input. B12 => ZZZB1200000
// Input AB => ZZAB0000000
// Input AAB123 => ZAAB1230000

function transformString(inputStr) {
    let outputStr = "ZZZZ0000000";

    if (inputStr) {
        outputStr = inputStr;
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digits = "0123456789";
        let letterCount = 0;
        let digitCount = 0;
        for (const char of outputStr) {
            if (letters.includes(char)) {
                letterCount++;
            }
            if (digits.includes(char)) {
                digitCount++;
            }
        }
        const zNum = 4 - letterCount;
        let zString = "";
        for (let i = 0; i < zNum; i++) {
            zString += "Z";
        }

        const zeroNum = 7 - digitCount;
        let zeroString = "";
        for (let i = 0; i < zeroNum; i++) {
            zeroString += "0";
        }
        outputStr = zString + inputStr + zeroString;
    }

    return outputStr;
}

console.log(transformString("123")); // Output: "ZZZZ1230000"
console.log(transformString("A")); // Output: "ZZZA0000000"
console.log(transformString("B12")); // Output: "ZZZB1200000"
console.log(transformString("AB")); // Output: "ZZAB0000000"
console.log(transformString("AAB123")); // Output: "ZAAB1230000"

// Input {} => Valid
// Input {{{}}{}} => Valid
// Input { => Not Valid
// Input } => Not Valid
// Input {{}}{ => Not Valid
// Input '' => Not Valid

// Create a Function that takes braces as string, and returns true if braces are valid, otherwise false.

// Hint. Use Array, push, and pop methods

const isValidCurlyBraces = (braces) => {
    if (braces.length % 2 !== 0) {
        return false;
    }

    const open = "{";
    const close = "}";
    const stack = [];

    for (const brace of braces) {
        if (brace === open) {
            stack.push(open);
        } else if (brace === close) {
            if (stack.length === 0 || stack.pop() !== open) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValidCurlyBraces("{"));
console.log(isValidCurlyBraces("{}}"));
console.log(isValidCurlyBraces("{}"));
console.log(isValidCurlyBraces("{{{}}{}}"));

// Input [1, 6, 3, 9, 0, -10, 100]
// [100, 9]
// Create a function that takes an array of numbers. Return two largest one in array [firstLargest, secondLargest];

const twoLargestNumbers = (array) => {
    let firstLargest = 0;
    let secondLargest = 0;

    for (const num of array) {
        if (num > firstLargest) {
            firstLargest = num;
        }
    }

    for (const num of array) {
        if (num > secondLargest && num < firstLargest) {
            secondLargest = num;
        }
    }

    return [firstLargest, secondLargest];
};

console.log(twoLargestNumbers([1, 6, 3, 9, 0, -10, 100]));

// Valid ["<section>", "</section>", "<div>", "</div"]

// Not Valid ["<a>", "<div>", "</a>", "</div"]

// write a function, that takes an array of html tags. Return true if they have valid order and snytax.

const isOpeningTag = (tag) => {
    return tag[1] !== "/";
};

const convertToOpeningTag = (closingTag) => {
    return closingTag[0] + closingTag.slice(2);
};

const isHtmlValid = (tags) => {
    const holder = [];

    for (const tag of tags) {
        if (isOpeningTag(tag)) {
            holder.push(tag);
        } else {
            const lastTag = holder.pop();
            const openingTag = convertToOpeningTag(tag);

            if (lastTag !== openingTag) {
                return false;
            }
        }
    }
    return holder.length === 0;
};

console.log(isHtmlValid(["<section>", "</section>", "<div>", "</div"]));
console.log(isHtmlValid(["<a>", "<div>", "</a>", "</div"]));
console.log(isHtmlValid(["<div>"]));
console.log(isHtmlValid(["</div>", "<>"]));
console.log(isHtmlValid(["<div>", "</div>"]));
console.log(isHtmlValid(["<div>", "</div>", "<div>"]));
console.log(isHtmlValid(["<div>", "</p>"]));

//  Write a function that removes duplicates from an array AND RETURN UNIQUE ARRAY
// [1,2,3,1,2,5,5] [1,2,3,5]
// 1. Create an empty array, unique
// 2. Loop the argument array
//3. Check if unique has current element of argument array, if it has already, do not push, if it does NOT have it, then push
// return unique array
function removeDuplicates(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        if (!unique.includes(number)) {
            unique.push(number);
        }
    }
    return unique;
}
console.log(removeDuplicates([1, 2, 3, 1, 2, 5, 5]));

// Implement the FizzBuzz algorithm: for numbers from 1 to n, print 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, and 'FizzBuzz' for multiples of both.

const fizzBuzz = (numbers) => {
    for (let i = 0; i < numbers; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        }
    }
};

fizzBuzz(15);

// Create a function that checks if a given string is a palindrome (the same forwards and backwards).

// Input: hello = Output: false
// Input: rotetor = Output: true

const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("hello"));
console.log(isPalindrome("rotetor"));

// Develop a function that determines if two strings are anagrams of each other. Return true if anagrams, else false.

// e.g ("secure", "rescue")

// secure   =>  rescue

//HELLO, ELLOH\
// APPLE, LEAPP
// PULLS, PULLR

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    str1Count = {};
    str2Count = {};

    for (const char of str1) {
        if (str1Count[char]) {
            str1Count[char]++;
        } else {
            str1Count[char] = 1;
        }
    }

    for (const char of str2) {
        if (str2Count[char]) {
            str2Count[char]++;
        } else {
            str2Count[char] = 1;
        }
    }

    for (const char in str1Count) {
        if (str1Count[char] !== str2Count[char]) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("secure", "rescue"));

// Write a function that converts an array of strings into an array of objects with a property 'value' that contains the original string.

// [a, b, c], => [{value: a}, {value: b}, {value:c}];

const convertToObjArr = (strings) => {
    const arr = [];

    for (const str of strings) {
        arr.push({ value: str });

        return arr;
    }
};
console.log(convertToObjArr(["a", "b", "c"]));

// Create a function that takes two sorted array (asc) with the same length. Merge them in one array and return it. Catch is here: returning array should be sorted as well. do not use sort() method.
// [1, 4, 6, 10, 100], [3, 4, 10, 12, 101]
// [1, 3, 4, 4, 6, 10, 10, 12, 100, 101 ]

// [1, 4, 6, 10, 100], [3, 4, 11, 12, 101]
// [1, 3, 4, 4, 6, 10, 11, 12, 100, 101 ]

const sortedArray = (arr1, arr2) => {
    const sortArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length) {
        if (arr1[i] < arr2[j]) {
            sortArr.push(arr1[i]);
            i++;
        } else {
            {
                sortArr.push(arr2[j]);
                j++;
            }
        }
    }
    return sortArr;
};

console.log(sortedArray([1, 4, 6, 10, 100], [3, 4, 10, 12, 101]));

// Given a number. Sum up the digits
// 1234 => 10
// 4589 => 26
// 8978 => 32.
// COndition : Do not convert number to string and loop.

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(1234)); // Output 10;
