"use strict";
function p_18() {
    const n = 5;
    let s = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            s = s + String.fromCharCode(65 + (n - i - 1)) + ' ';
        }
        console.log(s);
        s = '';
    }
}
p_18();
