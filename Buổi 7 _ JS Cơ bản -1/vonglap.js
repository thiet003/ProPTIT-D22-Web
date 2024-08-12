//I
    // 1. for - lặp với dk đúng
    // 2. for/in - lặp qua key của đối tượng
    // 3. for/of - fawpj qua value của đối tượng
    // 4. while - lặp khi đk đúng
    // 5. do while- lặp ít nhất 1 lần, sau đó lặp khi đk đúng

//1. for:
for(var i = 1; i <= 10; i++){
    //code
    console.log(i);
}


var i = 1
for(; i <= 10; i++){
    //code
    console.log(i);
}

// var i = 1
// for(;; i++){
//     //code
//     console.log(i);
// }

// var i = 1
// for(;i <= 1000;){
//     //code
//     console.log(i);
// }

var myArray = [
    'js',
    'c',
    'c++',
]
for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}


//2. for-in: Để lấy key của object
var myInfo = {
    name: 'Son',
    age: '10',
    address: 'HN'
}

for(var key in myInfo){
    console.log(key, ": ", myInfo[key])
}

var String = 'JAVASCRIPT'

for(var key in String){
    console.log(key, ": ", String[key])
}

//3. for-of: muốn lấy ra những phần tử của 1 mảng- chuỗi
console.log('For-of Test')
for(var value of String){
console.log(value)
}


// cái này ko dùng cho object
// for(var value of myInfo){
//     console.log(value)
// }
//fix: tạo 1 mảng key và duyệt qua mảng đó
console.log(Object.values(myInfo))
for(var value of Object.values(myInfo)){
console.log(value)
}

//4. while
console.log('wwhile')
var i = 1;
while(i <= 10){
console.log(i)
i ++;
}


//5. do while
console.log('do wwhile')
i = 1
do{
i++
console.log(i)
}while(i < 10)

//6. break-continue:

console.log('break-continue:')
i = 1

while(i <= 15){
if(i % 2 == 0){
    continue;
}
else if(i > 10){
    break
}
else console.log(i)
i ++;
}

//7. VD mở rộng về vòng lặp:

