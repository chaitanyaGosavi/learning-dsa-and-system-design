"use strict";
function p_22() {
    let n = 4;
    const k = 2 * n - 1;
    let s = '';
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < k; j++) {
            s += `${n - Math.min(Math.min(Math.abs((k - 1) - i), i), Math.min(Math.abs((k - 1) - j), j))} `;
        }
        console.log(s);
        s = '';
    }
}
p_22();
