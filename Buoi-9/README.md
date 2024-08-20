# [BUỔI 9] JavaScript cơ bản buổi 3

## 1. Ôn tập và hoàn thành các kiến thức về Array

## 2. JS ES6

### Từ khóa let, const

> **let**

> **const**

### Arrow function

\- Là cú pháp rút gọn để viết hàm, không có từ khóa `this` riêng.

\- Cú pháp:

```js
const tenHam = (agr 1, agr 2) => {
    // thân hàm
    return value;
}

```

### Template literals - Template strings
\- Template literals là các chuỗi được bao quanh bởi ký tự backtick (`), cho phép tạo chuỗi nhiều dòng, nội suy chuỗi với các biểu thức nhúng, và sử dụng các cấu trúc đặc biệt gọi là "tagged templates".

\- Template literals đôi khi được gọi một cách không chính thức là "template strings", vì chúng thường được sử dụng để nội suy chuỗi (tạo chuỗi bằng cách thay thế các phần giữ chỗ). Tuy nhiên, một "tagged template literal" có thể không chỉ tạo ra một chuỗi; nó có thể được sử dụng với một hàm tùy chỉnh (custom tag function) để thực hiện bất kỳ thao tác nào bạn muốn trên các phần khác nhau của template literal.

\- Cách khai báo:

- Chuỗi thông thường (Regular string): Sử dụng dấu backtick (`) nhưng không có biểu thức nhúng hoặc nhiều dòng. Đây là một chuỗi đơn giản được bao quanh bởi dấu backtick.

```js
`string text`
```

- Chuỗi nhiều dòng (Multi-line string): Sử dụng dấu backtick với nhiều dòng văn bản. Đây là một chuỗi nhiều dòng, nơi mỗi dòng được giữ nguyên định dạng khi in ra.

```js
`string text line 1
 string text line 2`
```

- Chuỗi có nội suy (String interpolation): Sử dụng dấu backtick với biểu thức nhúng ${expression}. Đây là chuỗi có chứa nội suy, cho phép chèn giá trị của một biểu thức JavaScript vào trong chuỗi.

```js
`string text ${expression} string text`
```

- Tagged Template Literal: Sử dụng dấu backtick với một hàm tag (tagFunction) ở trước. Đây là "tagged template literal," nơi chuỗi này được xử lý bởi một hàm tag (hàm tùy chỉnh), cho phép thực hiện các thao tác phức tạp hơn như biến đổi chuỗi hoặc tính toán giá trị.

```js
tagFunction`string text ${expression} string text`
```

```js
function myTag(strings, agr1, agr2) {
    const str0 = strings[0];
    const str1 = strings[1];
    const str2 = strings[2];

    console.log(agr1);
    console.log(agr2);

    return str1;
}

const age = 12;
const grade = 2.5;

const result = myTag`str0 ${age} str1 ${grade} str2`;

console.log(result);
```

### Destructuring

\- Cú pháp phân tách (destructuring assignment) là một biểu thức trong JavaScript cho phép giải nén các giá trị từ mảng, hoặc các thuộc tính từ đối tượng, vào các biến riêng biệt.

> **Destructuring Arrays (Phân tách mảng)**

```js
const array = [1, 2, 3, 4, 5];
const [a, b, c] = array;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

const [x, , y] = [10, 20, 30];
console.log(x); // 10
console.log(y); // 30
```

> **Destructuring Objects (Phân tách đối tượng)**

```js
const person = {
    name: 'Tung',
    age: 20,
    city: 'Vinh Yen'
};

const { name: fullName, city } = person;

console.log(fullName); // Tung
console.log(city);      // Vinh Yen
  
```

> **Destructuring Nested Objects and Arrays (Phân tách đối tượng và mảng lồng nhau)**

```js
const student = {
    name: 'Tung',
    grades: [85, 90, 92]
};

const { name, grades: [math, science, english] } = student;

console.log(name);    // Tung
console.log(math);    // 85
console.log(science); // 90
console.log(english); // 92
```

> **Default Values (Giá trị mặc định)**

```js
const [a, b = 2] = [1];
console.log(a); // 1
console.log(b); // 2

const { x = 10, y } = { y: 20 };
console.log(x); // 10
console.log(y); // 20
```

### Spread Operator Optional Operator

> **Spread Operator**

\- Spread Operator trong JavaScript được sử dụng để phân tán các phần tử của một mảng hoặc đối tượng vào các cấu trúc khác. Nó giúp làm việc với các mảng và đối tượng trở nên dễ dàng hơn và cho phép sao chép hoặc kết hợp các phần tử một cách linh hoạt.

- Sao chép Mảng, Đối tượng:

```js
const array1 = [1, 2, 3];
const array2 = [...array1];
console.log(array2); // [1, 2, 3]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2); // { a: 1, b: 2 }

```

- Kết hợp Mảng, Đối tượng:

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }

```

- Sao chép và Thay đổi Mảng, Đối tượng:

```js
const array = [1, 2, 3];
const newArray = [0, ...array, 4];
console.log(newArray); // [0, 1, 2, 3, 4]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }

```

> **Optional Operator (.?)**

\- là một cú pháp giúp truy cập các thuộc tính hoặc phương thức của đối tượng mà không gây lỗi nếu các thuộc tính hoặc phương thức đó không tồn tại. Điều này giúp làm cho mã nguồn trở nên an toàn hơn và dễ đọc hơn khi làm việc với các đối tượng có thể không có cấu trúc đầy đủ.

- Truy cập Thuộc Tính: nếu đối tượng hoặc thuộc tính không tồn tại, biểu thức sẽ trả về undefined thay vì gây lỗi.

```js
const user = {
    profile: {
      name: 'Tung'
    }
};

const userName = user.profile?.name;
console.log(userName); // 'Tung'
```

- Truy cập Phương Thức: để gọi một phương thức mà có thể không tồn tại. Nếu phương thức không tồn tại, biểu thức sẽ trả về undefined và không gây lỗi.

```js
const user = {
  greet() {
    return 'Hello';
  }
};

const greetMessage = user.greet?.();
console.log(greetMessage); // 'Hello'
```

- Truy cập Phần Tử Mảng:  sử dụng để truy cập phần tử của mảng mà có thể không tồn tại.

```js
const data = {
  items: [1, 2, 3]
};

const firstItem = data.items?.[0];
console.log(firstItem); // 1
```

- Kết hợp với Nullish Coalescing Operator (??): ta có thể kết hợp optional chaining với nullish coalescing operator để cung cấp giá trị mặc định khi giá trị là null hoặc undefined.

```js
const user = {
  profile: null
};

const userName = user.profile?.name ?? 'Unknown';
console.log(userName); // 'Unknown'

```

### Exports và Require

> **exports** 

\- dùng để gán các thuộc tính hoặc phương thức cho đối tượng exports của mô-đun, điều này làm cho chúng có sẵn để được nhập vào mô-đun khác.

```js
// myModule.js

const greeting = 'My name is Tung.'

const sayHello = function() {
    console.log(greeting);
}

exports.greeting = greeting;
exports.sayHello = sayHello;

```

> **require**

\- dùng để nhập mô-đun và truy cập các thuộc tính hoặc phương thức đã được xuất.

```js
// demo.js

const myModule = require('./myModule.js');

console.log(myModule.greeting); 
myModule.sayHello();           

```