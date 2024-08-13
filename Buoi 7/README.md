# [BUỔI 1] KIÊN THỨC CƠ BẢN TRONG JAVASCRIPT

## 1. Khai báo dữ liệu:
\- JavaScript là gì ?
- JavaScript viết tắt là JS à ngôn ngữ lập trình phổ biến dùng để tạo ra các trang web tương tác. Được tích hợp và nhúng vào HTML giúp website trở nên sống động hơn. JavaScript đóng vai trò như một phần của trang web, thực thi cho phép Client-Side Script từ phía người dùng cũng như phía máy chủ (Nodejs) tạo ra các trang web động.
- JavaScript có thể được thực hiện bởi sử dụng các lệnh JavaScript mà được đặt trong thẻ HTML `<script>... </script>` trong một trang web.

\- JavaScript có thể làm được gì ?
- JavaScript có thể thay đổi nội dung HTML.
- JavaScript có thể thay đổi giá trị thuộc tính HTML.
- JavaScript có thể thay đổi kiểu HTML (CSS).
- JavaScript có thể ẩn/hiển thị các phần tử HTML.

\- Cấu trúc của 1 file JavaScript:





### 1.2 Các loại biến trong JavaScript:

> **Cách khai báo**
- Có 3 cách khai báo chính:

\- `var`
- phạm vi: toàn cục (global) hoặc hàm (function)

```js
    var x = 5;
    if (true) {
        var x = 10;  
    }
    console.log(x);  
```

```js
console.log(a);
if(true) {
    var a = 10;
}
```


\- `let`
- phạm vi: trong khối lệnh được khai báo

```js
let y = 10;
if(true) {
    let y = 10;
    console.log(y);
}
console.log(y);
```

\- `const`
- phạm vi: bên trong khối lệnh được khai báo
- trong cùng 1 khối lệnh thì không thể tái khai báo

```js
const z = 10;
if(true) {
    const z = 5;
    console.log(z);
}
console.log(z);
```

```js
const z = 10;
const z = 5;
console.log(z);
```


### 1.3 Các loại toán tử:

> **Toán tử số học:**

```js
// phép cộng
let x = 5 + 3;    // 8 
let y = "Hello " + "World"; // Hello World
let z = 5 + "abc"; // 5abc

// phép trừ
let a = 10 - 6; // 4


// phép nhân 
let x = 5 * 3;    // 15

// phép chia
let x = 10 / 2;   // 5

// phép chia lấy dư
let x = 10 % 3;   // 1

// lũy thừa
let x = 2 ** 3;   // 8
```

> **Toán tử gán**

```js

let x = 5;

let x = 5;
x += 3;  

let x = 5;
x -= 3;  

let x = 5;
x *= 3; 

let x = 10;
x /= 2;  

let x = 10;
x %= 3;  
```

> **Toán tử so sánh**

```js
let x = (5 == "5");  // true

let x = (5 === "5");  // false

let x = (5 != "5");  // false

let x = (5 !== "5");  // true

let x = (5 > 3);  // true

let x = (5 < 3);  // false

let x = (5 >= 5);  // true

let x = (3 <= 5);  // true
```

> **Toán tử logic**

```js
let x = (5 > 3 && 8 > 5);  // true

let x = (5 > 3 || 8 < 5);  // true

let x = !(5 > 3);  // false
```

> **Toán tử chuỗi**

```js
let greeting = "Hello" + " " + "World";  // "Hello World"

let greeting = "Hello";
greeting += " World";  // "Hello World"
```

> **Toán tử điều kiện (Ternary Operator) - Toán tử 3 ngôi**

```js
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";  // "Yes"
```

> **Toán tử typeof và instanceof**

```js
// typeof: Trả về kiểu dữ liệu của một biến hoặc biểu thức.
typeof 42;        // "number"
typeof "Hello";   // "string"

// instanceof: Kiểm tra xem một đối tượng có phải là instance của một lớp hoặc hàm tạo cụ thể hay không.
let date = new Date();
date instanceof Date;  // true
```

> **Toán tử xóa (Delete Operator)**

```js
// delete: Xóa một thuộc tính khỏi đối tượng.

let obj = { name: "John", age: 30 };
delete obj.age;
console.log(obj);  // { name: "John" }
```

> **Toán tử trải (Spread Operator)**

