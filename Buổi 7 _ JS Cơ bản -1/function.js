// //I. Khởi đầu 
//         // 1. Hàm
//             // - Một khối mã
//             // - Làm 1 việc cụ thể
//         // 2. Loại hàm:
//             // -build-in
//             // - tự định nghĩa
//         // 3. tính chất
//             // - ko thự thi khi định nghĩa
//             // - sẽ thực thi khi đc gọi
//             // - có thể nhận tham số
//             // - có thể trả về 1 số giá trị
//         // 4. tạo hàm đầu tiên

//     //4. Tạo hàm:
//         //Quy tac dat ten : 
//         //chứa: a->z, A ->Z, 0->9,_, $
//         //Ko đặt số ở kí tự đầu

//         function nameFunction() {
//             //code
//         }
    
//         function showDialog() {
//             alert("XIN CHAO")
//         }
//         confirm('Xac Nhan bn du tuoi')
//         // prompt("Moi nhap ten", ".....");
//         //call: toán tử call: ()
//         showDialog()
    
//     //II. Tham số
    
//             // 1. Tham số
//                 // - ĐN:
//                 // - Kiểu DL 
//                 // - Tính private
//                 // - 1 Tham số
//                 // - Nhiều tham số
//             // 2. Truyền tham số
//                 // - 1 Tham số
//                 // - Nhiều tham số
//             // 3. arguments?
//                 // - Đối tượng arguments
//                 // - Giới thiệu vòng for of
    
//         //1. Tham số: funtion F(int a) => a laf tham soos
    
//             function writeLog(mess){
//                 console.log(mess)
//             }
    
//             writeLog("Tran Xuan Son");
//             writeLog(['JS', 'C++','S']);
//             //=> Có thể truyền bất cứ kiểu dl nào
//             // Có thể gọi đc nhiều tham số.
    
//         //2. Argument: 
//             //Chỉ xuất hiện trong 1 function
//             //Có tính chất giống mảng, sẽ đc hàm console.log gọi ra
//             // In hết các tham số ở dạng mảng. 
            function writeLog2(){
                console.log(arguments)
            }
            writeLog2('JS', 'C++','S');
    
//             //for of
//             function writeLog3(){
//                 for(var value of arguments){
//                     console.log(value, "\\")
//                 }
//             }
//             writeLog3('JS', 'C++','S');
    
    
    
//     //III.Return trong hàm JS
    
//         // var isConfirm = confirm('Messs');
//         // console.log(isConfirm);
    
    
//         console.log("Test Function")
//         function cong1(a, b){
//             return a + b
//         }
    
//         function cong2(a, b){
//             a + b
//         }
    
//         function cong3(a, b){
//         return [a, b, a + b]
//         }
//         var res1 = cong1(2, 8);
//         var res2 = cong2(2, 8); // Nếu hàm ko trả về j thì mặc đinh là undefined
//         var res3 = cong3(2, 8);
//         console.log(res1, " ", res2, " ", res3) 
    
    
//     ///IV: Hiểu rõ hơn về hàm 
    
//         //1. Khi đặt function trùng tên: => Sử dụng tk ở sau
    
//         // function showMes(){
//         //     console.log("MESS 1")
//         // }
    
//         // function showMes(){
//         //     console.log("MESS 2")
//         // }
    
//         // showMes()
    
//         // 2, Khai báo biến trong hàm: nhu bthg
    
//         // function showMes(){
//         //     var fullName = 'Son'
//         //     console.log(fullName)
//         // }
    
    
//         //3. ĐN hàm trong hàm:
    
//         function showMes(){
//             console.log("Họ: Trần")
//             function showMes2(){
//                 console.log("Tên: Sơn")
//             }
//             showMes2()
//         }
//         showMes()
    
    
//     // V. Các loại Function: 
//         // 1. Declaration Function
//         // 2. Expression Function
//         // 3. Arrow Function
    
    //1. Declaration Function: Phải định nghĩa và Đặt tên. Có thể gọi trước khi đc định nghĩa
    // showMessage()

    // function showMessage(){
    //     alert("aaaaaa")
    // }
    
    //2. Expression Function: 
            //ĐƯợc gán với 1 biến. Đặt tên hay ko cũng ko sao. Việc đặt tên có chức năng duy nhất là để nó dẽ hiểu
            // Ko thể gọi nếu chưa đc đn
            

    // var showMessage2 = function textName(){
        
    // }
    // var showMessage2 = function(){
    //     alert("BBBBBBB")
    // }
    // showMessage2()  
    
    
    // truyênf dưới dạng call back
    setTimeout(function(){
        alert("ccccccc")
    }, 3000);
    setTimeout(function autoLogin(){
        
    });
    
    // VD: gọi 1 object trong đó có 1 key, gán value là 1 function
    var myObject = {
        myFunction: function testName(){
    
        }
    }