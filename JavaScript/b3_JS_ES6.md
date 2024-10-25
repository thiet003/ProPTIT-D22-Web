# Buổi 3: JS ES6
## 1. Từ khóa let, const
- let: Dùng để khai báo biến với phạm vi khối lệnh (block scope). Nó chỉ tồn tại trong khối {} nơi nó được khai báo.
- const: Dùng để khai báo hằng số, giá trị của nó không thể thay đổi sau khi đã được gán
- Với let và const, việc hoisting vẫn xảy ra nhưng chúng sẽ không được khởi tạo, dẫn đến lỗi nếu bạn cố gắng truy cập biến trước khi nó được khai báo.

## 2. Arrow function
- là một tính năng được giới thiệu trong ECMAScript 6 (ES6) để cung cấp một cú pháp ngắn gọn và dễ đọc hơn cho việc khai báo hàm. Arrow functions không chỉ giúp viết code ngắn gọn hơn mà còn thay đổi cách xử lý ngữ cảnh của từ khóa this trong JavaScript.
````
Arrow function:
const add = (a, b) => a + b;

Hàm truyền thống:
function add(a, b) {
    return a + b;
}
````
- **chúng không có this riêng**. Thay vì tạo ra this mới, arrow functions kế thừa this từ ngữ cảnh chứa nó (lexical scoping). Điều này đặc biệt hữu ích khi làm việc với các hàm bên trong các phương thức hoặc callback.
- Khi nào không nên sử dụng arrow functions:
  - Phương thức trong đối tượng (method): Do arrow functions không có this riêng, chúng không phù hợp để định nghĩa phương thức trong một đối tượng.
  - Sử dụng làm hàm tạo (constructor): Arrow functions không thể được sử dụng làm hàm tạo, vì chúng không có thuộc tính prototype.

## 3. Template literals (Template strings)
- là một tính năng mới được giới thiệu trong ECMAScript 6 (ES6), mang lại nhiều sự linh hoạt và tiện lợi khi làm việc với chuỗi ký tự (strings) trong JavaScript. Template literals giúp bạn dễ dàng chèn biến, biểu thức, và tạo chuỗi nhiều dòng mà không cần phải sử dụng các phép nối chuỗi phức tạp.
1. cú pháp: const greeting = `Hello, world!`; // bỏ " "
2. Chèn biến vào biểu thức bằng **${ }**.
````
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: "Hello, Alice!"

const a = 10;
const b = 20;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: "The sum of 10 and 20 is 30."
````
3. Chuỗi nhiều dòng
- tạo chuỗi nhiều dòng một cách dễ dàng mà không cần phải sử dụng các ký tự đặc biệt như \n hoặc phép nối chuỗi.
````
const multiline = `This is a string
that spans across
multiple lines.`;
console.log(multiline);
````
4. Thẻ Template Literals
- là một tính năng nâng cao cho phép bạn xử lý template literals với một hàm đặc biệt được gọi là "tag function". Thay vì chỉ đơn giản là tạo ra một chuỗi, bạn có thể phân tích và thao tác với các phần của template literals trước khi chúng được trả về.
````
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return `${result}${string}<strong>${values[i] || ''}</strong>`;
    }, '');
}

const name = "Alice";
const age = 25;

const sentence = highlight`Name: ${name}, Age: ${age}`;
console.log(sentence);
=> Name: <strong>Alice</strong>, Age: <strong>25</strong>
````
## 4. Destructuring
1. Destructuring với Mảng
- Khi destructuring mảng, bạn có thể trích xuất các phần tử từ mảng và gán chúng vào các biến theo thứ tự tương ứng.
````
- Trích xuất:
const numbers = [1, 2, 3];

const [first, second, third] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3

- Bỏ qua phần tử:
Nếu bạn muốn bỏ qua một số phần tử, bạn có thể để trống chỗ đó:

const numbers = [1, 2, 3, 4];

const [first, , third] = numbers;

console.log(first);  // 1
console.log(third);  // 3

