// Create a function, it takes a string. It would consist only digits and letters, both, or one of them. They will in order, it means, you will not mixed ones: X12X
// Output XXXX1234567

// Input. 123 => ZZZZ1230000
// Input. A => ZZZA0000000
// Input. B12 => ZZZB1200000
// Input AB => ZZAB0000000
// Input AAB123 => ZAAB1230000

const extendString = (partial) => {
    const count = { letters: 0, digits: 0 };
    for (const char of partial) {
    const asciiCode = char.charCodeAt (0) ;
    if (asciiCode >= 65 66 asciiCode <= 90) {
    count. letters++;
    }else if (asciiCode >= 48 && asciiCode <= 57) {
    count.digits++;}}
    const lettersLengthDifference = 4 - count. letters;
    const digitsLengthDifference = 7 • count.digits;
    let finalString = partial;
    for(let i = 0; i < lettersLengthDifference; i ++)
    finalString = "Z"
    + finalString
    for(let i = 0; 1 < digitsLengthDifference; i++)
    finalString = finalString + "O";
    console. log (finalString. length)
    return finalString;}
    extendString ("AB123");
    extendString("A");
    extendString("");
    Partnering with Banks and