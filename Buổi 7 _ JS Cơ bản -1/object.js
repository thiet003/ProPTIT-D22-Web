
var othername = 'nickname';

var myInfo = {
    name: 'Tran Xuan Son',
    age: 20,
    address: 'Ha Noi , VN',
    'Quê quán': 'Thai Binh, VN',
    [othername]: 'Kaita',

    getName: function() {
        return this.name
    },

    keyTMP : "TMP TRAN XUAN SON"
}


// Xuất:
console.log(myInfo.name)
console.log(myInfo['Quê quán'])

var keyTMP = 'address'
console.log(myInfo.keyTMP)
console.log(myInfo[keyTMP])

console.log("Tra ve ham", myInfo.getName)
console.log("Ket qua", myInfo.getName())


// XÓa:
delete myInfo.keyTMP
console.log(myInfo)

// Them Key-Value
myInfo.email = 'son123@gmail.com'
myInfo['my-email'] = 'son123@gmail.com'


//Constructor:
function CreateObject(name, age, address, national){
    this.name = name;
    this.age = age;
    this.address = address;
    this.national = national;


    this.getInfo = function(){
        return `Ten: ${this.name} . Dia chi: ${this.address}`;
    }
}

var banA = new User('Duy', '20', 'aaaa' ,'vn');
var banB = new User('Tung', '02', 'caaab', 'eng');

// Add các thuộc tính riêng:
banA.fb = 'FB:   '
banB.job = 'editor'

console.log(banA)
console.log(banB)




//1. Đối tượng Date:
var date = new Date(); //=> Sau khi tạo đối tượng này, ta có thể sử dụng các phương thức ở trong class Date để xử lý thời gian
var date2 = Date()

//a. Xuất:
console.log(typeof date)
console.log("Date 2 khi gọi kiểu function thì nó chỉ là 1 String: ", typeof date2)
console.log(date)
console.log(date2)

console.log(date.getFullYear())
console.log(date.getMonth()) // 0 -> 11 => Phải +1 
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())


//Object Method