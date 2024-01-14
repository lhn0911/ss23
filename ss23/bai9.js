let a = +prompt("Nhập a:");

if (!isNaN(a) && a > 0) {
    console.log(`Dãy Fibonacci với tổng giá trị nhỏ hơn ${a}:`);

    let fib1 = 0, fib2 = 1, b;

    console.log(fib1); // In số đầu tiên của dãy (0)

    while (fib2 <= a) {
        console.log(fib2);

        b = fib1 + fib2;
        fib1 = fib2;
        fib2 = b;
    }
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}
