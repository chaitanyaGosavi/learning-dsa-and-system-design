"use strict";
function p_12() {
    const n = 5;
    const m = n * 2;
    let s = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < m; j++) {
            if (j < i) {
                s = s + `${j + 1} `;
            }
            else if (j >= (m - i)) {
                s = s + `${(m - j)} `;
            }
            else {
                s = s + '  ';
            }
        }
        console.log(s.trim());
        s = ''; // Reset the string for the next row
    }
}
p_12();
