let a = +prompt("Nhập số nguyên dương a:");
let b = +prompt("Nhập số nguyên dương b:");

if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
    console.log(`Các số chia hết cho ${b} trong khoảng từ 1 đến ${a} là :`);

    for (let i = 1; i <= a; i++) {
        if (i % b === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Nhập hai số nguyên dương!");
}
