function p_10() {
    const n = 5;
    const m = n;
    let s = '';

    for (let i = 0; i < n; i++) {
        s = s + '* ';
        console.log(s.trim());
    }
    s = ''; // Reset the string for the next row

    for (let i = 1; i < n; i++) {
        for (let j = m - i; j > 0; j--) {
            s += '* ';
        }
        console.log(s.trim());
        s = ''; // Reset the string for the next row
    }


}
p_10();