# [BUỔI 8] JavaScript cơ bản Buổi 2

## 2. Array

### Các phương thức thường dùng của Array:

> **1. push(), pop(), shift(), unshift()**

- push(): thêm phần tử vào cuối mảng
- unshift(): thêm phần tử vào đầu mảng
- pop(): xóa phần tử cuối cùng trong mảng
- shift(): xóa phần tử đầu mảng

> **2. concat(), slice(), splice(), reverse(), join()**  

> **concat()**

\- Sử dụng để hợp nhất 2 hoặc nhiều mảng, không làm thay đổi các mảng ban đầu mà trả về 1 mảng mới.


\- Cú pháp:

```
concat()
concat(value1)
concat(value1, value2)
concat(value1, value2, /* …, */ valueN)
```


```js
var a = [1, 2, 3, 4, 5];
var b = [6, 7, 8, 9];
console.log(a.concat(6));
console.log(a.concat(b));
```

> **slice()**

\- Trả về 1 mảng chứa các phần tử từ start đến end (không bao gồm end) của mảng gốc và không làm thay đổi mảng gốc.

\- Cú pháp: 

```js
slice()
slice(start)
slice(start, end)
```

\- `start`
- nếu start -arr.lenght() < start <= 0, start = start + arr.length()
- nếu start < -arr.length(), start = 0
- nếu start >= arr.lentght(), hàm trả về mảng trống

\- `end`
- nếu -arr.length() < end <= 0, start = end + arr.length()
- nếu end >= arr.length() hoặc end bị bỏ qua thì hàm tra về tất cả các phần tử từ start.
- nếu end <= start hàm trả về mảng trống.

> **splice()**

\- Dùng để thay đổi nội dung của mảng bằng cách thêm mới, xóa bỏ vào các vị trí được chỉ định.
\- Để lấy một mảng mới được cắt từ mảng cũ mà không làm thay đổi mảng cũ, ta có thể sử dụng `toSpliced()`, hoặc chỉ cần truy cập đến một phần của mảng ta có thể sử dụng `slice()`.

\- Cú pháp:

```js
splice(start) // xóa tất cả các phần tử có index từ start
splice(start, deleteCount) // xóa n phần tử từ start
splice(start, deleteCount, item1) // xóa n phần tử từ start và thêm vào item1
splice(start, deleteCount, item1, item2) // tương tự ... 
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

- `-arr.length <= start < 0` : start = start + arr.length
- `start < arr.length` : start = 0
- `start >= arr.length` / không có start  : không có phần tử nào bị xóa

```js
var weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

weeks.splice(5);
console.log(weeks);

weeks.splice(2, 1);
console.log(weeks);

weeks.splice(2, 0, 'Wednesday');
console.log(weeks);
```

> **reverse()**

\- đảo ngược vị trí phần tử của mảng hiện tại.

\- Cú pháp: `arr.reverse();`


```js
var a = [1, 2, 3, 4, 5];
a.reverse()

console.log(a);
```

> **join()**

\- Trả về 1 chuỗi mới bằng cách nối tất cả các phần tử trong mảng, phân tách bằng dấu `,` hoặc chuỗi phân cách (`separator`) được chỉ định.

\- Cú pháp:

```js
join()
join(separator)
```

```js
var a = [1, 2, 3, 4, 5];

console.log(a.join(' - '));
```

> **3. indexOf(), includes(), find()**

> **indexOf()**

\- Trả về index của phần tử đầu tiên có giá trị bằng giá trị cần tìm bắt đầu từ một vị trí trong mảng, nếu không tìm thấy trả về -1.

\- Cú pháp:

```js
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

- nếu -arr.length <= fromIndex < 0, fromIndex = fromIndex + array.length

- nếu fromIndex < -arr.length hoặc fromIndex bị bỏ qua, fromIndex = 0.

- nếu fromIndex >= arr.length trả về -1.


> **includes()**

\- Kiểm tra xem mảng có bao gồm giá trị truyền vào hay không, nếu không trả về `false`, nếu có trả về `true`.

\- Cú pháp:

```js
includes(searchElement)
includes(searchElement, fromIndex)
```