```js
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];  // [1, 2, 3, 4, 5]
```

> **Toán tử Bitwise (Bitwise Operators)**

- Và (&): Thực hiện phép AND trên từng bit của hai số.
- Hoặc (|): Thực hiện phép OR trên từng bit của hai số.
- Phủ định (~): Thực hiện phép NOT trên từng bit của số.
- XOR (^): Thực hiện phép XOR trên từng bit của hai số.
- Dịch trái (<<): Dịch bit của số sang trái một số vị trí.
- Dịch phải (>>): Dịch bit của số sang phải một số vị trí.


## 2. Các đối tượng trong JS

### 2.1 String:

> **1. Khai báo chuỗi:**

```js
let str1 = 'Hello, World!';
let str2 = "Hello, World!";
let str3 = `Hello, World!`;  /
```

> **2. Tính chất**

- Immutable (Không thay đổi): Chuỗi trong JavaScript là bất biến, nghĩa là một khi đã được tạo, sẽ không thể thay đổi nội dung của nó. Mọi thao tác thay đổi chuỗi thực tế sẽ tạo ra một chuỗi mới.

```js
let str = "Hello";
str[0] = "J"; 
console.log(str);
```

> **3. Các phương thức xử lý chuỗi:**

- length: trả về độ dài chuỗi.
- toUpperCase(): Chuyển toàn bộ ký tự trong chuỗi thành chữ hoa.
- toLowerCase(): Chuyển toàn bộ ký tự trong chuỗi thành chữ thường.
- charAt(index): Trả về ký tự tại vị trí index trong chuỗi.
- indexOf(substring): Trả về vị trí đầu tiên của chuỗi con (substring) trong chuỗi gốc, hoặc -1 nếu không tìm thấy.
- includes(substring): Kiểm tra xem chuỗi có chứa chuỗi con (substring) hay không, trả về true hoặc false.
- slice(start, end): Trích xuất một phần của chuỗi từ vị trí start đến end (không bao gồm end).
- substring(start, end): Tương tự như slice, nhưng không hỗ trợ chỉ số âm.
- replace(oldValue, newValue): Thay thế một phần chuỗi (oldValue) bằng một giá trị mới (newValue).
- trim(): Loại bỏ khoảng trắng ở đầu và cuối chuỗi.
- split(separator): Chia chuỗi thành một mảng các chuỗi con dựa trên separator.
- concat(string1, string2, ...): Nối các chuỗi với nhau và trả về chuỗi mới.
- repeat(count): Lặp lại chuỗi một số lần xác định.
- 

```js
let str = "Hello";
console.log(str.length);  // 5

let str = "Hello";
console.log(str.toUpperCase());  // "HELLO"

let str = "Hello";
console.log(str.toLowerCase());  // "hello"

let str = "Hello";
console.log(str.charAt(1));  // "e"

let str = "Hello, World!";
console.log(str.indexOf("World"));  // 7
console.log(str.indexOf("world"));  // -1 (case-sensitive)

let str = "Hello, World!";
console.log(str.includes("World"));  // true

let str = "Hello, World!";
console.log(str.slice(7, 12));  // "World"

let str = "Hello, World!";
console.log(str.substring(7, 12));  // "World"

let str = "Hello, World!";
let newStr = str.replace("World", "JavaScript");
console.log(newStr);  // "Hello, JavaScript!"

let str = "   Hello, World!   ";
console.log(str.trim());  // "Hello, World!"

let str = "Hello, World!";
let arr = str.split(", ");
console.log(arr);  // ["Hello", "World!"]

let str1 = "Hello";
let str2 = "World";
let result = str1.concat(", ", str2, "!");
console.log(result);  // "Hello, World!"

let str = "Hello";
console.log(str.repeat(3));  // "HelloHelloHello"

```

> **4. Template Literals (Chuỗi mẫu)**

- khi sử dụng dấu nháy ngược (````) ta có thể chèn các biểu thức vào chuỗi một cách dễ dàng bằng cách sử dụng cú pháp ${expression}.

```js
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting);  // "Hello, Alice!"
```

- Template literals cũng hỗ trợ chuỗi nhiều dòng:

```js
let multiLine = `This is
a string
with multiple lines.`;
console.log(multiLine); 
```

> **5. Các ký tự đặc biệt trong chuỗi**