- Trích xuất các phần tử còn lại (Rest Parameters):
Bạn có thể sử dụng ... để lấy các phần tử còn lại trong mảng dưới dạng một mảng mới.

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
````
2.  Destructuring với Đối tượng
- Khi destructuring đối tượng, bạn có thể trích xuất các giá trị từ đối tượng và gán chúng vào các biến dựa trên tên thuộc tính.
```
- Trích xuất:

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const { name, age, city } = person;

console.log(name);  // "Alice"
console.log(age);   // 25
console.log(city);  // "New York"

- Đặt tên biến khác với tên thuộc tính:
Nếu bạn muốn gán giá trị cho một biến có tên khác với tên thuộc tính trong đối tượng, bạn có thể sử dụng cú pháp sau:

const person = {
    name: "Alice",
    age: 25
};

const { name: fullName, age: yearsOld } = person;

console.log(fullName); // "Alice"
console.log(yearsOld); // 25

- Gán giá trị mặc định:
Khi destructuring, bạn có thể gán giá trị mặc định cho biến trong trường hợp thuộc tính không tồn tại trong đối tượng.

const person = {
    name: "Alice"
};

const { name, age = 30 } = person;

console.log(name); // "Alice"
console.log(age);  // 30 (giá trị mặc định)

- Trích xuất các thuộc tính còn lại (Rest Properties):
Bạn có thể sử dụng ... để lấy các thuộc tính còn lại trong đối tượng dưới dạng một đối tượng mới.

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const { name, ...rest } = person;

console.log(name); // "Alice"
console.log(rest); // { age: 25, city: "New York" }
```
3. Destructuring trong Hàm
- Destructuring cũng rất hữu ích khi làm việc với các tham số của hàm. Bạn có thể trích xuất các giá trị từ đối tượng hoặc mảng được truyền vào hàm.
````

function displayPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const person = {
    name: "Alice",
    age: 25
};

displayPerson(person); // "Name: Alice, Age: 25"

- Ví dụ với mảng:

function sum([a, b]) {
    return a + b;
}

console.log(sum([5, 10])); // 15
````
4. Lồng nhau (Nested Destructuring)
- Bạn có thể destructure các đối tượng và mảng lồng nhau. Điều này giúp trích xuất dữ liệu từ các cấu trúc dữ liệu phức tạp dễ dàng hơn.
````
Destructuring đối tượng lồng nhau:

const person = {
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001"
    }
};

const { name, address: { city, zip } } = person;

console.log(city); // "New York"
console.log(zip);  // "10001"

- Destructuring mảng lồng nhau:

const numbers = [1, [2, 3], 4];

const [first, [second, third], fourth] = numbers;

console.log(second); // 2
console.log(third);  // 3
````

## 5. Spread Operator, Optional Operator
### 5.1 Spread Operator
- là một cú pháp mạnh mẽ giúp mở rộng (spread) các phần tử của mảng hoặc đối tượng. Nó có thể được sử dụng trong nhiều tình huống khác nhau, như sao chép mảng/đối tượng, kết hợp chúng, hoặc để truyền các phần tử của mảng làm đối số cho hàm.
1. Mở rộng mảng
- Spread operator có thể được sử dụng để sao chép một mảng hoặc kết hợp các mảng lại với nhau.
````
- tạo bản sao:
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Tạo một bản sao của arr1
console.log(arr2); // [1, 2, 3]

- kết hợp mảng:
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
````
2. Mở rộng Đối tượng
- Spread operator cũng có thể được sử dụng với đối tượng để sao chép hoặc kết hợp các đối tượng.
````
- Sao chép đối tượng:

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // Tạo một bản sao của obj1
console.log(obj2); // { a: 1, b: 2 }

- Kết hợp đối tượng:

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 2 }
````
3. Sử dụng với Hàm
- Spread operator có thể truyền các phần tử của mảng dưới dạng các đối số riêng biệt vào một hàm.

Ví dụ:
````
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
````

### 5.2 Optional Operator
- là một cú pháp an toàn giúp truy cập các thuộc tính của đối tượng mà không cần phải kiểm tra xem các thuộc tính đó có tồn tại hay không. Điều này giúp tránh các lỗi thường gặp khi truy cập vào thuộc tính của null hoặc undefined.
1. Truy cập Thuộc tính
- Optional chaining giúp kiểm tra nếu một thuộc tính tồn tại trước khi truy cập vào nó, tránh các lỗi như "Cannot read property '...' of undefined".

