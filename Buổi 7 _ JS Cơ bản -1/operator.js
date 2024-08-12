// Các toán tử:

// 1. Toán tử số học -arithmetic
// 2. Toán tử Gán -Assignment
// 3. Toán tử so sánh - Comparision
// 4. Toán tử logic - Logical


// 1. Toán tử số học -arithmetic :
    // Gom: 
    //Cong (+), Tru (-), Nhan (*), Chia (/)
    //Luy thua (**)
    //Mod(%)
    // ++
    // -- : Lưu ý cái này cũng có cái trò tiền tố hâụ tố (a--, --a)
    var a = 2
    var b = 3
    
    var c1 = a + b
    var c2 = a - b
    var c3 = a * b
    var c4 = a / b
    var c5 = a ** b
    var c6 = a % b
    
    a++
    b--
    
    console.log(c1);
    console.log(c2);
    console.log(c3);
    console.log(c4);
    console.log(c5);
    console.log(c6);
    
    console.log('a:' + a + ' b:' + b);
    
    
    
    // 2. Toán tử Gán -Assignment
        // = VD: x = y
        // +=
        // -=
        // *=
        // /=
        // **= VD: x **= y
    
    
    var fullName = 'Son'
    
    
    
    // 3. Toán tử so sánh - Comparision
    
        // ==
        // !=
        // >
        // <
        // >=
        // <=
        
        //VD:
        // var a = 1;
        // var b = 2;
    
        // if(a < b){
        //     alert('True')
        // }
    
        // if(a == b){
        //     alert('True')
        // }
    
    // 4. Toán tử logic - Logical
    
        // && 
        // ||
        // !
    
        //VD
        // var a = 1;
        // var b = 2;
    
        // if(a > 0 && b > 0){
        //     alert('a va b > 0')
        // }
    
    
    
    // 5. Toán tử chuỗi(String Operator)
    
    var firstName = 'Tran'
    var lastName = 'Son'
    
    console.log(firstName + lastName) // DK để "+" là nối chuối <=> có 1 chuỗi ở trong biểu thức