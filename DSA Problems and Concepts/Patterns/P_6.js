"use strict";
function p_6() {
    const n = 5;
    let s = '';
    for (let i = 0; i < n; i++) {
        for (let j = n - i; j > 0; j--) {
            s += `${j} `;
        }
        console.log(s.trim());
        s = ''; // Reset the string for the next row
    }
}
p_6();
