// 1. Kiểu dữ liệu nguyên thủy: Gía trị đc lưu vào 1 vùng nhớ và không thể sửa vùng nhớ đó
    // . Mỗi khi gán giá trị nó sẽ tạo ra 1 vùng nhớ mới để lưu giá trị

    // a.Boolean
    var isOk = 3 < 2
    console.log(isOk)

    // b. Number:
    var a = 1
    var b = 2
    var c = 1.4

    // c. String
    var s1 = 'Tran'
    var s2 = "Son"
    var s3 = 'PC \'s SonTran'
        // Note: 
            //Cach để nhập dấu nháy ' cho xâu:
            //VD: tran's son => Nhập là: 'tran\'s son' hoặc "tran\'s son" hoặc "tran's son"(khác loại dấu), dấu " cũng tương tự

    // d. undefined: biến ko gán giá trị thì mắc định là undefined
    var age
    console.log(age)

    // e. Null: ko co j
    var isNull = null

    // f. Symbol: có tính độc nhất ( dù cùng mô tả nhưng khác nhau)
    var id = Symbol('id')
    var id2 = Symbol('id')

    console.log(id != id2)


// 2. Dữ liệu thức tạp - Complex Data

    //a. function code chỉ chạy khi gọi đến funtion
        
        //VD:
        // var myFuntion = function() {
        //     alert('Hello world')
        // }
        // myFuntion()

    //b. Object type: để lưu hầu hết các dạng dứ liệu trong js


        // Gồm: Các cặp key-value, khai báo cách nhau bằng dấu ',', key có thể là 1 function
    var myObject = {
        name: 'Tran Son',
        age: '20',
        address: 'ThaiBinh',

        myFuntion: function() {

        },

        job: 'Sinh Vien',
    }

    console.log('My Object: ', myObject) // Dấu ',' nhé

        //Array: Key đc đánh tự động, tự tăng (0, 1 ,2, 3,...)

    var myArray = [
        'JS',
        'C',
        'C++'
    ];
    console.log(myArray)


// 3. Kiểm tra TYPE
console.log('Kiểu DL:')
console.log(typeof a)
console.log(typeof c)

console.log(typeof isOk)

console.log(typeof age)

console.log(typeof isNull) // Đặc biệt: typeof Null =  Object

console.log(typeof id)

console.log(typeof myArray)
console.log(typeof myObject)