- \n: Xuống dòng mới
- \t: Tab
- \': Dấu nháy đơn
- \": Dấu nháy kép
- \\\\: Dấu gạch chéo ngược

```js
let num = 123;
let str = String(num);  // "123"
let str2 = num + "";    // "123"
```

### 2.2 Object:
\- Trong JavaScript, object (đối tượng) là một kiểu dữ liệu quan trọng được sử dụng để lưu trữ tập hợp các cặp giá trị – thuộc tính (properties) và phương thức (methods). Mỗi thuộc tính là một cặp khóa-giá trị (key-value pair), nơi khóa (key) là tên của thuộc tính, và giá trị (value) có thể là bất kỳ kiểu dữ liệu nào, bao gồm cả các đối tượng khác.

> **1. Tạo đối tượng**

- Object Literal (Đối tượng nguyên mẫu): là cách phổ biên nhất để tạo ra đối tượng.

```js
let person = {
  name: "Tung",
  age: 20,
  job: "Developer"
};
```
- Sử dụng từ khóa `new Object()`

```js
let person = new Object();
person.name = "Tung";
person.age = 20;
person.job = "Developer";
```
> **2. Truy cập thuộc tính**

- Sử dụng dấu chấm (.): Truy cập thuộc tính bằng cách sử dụng tên thuộc tính trực tiếp.

```js
console.log(person.name);  // "Tung"
console.log(person.age);   // 20
```

- Sử dụng dấu ngoặc vuông ([]): Truy cập thuộc tính bằng cách sử dụng tên thuộc tính dưới dạng chuỗi.

```js
console.log(person["name"]);  // "Tung"
let key = "job";
console.log(person[key]);    // "Developer"
```

> **3. Thay đổi hoặc thêm, xóa thuộc tính,**

```js
person.age = 21;   // Thay đổi giá trị của thuộc tính 'age'
person.city = "Vinh Yen";  // Thêm thuộc tính mới 'city'

delete person.job; // xóa thuộc tính job
console.log(person.job);  // undefined
```

> **4. Phương thức trong đối tượng**

```js
let person = {
  name: "Tung",
  age: 20,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
person.greet();  // "Hello, my name is Tung"
```

> **5. Lặp qua các thuộc tính của đối tượng**

```js
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Kết quả:
// name: Tung
// age: 20
// city: Vinh Yen
```

> **6. Các phương thức tích hợp sẵn để làm việc với đối tượng**

- `Object.keys(obj)`: Trả về một mảng chứa tất cả các tên thuộc tính (keys) của đối tượng.

```js
console.log(Object.keys(person));  // ["name", "age", "city"]
```

- `Object.values(obj)`: Trả về một mảng chứa tất cả các giá trị của thuộc tính trong đối tượng.

```js
console.log(Object.values(person));  // ["Tung", 20, "Vinh Yen"]
```

- `Object.entries(obj)`: Trả về một mảng các cặp [key, value] cho mỗi thuộc tính trong đối tượng.

```js
console.log(Object.entries(person));  
// [["name", "Tung"], ["age", 20], ["city", "Vinh Yen"]]
```

> **7. Constructor Function (Hàm tạo)**

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}

let person1 = new Person("Alice", 25, "Designer");
let person2 = new Person("Bob", 28, "Engineer");

person1.greet();  // "Hello, my name is Alice"
person2.greet();  // "Hello, my name is Bob"
```

> **8. Prototype**

- JavaScript sử dụng một hệ thống kế thừa dựa trên prototype. Mọi đối tượng đều có một prototype, từ đó nó thừa kế các thuộc tính và phương thức.

```js
Person.prototype.sayGoodbye = function() {
  console.log("Goodbye from " + this.name);
};

