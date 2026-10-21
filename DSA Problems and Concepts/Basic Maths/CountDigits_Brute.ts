const countDigits_Brute = (num: number): number => {
    let count = 0;
    let absNum = Math.abs(num);
    if (absNum === 0) {
        return 1; // Special case for 0
    }
    while (absNum > 0) {
        absNum = Math.floor(absNum / 10);
        count++;
    }
    return count;
}

console.log(countDigits_Brute(12345) + ' Brute'); // returns 5
console.log(countDigits_Brute(-123) + ' Brute'); // returns 3
console.log(countDigits_Brute(0) + ' Brute'); // returns 1