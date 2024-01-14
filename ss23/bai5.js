let numrandom = Math.floor(Math.random() * 10) + 1;
let result = false;
while (!result) {
    let innum = +prompt("Nhập một số từ 1 đến 10:");
    if (!isNaN(innum) && innum >= 1 && innum <= 10) {
        if (innum === numrandom) {
            console.log("Chính xác! Bạn đã đoán đúng.");
            result = true;
        } else if (innum > numrandom) {
            console.log("Số bạn nhập lớn hơn. Hãy thử lại.");
        } else {
            console.log("Số bạn nhập nhỏ hơn. Hãy thử lại.");
        }
    } else {
        console.log("Vui lòng nhập một số từ 1 đến 10.");
    }
}