person1.sayGoodbye();  // "Goodbye from Alice"
person2.sayGoodbye();  // "Goodbye from Bob"
```

### 2.3 Number:
\- Trong JavaScript, Number là kiểu dữ liệu số được sử dụng để đại diện cho cả số nguyên và số thực. JavaScript không phân biệt giữa các kiểu số nguyên (integer) và số thực (floating-point); tất cả các con số đều được coi là kiểu Number.

> **1. Khai báo**

```js
let x = 42;      // Số nguyên
let y = 3.14;    // Số thực
```

> **2. Các thuộc tính của Number**

- Number.MAX_VALUE: Giá trị số lớn nhất có thể đại diện.
- Number.MIN_VALUE: Giá trị số dương nhỏ nhất có thể đại diện.
- Number.POSITIVE_INFINITY: Dương vô cực.
- Number.NEGATIVE_INFINITY: Âm vô cực.
- Number.NaN: Giá trị "Not-a-Number", được sử dụng khi một giá trị không thể được biểu diễn dưới dạng số.

> **3. Các phương thức của Number**

- toString(): Chuyển một số thành chuỗi, với một tùy chọn để chỉ định cơ số (hệ cơ số).

```js
let num = 10;
console.log(num.toString());    // "10"
console.log(num.toString(2));   // "1010" (dạng nhị phân)
console.log(num.toString(16));  // "a" (dạng hệ 16)
```

- toFixed(): Chuyển đổi một số thành chuỗi với một số chữ số thập phân cố định.

```js
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
```

- toPrecision(): Chuyển đổi một số thành chuỗi với độ chính xác xác định.

```js
let num = 3.14159;
console.log(num.toPrecision(3)); // "3.14"
console.log(num.toPrecision(2)); // "3.1"
console.log(num.toPrecision(1)); // "3"
```

....

### 2.4 Array:

> **1. Khai báo mảng**

```js
let arrayName = [element1, element2, element3, ...];

let fruits = ["Apple", "Banana", "Cherry"];

let fruits = new Array("Apple", "Banana", "Cherry");
```

> **2. Truy cập phần tử trong mảng**

```js
let firstFruit = fruits[0]; // "Apple"
let secondFruit = fruits[1]; // "Banana"
```

> **3. Thay đổi giá trị của phần tử**

```js
fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
```

> **4. Các phương thức và thuộc tính của mảng**
- length - Độ dài của mảng
- push() - Thêm phần tử vào cuối mảng
- pop() - Xóa phần tử cuối cùng trong mảng
- unshift() - Thêm phần tử vào đầu mảng
- shift() - Xóa phần tử đầu tiên trong mảng
- concat() - Nối mảng
```js
let fruits = new Array("Apple", "Banana", "Cherry");
let moreFruits = ["Grapes", "Mango"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Apple", "Blueberry", "Cherry", "Grapes", "Mango"]
```

- slice() - Cắt mảng

```js
let someFruits = fruits.slice(1, 3);
console.log(someFruits); // ["Blueberry", "Cherry"]
```

- splice() - Thay thế, thêm hoặc xóa phần tử

```js
// Xóa 1 phần tử tại vị trí thứ 1
fruits.splice(1, 1);
console.log(fruits); // ["Apple", "Cherry"]

// Thêm phần tử tại vị trí thứ 1
fruits.splice(1, 0, "Lemon", "Kiwi");
console.log(fruits); // ["Apple", "Lemon", "Kiwi", "Cherry"]
```

- forEach() - Lặp qua các phần tử trong mảng

```js
fruits.forEach((fruit) => {
  console.log(fruit);
});
// "Apple"
// "Lemon"
// "Kiwi"
// "Cherry"
```

- map() - Biến đổi mảng

```js
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "LEMON", "KIWI", "CHERRY"]
```

- filter() - Lọc mảng

```js
let shortFruits = fruits.filter(fruit => fruit.length <= 5);
console.log(shortFruits); // ["Apple", "Kiwi"]
```

- reduce() - Tính toán giá trị duy nhất từ mảng

```js
let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength); // 18 (tổng số ký tự của các phần tử trong mảng)
```

> **5. Mảng lồng nhau**

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]); // 6 (phần tử thứ 3 của mảng thứ 2)
```


## 3. Cấu trúc rẽ nhánh, toán tử 3 ngôi

> **if else**

```js

var gpa = 3;

if(gpa >= 3.6) {
    console.log('Tốt nghiệp loại XS');
} else if(gpa >= 3.2) {
    console.log('Tốt nghiệp loại Giỏi');
} else if(gpa >= 2.5) {
    console.log('Tốt nghiệp loại Khá');
} else if(gpa >= 2) {
    console.log('Tốt nghiệp loại TB');
}
```
> **switch case**

