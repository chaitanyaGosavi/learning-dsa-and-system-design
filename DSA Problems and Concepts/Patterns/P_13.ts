function p_13() {
    const n = 5;
    let k = 1;
    let s = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
         s = s + k + ' ';
         k++;
        }
        console.log(s.trim());
        s = '';
    }
}

p_13();