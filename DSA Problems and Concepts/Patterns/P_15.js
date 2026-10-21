"use strict";
function p_15() {
    const n = 5;
    let s = '';
    const k = 65;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            s = s + String.fromCharCode(k + j) + ' ';
        }
        console.log(s.trim());
        s = '';
    }
}
p_15();
