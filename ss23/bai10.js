let a = +prompt("Nhập a:");
        if (!isNaN(a) && a > 0) {
            document.write("<div>");
            document.write("<pre>");
            for (let i = 1; i <= a; i++) {
                let row = '';
                for (let j = 1; j <= i; j++) {
                    row += '* ';
                }
                document.write(row + "\n");
            }
            for (let i = 1; i <= a; i++) {
                let spaces = Array(a - i + 1).join('  ');
                let row = Array(i + 1).join('* ');
                document.write(spaces + row + "\n");
            }
            document.write("</pre>");
            document.write("</div>");
        } else {
            console.log("Vui lòng nhập một số >0");
        }