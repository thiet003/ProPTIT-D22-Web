# BUỔI 1: Kiến thức cơ bản trong JavaScript

## 1. Tìm hiểu chung
- JavaScript là ngôn ngữ lập trình mang đến sự sinh động của website.
1. JavaScript là ngôn ngữ dễ học;
2. Nó được phát triển bởi Netscape, và đang được dùng trên 92% webstie;
3. JS có thể được gắn vào một element của trang web hoặc sự kiện của trang web như cú click chuột;
4. Hoạt động trên đa trình duyệt và đa thiết bị;
5. Nhanh và nhẹ hơn các ngôn ngữ lập trình khác;
6. Có thể ít an toàn hơn vì độ phổ biến của nó;
7. Bạn có thể thêm JavaScript trực tiếp vào HTML hoặc bạn có thể lưu nó trên files riêng biệt và gọi lên khi cần.

## 2. Syntax
### 2.1 Khai báo dữ liệu
1. Cấu trúc trong javascript
````
<script language="javascript" type="text/javascript">
   <!-- 
        JavaScript code
   // -->
</script>
````
-  Chúng ta thêm một HTML commet (lời bình) tùy ý mà bao quanh JavaScript code. Điều này bảo lưu code của chúng ta khi một trình duyệt không hỗ trợ JavaScript
2. Biến
- khai báo biến: **var** tên biến;
  - VD: var x;
  - var x = 5, y; 
- JavaScript là ngôn ngữ untyped (không định kiểu). Nghĩa là một biến JavaScript có thể giữ một giá trị của bất kỳ kiểu dữ liệu nào.
- Phạm vi Biến:
  - var:
    - Có phạm vi hàm (function scope). Điều này có nghĩa là nếu bạn khai báo một biến với var trong một hàm, biến đó sẽ có phạm vi trong toàn bộ hàm đó, bất kể nó được khai báo bên trong khối lệnh (if, for, v.v.) nào.
    - var không có phạm vi khối lệnh (block scope), nghĩa là nếu bạn khai báo var trong một khối lệnh, biến đó vẫn có thể được truy cập từ bên ngoài khối lệnh.
    - Bị hoisting, có nghĩa là khai báo biến được đưa lên đầu phạm vi của nó trong quá trình thực thi. Tuy nhiên, giá trị của biến sẽ không được khởi tạo cho đến khi dòng mã gán giá trị cho nó được thực thi.(undefined)
  - let:
    - Có phạm vi khối lệnh (block scope). Điều này có nghĩa là biến khai báo bằng let chỉ tồn tại trong khối lệnh nơi nó được khai báo, như trong một cặp dấu {}.
    - let được thiết kế để giải quyết những vấn đề về phạm vi biến của var, đặc biệt là khi làm việc với vòng lặp và khối lệnh. 
- Tên Biến:
  - phân biệt hoa thường
  - k trùng từ khóa
  - k bắt đầu bằng số 
- 3 kiểu dữ liệu gốc:
  - Số thực, ví dụ: 123, 120.50, …
  - Chuỗi văn bản, ví dụ: "This text string", …
  - Boolean ví dụ: true hoặc false.
- null và undefined, mỗi kiểu này chỉ định nghĩa một giá trị đơn. Bổ sung cho những kiểu dữ liệu này.
- JavaScript hỗ trợ một kiểu dữ liệu hỗn hợp được gọi là object (đối tượng). 
3. các loại toán tử
- Toán tử số học: + - * / % ++ --
  - "a" + 12 = "a12"
- Toán tử so sánh: ===(k ép kiểu) ==(so sánh ép kiểu) !=  > < >= <=
  
- Toán tử logic: && || !

- Toán tử gán: = += -= *= /= %=

- Toán tử điều kiện: (đk) ? x : y; // điều kiện đúng trả về x, sai trả về y;

- Toán tử Tpyeof: trả về kiểu dữ liệu của biến đó
  - VD: var a = 10; => typeof a = "number" 

### 2.2 Các đối tượng trong JavaScript(String, Number, Object,...)
1. String
- String là đối tượng đại diện cho một chuỗi ký tự. Bạn có thể tạo một chuỗi bằng cách sử dụng dấu nháy đơn hoặc nháy kép.