```js
switch (option)  {
    case 1:
        break;
    case 2:
        break;
    default:
        console.log('Invalid');
}
```
> **Toán tử 3 ngôi**

```js
let age = 20;

let message = (age >= 18) ? "You are an adult." : "You are not an adult.";

console.log(message);  // "You are an adult."

```

## 4. Vòng lặp:

> **for**

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

> **while**

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

> **do while**

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

> **for...in** 
- Vòng lặp for...in được sử dụng để lặp qua các thuộc tính của một đối tượng (object) hoặc chỉ số của mảng (array).

```js

let person = { name: "Tung", age: 20, city: "Vinh Yen" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

Tung 
20
Vinh Yen
```

> **for...of**

- Vòng lặp for...of được sử dụng để lặp qua các giá trị của một đối tượng có thể lặp lại như mảng, chuỗi, Map, Set, v.v.

```js
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
```

## 5. Làm việc với hàm:

> **1. Cách khai báo hàm**

```js
function functionName(parameters) {
  // Mã cần thực hiện
}
```

> **2. Biểu thức hàm (Function Expression)**

```js
const functionName = function(parameters) {
  // Mã cần thực hiện
};
```

```js
const greet = function() {
  console.log("Hello, world!");
};

greet();  // In ra "Hello, world!"
```

> **3. Hàm mũi tên (Arrow Function)**

```js
const functionName = (parameters) => {
  // Mã cần thực hiện
};
```

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 7));  // In ra 12

const add = (a,b) => a+b;
console.log(add(5, 7));  // In ra 12
```

> **4. Hàm trong đối tượng (Methods)**

```js
const person = {
  name: "Tung",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet();  // "Hello, Tung"

```

> **5. Các đặc điểm quan trọng của hàm**

- Tham số mặc định: có thể cung cấp giá trị mặc định cho các tham số trong hàm.

```js
function greet(name = "stranger") {
  console.log("Hello, " + name);
}

greet();           // In ra "Hello, stranger"
greet("Tung");    // In ra "Hello, Tung"
```

- Hàm có thể nhận đối số khác nhau: JavaScript không kiểm tra số lượng hoặc kiểu của các tham số truyền vào, vì vậy ta có thể gọi hàm với ít hoặc nhiều đối số hơn so với khai báo.

```js
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2));        // In ra NaN (c là undefined)
console.log(sum(1, 2, 3, 4));  // In ra 6 (4 bị bỏ qua)
```


## 6. Callback
\- Trong JavaScript, callback là một hàm được truyền dưới dạng đối số cho một hàm khác và được gọi lại (callback) sau khi hàm kia hoàn thành công việc của nó. Callback thường được sử dụng để xử lý các thao tác bất đồng bộ, như gọi API, xử lý sự kiện, hoặc đọc/ghi file.

> **Ví dụ**

```js
function processData(data, callback) {
  console.log("Processing data: " + data);
  callback();  // Gọi lại hàm callback
}

function done() {
  console.log("Done processing.");
}

// Gọi hàm processData và truyền hàm done làm callback
processData("Some data", done);

```

> **2. Callback bất đồng bộ (Asynchronous Callback)**

```js
// Callback bất đồng bộ với setTimout
function greet(name) {
  console.log("Hello, " + name);
}

console.log("Start");
setTimeout(() => greet("Tung"), 2000);
console.log("End");

Kết quả:
Start
End
Hello, Tung

```

> **3. Callback Hell**
\- Khi có quá nhiều hàm callback lồng nhau, code có thể trở nên khó đọc và khó quản lý, tình huống này được gọi là "callback hell".

```js
setTimeout(() => {
  console.log("First task done");
  setTimeout(() => {
    console.log("Second task done");
    setTimeout(() => {
      console.log("Third task done");
    }, 1000);
  }, 1000);
}, 1000);
```
 
> **4. Giải pháp cho Callback Hell**
- Promises: Cung cấp một cách rõ ràng hơn để xử lý các tác vụ bất đồng bộ.
- Async/Await: Cho phép viết mã bất đồng bộ theo cách trông giống như mã đồng bộ, giúp mã dễ đọc và quản lý hơn.

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000)
  .then(() => {
    console.log("First task done");
    return wait(1000);
  })
  .then(() => {
    console.log("Second task done");
    return wait(1000);
  })
  .then(() => {
    console.log("Third task done");
  });
```