> **find()**

\- cú pháp: `arr.find(callback);`
\- Nhận tham số truyền vào là 1 hàm callback, trả về giá trị của phần tử đầu tiên thỏa mãn callback, nếu không có giá trị nào thỏa mãn sẽ trả về undefind.

```js
function check(x) {
    return x > 10;
}

var a = [1, 2, 10, 23, 4];

console.log(a.find(check)); // 23
```

> **3. forEach(), map()**

> **forEach()**

\- Thực thi một hàm được cung cấp một lần cho mỗi phần tử của mảng.

\- Cú pháp:
```js
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

- callbackFn: hàm dùng để thực thic cho mỗi phần tử của mảng, giá trị trả về của nó bị loại bỏ.
- thisArg **Chưa hiểu chỗ này**

Ví dụ GPT:
```js
// Khai báo một mảng các số nguyên
const numbers = [1, 2, 3, 4, 5];

// Sử dụng forEach để lặp qua từng phần tử của mảng và in ra màn hình
numbers.forEach(function(element) {
    console.log(element);
});

// Sử dụng forEach với arrow function và cung cấp giá trị thisArg
const obj = {
    multiplier: 2,
    process: function(element) {
        console.log(element * this.multiplier);
    }
};

numbers.forEach(obj.process, obj);

```

> **map()**

\- cú pháp: `arr.map(callback);`
\- Nhận tham số truyền vào là 1 hàm callback, trả về 1 mảng mới với các giá trị là giá trị được trả về của từng phần tử khi được truyền vào callback.


```js
function double(x) {
    return x*2;
}

var arr = [1, 2, 3, 4];

console.log(arr.map(double)); // [ 2, 4, 6, 8 ]
```

> **4. filter(), some(), every(), group()**

> **filter()**

\- Trả về 1 mảng chứa các phần tử đã vượt qua callbackFn (trả về true).

\- Cú pháp:

```js
filter(callbackFn)
filter(callbackFn, thisArg)
```

- callbackFn: một hàm để kiểm tra từng phần tử trong mảng, cần trả về true/false.
- thisArg ...

> **some()**

\- cú pháp: `arr.some(callback)`.
\- Kiểm tra trong mảng có ít nhất 1 phần tử nào thỏa mãn callback hay không, trả về true/false.

```js
function check(x) {
    return x > 10;
}

var arr = [1, 10, 21, 23, 34];

console.log(arr.some(check)); // true
```

> **every()**

\- cú pháp: `arr.every(callback)`.
\- Kiểm tra các phần tử trong mảng có thỏa mãn callback không, trả về true/false.

```js
function check(x) {
    return x > 10;
}

var arr = [1, 10, 21, 23, 34];

console.log(arr.every(check)); // false
```


> **6. reduce()**

\- cú pháp:

```js
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

\- Với tham số truyền vào chỉ có callback, giá trị ban đầu của accumulator là giá trị của phần tử ban đầu.

```js
function callback(accumulator, param1, param2, param3, param4) {
    // accumulator giá trị tích lũy sau mỗi lần return của callback
    // param1 giá trị của phần tử hiện tại
    // param2 chỉ số của phần tử hiện tại
    // param3 mảng hiện tại
    // param4 undefined

    console.log(accumulator + " " + param1 + " " + param2 + " " + param3 + " " + param4);
    return accumulator+param1;
}

var a = [1, 2, 3, 4];
console.log(a.reduce(callback)); // 10
```

\- với tham số truyền vào là (callback, initialValue), giá trị của accumulator ban đầu là initialValue.

```js
function callback(accumulator, param1, param2, param3, param4) {
    // accumulator giá trị tích lũy sau mỗi lần return của callback
    // param1 giá trị của phần tử hiện tại
    // param2 chỉ số của phần tử hiện tại
    // param3 mảng hiện tại
    // param4 undefined

    console.log(accumulator + " " + param1 + " " + param2 + " " + param3 + " " + param4);
    return accumulator + param1;
}

var initialValue = 10;
var a = [1, 2, 3, 4];
console.log(a.reduce(callback, initialValue)); // 20
```