- Phương thức phổ biến: length, toUpperCase(), toLowerCase(), indexOf(), substring(), slice(), replace(), split().
````
let str = "Hello, World!";
console.log(str.length); // 13
console.log(str.toUpperCase()); // "HELLO, WORLD!"
````
2. Number
Number là đối tượng đại diện cho số, bao gồm cả số nguyên và số thực (float).
Phương thức phổ biến: toFixed(), toExponential(), toString(), isNaN().
Ví dụ:
let num = 42;
console.log(num.toFixed(2)); // "42.00"
3. Object
Object là một tập hợp các cặp khóa-giá trị (key-value pairs). Mỗi khóa là một chuỗi (string) và mỗi giá trị có thể là bất kỳ kiểu dữ liệu nào, bao gồm cả các đối tượng khác.


#### Tạo đối tượng
  - a. Sử dụng Object Literal
  ````
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello!");
    }
};

  ````
  b. Sử dụng từ khóa new Object()

let person = new Object();
person.name = "John";
person.age = 30;
person.greet = function() {
    console.log("Hello!");
};
c. Sử dụng hàm tạo (Constructor Function)

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello!");
    };
}

let person = new Person("John", 30);
#### Truy cập thuộc tính
Có hai cách để truy cập vào các thuộc tính của một đối tượng:

a. Dấu chấm (.)

console.log(person.name); // "John"
b. Dấu ngoặc vuông ([])

console.log(person["age"]); // 30
####  Thêm hoặc cập nhật thuộc tính
Bạn có thể thêm hoặc cập nhật các thuộc tính của một đối tượng bất cứ lúc nào:
person.job = "Developer"; // Thêm thuộc tính mới
person.age = 31;          // Cập nhật thuộc tính
####  Xóa thuộc tính
Sử dụng từ khóa delete để xóa một thuộc tính:
delete person.age;
console.log(person.age); // undefined
#### Sao chép đối tượng
Có nhiều cách để sao chép một đối tượng trong JavaScript:

a. Sao chép nông (shallow copy) sử dụng Object.assign()

let copyPerson = Object.assign({}, person);
b. Sao chép nông sử dụng Spread Operator (...)

let copyPerson = { ...person };
c. Sao chép sâu (deep copy) sử dụng JSON

let deepCopyPerson = JSON.parse(JSON.stringify(person));

#### Object Methods (Phương thức của đối tượng)
JavaScript cung cấp nhiều phương thức tích hợp sẵn để làm việc với đối tượng:

Object.keys(): Trả về một mảng chứa tất cả các khóa của đối tượng.

Object.values(): Trả về một mảng chứa tất cả các giá trị của đối tượng.

Object.entries(): Trả về một mảng các cặp [key, value].

Object.assign(): Sao chép các thuộc tính từ một hoặc nhiều đối tượng nguồn vào đối tượng đích.

Object.freeze(): Đóng băng một đối tượng, không cho phép thay đổi bất kỳ thuộc tính nào.

Object.seal(): Niêm phong một đối tượng, không cho phép thêm hoặc xóa thuộc tính (nhưng vẫn có thể thay đổi giá trị của thuộc tính hiện có).
5. Array
Array là một đối tượng đặc biệt để lưu trữ danh sách các phần tử. Các phần tử có thể có kiểu dữ liệu khác nhau và được đánh số bằng chỉ số (index) bắt đầu từ 0.

Phương thức phổ biến: push(), pop(), shift(), unshift(), forEach(), map(), filter(), reduce().

let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]
6. Function
Function là một đối tượng có thể được gọi hoặc thực thi. Hàm trong JavaScript là các đối tượng bậc nhất, có nghĩa là chúng có thể được gán cho các biến, truyền vào hàm khác hoặc trả về từ các hàm khác.

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5
7. Date
Date là một đối tượng đại diện cho ngày và giờ.

Phương thức phổ biến: getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds().
Sao chép mã
let date = new Date();
console.log(date.getFullYear()); // Ví dụ: 2024
8. Math
Math là một đối tượng cung cấp các thuộc tính và phương thức cho các hằng số và hàm toán học.

Phương thức phổ biến: Math.random(), Math.floor(), Math.ceil(), Math.max(), Math.min(), Math.abs().

