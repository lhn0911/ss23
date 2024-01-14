let a = +prompt("Nhập một số nguyên dương:");

if (!isNaN(a) && a >= 0) {
    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    console.log(`Giai thừa của ${a} là ${result}`);
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}
