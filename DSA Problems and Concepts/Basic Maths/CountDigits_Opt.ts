const countDigits = (num: number): number => {
    const numStr = Math.abs(num).toString();
    return numStr.length;
}

console.log(countDigits(12345)); // returns 5
console.log(countDigits(-123)); // returns 3
console.log(countDigits(0)); // returns 1