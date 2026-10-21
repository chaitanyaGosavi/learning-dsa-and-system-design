"use strict";
function p_14() {
    const n = 5;
    let s = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            s = s + String.fromCharCode(65 + j) + ' ';
        }
        console.log(s.trim());
        s = '';
    }
}
p_14();
