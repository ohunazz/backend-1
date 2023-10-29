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
