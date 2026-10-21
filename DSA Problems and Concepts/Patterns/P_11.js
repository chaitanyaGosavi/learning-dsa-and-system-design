"use strict";
function p_11() {
    const n = 5;
    let k = '';
    let s = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            k = (i + j) % 2 === 0 ? '1 ' : '0 ';
            s = s + k;
        }
        console.log(s.trim());
        s = ''; // Reset the string for the next row
    }
}
p_11();
