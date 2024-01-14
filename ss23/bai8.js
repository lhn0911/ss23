let a = +prompt("Nhập a:");

if (!isNaN(a) && a > 0) {
    console.log(`Các số nguyên tố nhỏ hơn ${a}:`);
    for (let i = 2; i < a; i++) {
        let ktra = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                ktra = false;
                break;
            }
        }
        if (ktra) {
            console.log(i);
        }
    }
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}