Ví dụ cơ bản:
````
const user = {
    name: "Alice",
    address: {
        city: "New York"
    }
};

console.log(user.address?.city); // "New York"
console.log(user.contact?.phone); // undefined, không có lỗi
````
2. Truy cập Mảng hoặc Hàm
- Optional chaining cũng có thể được sử dụng để kiểm tra xem một mảng hoặc một hàm có tồn tại trước khi truy cập vào chúng.

- Ví dụ với mảng:
````
const users = [
    { name: "Alice" },
    { name: "Bob" }
];

console.log(users[2]?.name); // undefined, không có lỗi
````
- Ví dụ với hàm:
````
const user = {
    name: "Alice",
    greet: function() { return "Hello!"; }
};

console.log(user.greet?.()); // "Hello!"
console.log(user.sayHi?.()); // undefined, không có lỗi
````

## 6. Exports và Require
- là hai khái niệm cơ bản liên quan đến module trong JavaScript, đặc biệt trong môi trường Node.js. Chúng giúp quản lý và tổ chức code một cách dễ dàng hơn bằng cách cho phép bạn tách code thành các module nhỏ, có thể tái sử dụng và dễ bảo trì.
1. Module trong JavaScript
Trong JavaScript, đặc biệt là trong môi trường Node.js, một module là một file riêng lẻ chứa code JavaScript. Mỗi module có thể xuất ra các thành phần (như biến, hàm, lớp, v.v.) để các module khác có thể sử dụng.
2. Exports trong Node.js
- module.exports và exports là hai cách để xuất (export) dữ liệu từ một module để nó có thể được sử dụng trong các module khác.

- module.exports là đối tượng mặc định mà một module xuất ra. Bạn có thể gán bất kỳ giá trị nào (biến, hàm, lớp, đối tượng, v.v.) cho module.exports.

Ví dụ:
````
// math.js
function add(a, b) {
    return a + b;
}

module.exports = add;
Ở đây, math.js xuất ra hàm add, và bất kỳ module nào yêu cầu (require) math.js sẽ nhận được hàm này.
````
- exports là một tham chiếu đến module.exports. Bạn có thể gán các thuộc tính cho exports, và những thuộc tính này sẽ được xuất ra ngoài module.

Ví dụ:
````
// math.js
exports.add = function(a, b) {
    return a + b;
};

exports.subtract = function(a, b) {
    return a - b;
};
````
Trong ví dụ này, math.js xuất ra cả hai hàm add và subtract dưới dạng các thuộc tính của đối tượng exports.

  - Khi nào sử dụng module.exports và exports?
    - Sử dụng module.exports khi bạn muốn xuất ra một giá trị đơn lẻ (hàm, lớp, đối tượng, v.v.).
    - Sử dụng exports khi bạn muốn xuất ra nhiều thuộc tính hoặc phương thức khác nhau từ module.

3. Require trong Node.js
- require là hàm dùng để import các module khác vào module hiện tại. Nó giúp bạn truy cập các giá trị hoặc hàm mà một module khác đã export.

Ví dụ:
````
// app.js
const add = require('./math.js');

console.log(add(2, 3)); // 5
````
- Trong ví dụ trên, require('./math.js') sẽ trả về hàm add mà module math.js đã export. Sau đó, bạn có thể sử dụng hàm này trong module hiện tại (app.js).

4. Require và Exports với các Module Cục Bộ và Core Modules
- Module Cục Bộ: Là các module mà bạn tự tạo ra trong dự án của mình, giống như các ví dụ ở trên (math.js).

- Core Modules: Là các module được tích hợp sẵn trong Node.js, ví dụ như fs, http, path, v.v.
````
const fs = require('fs'); // Import module fs (Core Module)
````
5. Require với Module từ npm
- Ngoài các module cục bộ và core modules, bạn cũng có thể sử dụng require để import các module từ npm (Node Package Manager).

Ví dụ:
````
const express = require('express'); // Import thư viện Express từ npm
const app = express();
````