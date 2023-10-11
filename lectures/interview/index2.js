// Input {} => Valid
// Input {{{}}{}} => Valid
// Input { => Not Valid
// Input } => Not Valid
// Input {{} => Not Valid
// Input '' => Not Valid

// Create a Function that takes braces as string, and returns true if braces are valid, otherwise false.

// Hint. Use Array, push, and pop methods

const isValidCurlyBraces = (bracesStr) => {
    const openingBraces = "{";
    const braces = [];

    for (const brace of bracesStr) {
        if (braces === openingBraces) {
            braces.push(brace);
        } else {
            const lastOpening = braces.pop();
            if (lastOpening === undefined) {
                return false;
            }
        }
    }
    return braces.length === 0;
};

console.log(isValidCurlyBraces("{}"));