console.log(Math.random()); // Một số ngẫu nhiên giữa 0 và 1
9. RegExp (Regular Expression)
RegExp là một đối tượng cho phép bạn thực hiện các hoạt động khớp mẫu (pattern matching) và tìm kiếm, thay thế trong chuỗi.

Phương thức phổ biến: test(), exec(), match(), replace().

let regex = /hello/i;
console.log(regex.test("Hello World")); // true
### 2.3 Cấu trúc rẽ nhánh, toán tử 3 ngôi
1. Cấu trúc rẽ nhánh
- if ,  if else , if else if
````
if (đk1){
   thực hiện nếu điều kiện 1 đúng
}
else if( đK2 ){
   nếu điều kiện 2 đúng
}
else{
   nếu các điều kiện trên sai
}
````
2. Switch case
```
switch (biến)
{
   case giá trị 1: code;
   break;
   
   case giá trị 2: statement(s)
   break;
   ...
   case giá trị n: statement(s)
   break;
   default:  statement(s)
}
```
3. Toán tử 3 ngôi
- cú pháp:  (đK) ? (kq khi đk đúng) : (kq khi đk sai) ; 

### 2.4 Vòng lặp
1. while()
2. for(khởi tạo; điều kiện; bước nhảy)
3. for(biến tạm **in** đối tượng)
Trong mỗi lần lặp, một thuộc tính từ object – đối tượng được gán tới variablename - tên biến tạm và vòng lặp này tiếp tục tới khi hết tất cả thuộc tính của đối tượng.
4. break
5. continue
### 2.5 Làm việc với hàm
1. Cú pháp định nghĩa hàm
````
<script type="text/javascript">
   <!--
      function functionname(parameter-list)
      {
         statements
         (return var)
      }
   //-->
</script>
````
- Để gọi một hàm ở đâu đó sau khi trong script, bạn đơn giản sẽ cần viết tên của hàm đó

### 2.6 Callback
1. Đồng bộ và bất đồng bộ
- Đồng bộ (Synchronous)
  - Trong các tác vụ đồng bộ, các dòng mã được thực thi lần lượt, theo thứ tự, từng dòng một, và dòng mã hiện tại hoàn thành thì mới thực thi dòng mã tiếp theo.
-  Bất đồng bộ (Asynchronous)
   - là có thể bắt đầu thực thi 1 dòng mã, sau đó tiếp tục chạy các dòng mã khác mà không cần chờ dòng mã đó hoàn thành. 
- Ứng dụng thực tế của bất đồng bộ:
  - Bất đồng bộ rất hữu ích khi bạn cần thực hiện các tác vụ có thể mất thời gian như gọi API, đọc/ghi tệp, hoặc truy cập cơ sở dữ liệu. Nó giúp không làm "đóng băng" giao diện người dùng trong khi chờ kết quả, cho phép chương trình tiếp tục xử lý các tác vụ khác.
2. Callback
- Callback giúp JavaScript xử lý các tác vụ bất đồng bộ một cách hiệu quả, giúp chương trình không bị "đóng băng" trong khi chờ đợi một tác vụ nào đó hoàn thành.
  - VD: khi cần lấy dữ liệu trong 1 file mất khá nhiều thời gian, nếu không dùng callback thì sẽ phải chờ đọc hết file thì chương trình mới xử lí tiếp --> đóng băng, gây khó chịu
  - nếu dùng callback: chương trình vẫn chạy và xử lí tiếp các yêu cầu không liên quan đến file đó --> không bị đóng băng,  những xử lí liên quan tới dữ liệu từ file đó sẽ chờ khi đọc xong và xử lí tiếp  
-  truyền hàm callback vào tương tự như tham số bình thường, như cách chúng ta vẫn làm với các kiểu dữ liệu khác vậy. Nghĩa là khi truyền một callback vào một hàm khác thì callback tuy nó là một hàm nhưng sẽ không có dấu "()" sau tên hàm.
-  Nguyên tắc khi thực hiện Callback Function
   -  Tham số truyền vào phải là một functionn
    ````
    function showPopup(callback) {
        if (typeof callback !== 'function'){
            alert('Bạn phải truyền vào là một function');
            return false;
        }
         // do something
    }
    ```` 
  - Cẩn thận với this khi hàm callback nằm trong object
  -  Callback Hell: Vòng lặp vô tận “callback bên trong callback bên trong callback … ” sẽ có khả năng xảy ra





