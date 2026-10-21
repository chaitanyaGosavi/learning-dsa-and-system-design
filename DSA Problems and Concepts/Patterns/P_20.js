"use strict";
function p_20() {
    const n = 5;
    const m = n + (n - 1);
    let s = '';
    for (let i = 0; i < n; i++) {
        for (let j = m; j >= 0; j--) {
            if (j > i && j < Math.abs(m - i)) {
                //console.log(`i: ${i}, j: ${j}, m/2: ${Math.floor(m / 2)}`);
                s += '  ';
            }
            else {
                s += '* ';
            }
        }
        console.log(s);
        s = ''; // Reset the string for the next row
    }
    for (let i = n - 2; i >= 0; i--) {
        for (let j = m; j >= 0; j--) {
            if (j > i && j < Math.abs(m - i)) {
                //console.log(`i: ${i}, j: ${j}, m/2: ${Math.floor(m / 2)}`);
                s += '  ';
            }
            else {
                s += '* ';
            }
        }
        console.log(s);
        s = ''; // Reset the string for the next row
    }
}
p_20();
