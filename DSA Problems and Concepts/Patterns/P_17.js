"use strict";
function p_17() {
    const n = 5;
    const m = n + (n - 1);
    let s = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (j >= Math.abs(Math.floor(m / 2) - i) && j <= Math.floor(m / 2) + i) {
                if (j > Math.floor(m / 2)) {
                    s = s + String.fromCharCode(65 + Math.abs(Math.floor(m / 2) + i - j)) + ' ';
                }
                else if (j < Math.floor(m / 2)) {
                    s = s + String.fromCharCode(65 + Math.abs(Math.floor(m / 2) - i - j)) + ' ';
                }
                else if (j === Math.floor(m / 2)) {
                    s = s + String.fromCharCode(65 + i) + ' ';
                }
                //console.log(j, i, Math.floor(m/2));
            }
            else {
                s = s + '  ';
            }
        }
        console.log(s);
        s = '';
    }
}
p_17();
