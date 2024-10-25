# BUỔI 6: JSON & JS Async

## 1. Tìm hiểu về JSON
- JSON là viết tắt của JavaScript Object Notation. Đây là một định dạng chung để biểu diễn các giá trị và object.
-  JSON được sử dụng nhiều để trao đổi dữ liệu giữa client (JavaScript) và server (Ruby, PHP, Java,...).
-  JSON trong JS có hai phương thức là:
   - JSON.stringify(): chuyển object thành string.
   - JSON.parse(): chuyển string thành object.
### 1.1 JSON.stringify()
#### 1.1.1 khả năng
````
let user = {
  name: "Alex",
  age: 28,
};

let json = JSON.stringify(user);

console.log(json); // {"name":"Alex","age":28}
console.log(typeof json); // string
````
- Trong JSON, string luôn sử dụng dấu nháy kép " ", mà không sử dụng dấu nháy đơn ' ' hay dấu backtick ` `.
- Thuộc tính của object cũng chuyển thành string sử dụng dấu nháy kép "". Do đó, name và age trở thành "name" và "age".
- JSON.stringify cũng có thể áp dụng cho kiểu dữ liệu nguyên thủy. Và sau đây là những kiểu dữ liệu mà JSON trong JavaScript hỗ trợ:

  - Object {...}
  - Array [...]
- Kiểu nguyên thủy:
  - string
  - number
  - boolean
  - null
- JSON chỉ đơn giản là dữ liệu và độc lập với ngôn ngữ lập trình. Do đó, một vài thuộc tính của object bị bỏ qua khi dùng JSON.stringify như:
  - Phương thức của object.
  - Symbol key và value.
      - Symbol là một kiểu dữ liệu mới được giới thiệu từ phiên bản ES6.  
  - Thuộc tính với giá trị là undefined.
-  áp dụng được với object, array có nhiều tầng lồng nhau
-  không hỗ trợ nếu object có tham chiếu vòng tròn
#### 1.1.2 Cú pháp 
> let json = JSON.stringify(value[, replacer, space])
- Trong đó: 
  - value: là giá trị đầu vào cần chuyển thành string.
  - replacer: mảng chứa các thuộc tính, json chỉ lấy các thuộc tính này để chuyển sang string hoặc một hàm function (key,value) được gọi với mỗi thuộc tính của object.
     - hàm replacer được gọi với mỗi cặp (key, value) bao gồm cả object và mảng lồng nhau một cách đệ quy. 
     - replacer = null - nếu không muốn tùy chỉnh tham số này.
  - space: số lượng kí tự dấu cách dùng để format JSON trong JS.
    - space = 2 - các thuộc tính sẽ xuống dòng và thụt 2 dấu cách so với cha. 
- Thông thường, phương thức JSON.stringify chỉ cần truyền vào tham số đầu tiên, tham số thứ 2 và thứ 3 dùng để tùy chỉnh quá trình chuyển từ object sang JSON
#### 1.1.3 Tùy biến toJSon
- cung cấp phương thức toJSON để chuyển đổi sang JSON tùy ý
````
let room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};
console.log(JSON.stringify(room)); // 23
````
### 1.2 Phương thức JSON.parse()
- dùng để chuyển JSON-string trở thành giá trị (object, array hoặc các kiểu dữ liệu nguyên thủy tương ứng)
> cú pháp: let value = JSON.parse(str, [reviver]);
- Trong đó:
  - str là JSON-string để parse.
  - reviver là một hàm (không bắt buộc) dạng function(key, value)  được gọi với mỗi cặp (key, value) và biến đổi value.
````
let data = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(data);
console.log(user.friends[1]); // 1
````
- JSON có thể có cấu trúc phức tạp, bao gồm nhiều kiểu dữ liệu, mảng, object lồng nhau. Nhưng chúng bắt buộc phải tuân theo định dạng chuẩn của JSON.
- Một số lỗi JSON không hợp lệ như sau:
````
let json = `{
  name: "John",           // không hợp lệ: thuộc tính không có nháy kép ""
  "surname": 'Smith',     // không hợp lệ: giá trị sử dụng nháy đơn ''
  'isAdmin': false        // không hợp lệ: thuộc tính sử dụng nháy đơn
  "birthday": new Date(), // không hợp lệ: toán tử new không được phép
  "friends": [0,1,2,3]    // hợp lệ
}`;
````
- Ngoài ra, JSON khác với Object là không chấp nhận comment code và không chấp nhận dấu phẩy đuôi:
````
// comment trong JSON
let json1 = `{
  "x": 1, // comment 1
  "y": 2
}`;
JSON.parse(json1); // Lỗi: Unexpected token / in JSON at position 12

// dấu phẩy đuôi trong JSON
let json2 = `{
  "x": 1,
  "y": 2,
}`;
JSON.parse(json2); // Lỗi: Unexpected token } in JSON at position 22
````
- Sử dụng reviver trong JSON.parse:
Bạn muốn parse JSON-string về object để lấy thông tin:
````
let str = '{"title":"Conference","date":"2021-12-19T10:00:00.000Z"}';
let meetup = JSON.parse(str);
console.log(meetup.date.getDate());
// Lỗi: meetup.date.getDate is not a function
````
- Đúng vậy, giá trị meetup.date là một string "2021-12-19T10:00:00.000Z" chứ không phải đối tượng Date.

- Để giải quyết vấn đề này, bạn có thể sử dụng hàm reviver để chuyển đổi giá trị của date thành object Date như sau:
````
let meetup = JSON.parse(str, function (key, value) {
  // nếu key là "date" thì trả về new Date(value)
  if (key === "date") {
    return new Date(value);
  }

  // ngược lại thì giữ nguyên giá trị value gốc.
  return value;
});

console.log(meetup.date.getDate()); // 19
````
## 2. JS Async
-  Async (viết tắt của Asynchronous) là một khái niệm để mô tả việc thực hiện các tác vụ không đồng bộ, cho phép chương trình tiếp tục chạy các đoạn mã khác mà không phải chờ cho một tác vụ cụ thể hoàn thành. Các tác vụ bất đồng bộ thường bao gồm việc gọi API, đọc/ghi file, truy xuất cơ sở dữ liệu, hay các thao tác cần thời gian chờ đợi mà không muốn khóa chương trình.

- JavaScript từ bản ES2017 (ES8) đã giới thiệu cú pháp async/await để giúp việc xử lý các tác vụ bất đồng bộ trở nên dễ dàng hơn, trực quan và trông giống như mã đồng bộ.
### 2.1 Callback Hell là gì?
- là một thuật ngữ trong lập trình, đặc biệt phổ biến khi làm việc với JavaScript, để chỉ tình trạng khi có quá nhiều hàm callback lồng nhau, dẫn đến mã nguồn trở nên khó đọc, khó bảo trì và dễ gây lỗi.
1. Ví dụ về Callback Hell
Giả sử bạn cần thực hiện ba tác vụ bất đồng bộ liên tiếp, mỗi tác vụ phụ thuộc vào kết quả của tác vụ trước đó. Nếu dùng callback truyền thống, mã sẽ trông giống như thế này:
````
doTask1(function(result1) {
  doTask2(result1, function(result2) {
    doTask3(result2, function(result3) {
      console.log('Tất cả các tác vụ đã hoàn thành.');
    });
  });
});
````
- Khó đọc: Khi có nhiều callback lồng nhau, mã trở nên khó đọc, làm mất đi tính minh bạch của logic.
- Khó bảo trì: Việc thay đổi hoặc sửa chữa logic trong các callback lồng nhau trở nên phức tạp.
- Khả năng xảy ra lỗi cao hơn: Callback lồng nhau dễ dẫn đến việc bỏ sót lỗi hoặc tạo ra các lỗi không mong muốn.
### 2.2 Promise
- là một tính năng quan trọng trong JavaScript để xử lý các tác vụ bất đồng bộ (asynchronous operations) một cách hiệu quả và dễ đọc hơn. Nó giúp quản lý các thao tác như gọi API, đọc/ghi file, hoặc bất kỳ tác vụ nào mất thời gian mà không làm treo ứng dụng.
- Một Promise có thể ở trong một trong ba trạng thái:
  - Pending: Đang chờ xử lý (tác vụ chưa hoàn thành).
  - Fulfilled: Đã hoàn thành thành công (kết quả đã có).
  - Rejected: Đã thất bại (có lỗi xảy ra).
1. Cú pháp tạo một Promise
- Một Promise được tạo bằng cách sử dụng từ khóa new Promise() và truyền vào một hàm gọi là executor. Hàm này nhận hai đối số là resolve và reject. Hàm resolve() được gọi khi tác vụ hoàn thành thành công, trong khi reject() được gọi khi có lỗi.
````
const myPromise = new Promise((resolve, reject) => {
  // Giả sử một tác vụ bất đồng bộ
  let success = true;
  
  if (success) {
    resolve("Tác vụ hoàn thành thành công");
  } else {
    reject("Đã xảy ra lỗi");
  }
});
````
2. Sử dụng Promise
- Để xử lý kết quả của một Promise, bạn sử dụng phương thức 
  - .then() cho trường hợp fulfilled
  - .catch() cho trường hợp rejected
- Cả hai phương thức này đều trả về một Promise mới, cho phép bạn chuỗi nhiều tác vụ (Promise chaining).
````
myPromise
  .then((message) => {
    console.log(message); // Kết quả: "Tác vụ hoàn thành thành công"
  })
  .catch((error) => {
    console.log(error);   // Nếu xảy ra lỗi: "Đã xảy ra lỗi"
  });
````
3. Promise chaining (Chuỗi Promise)
- Promise cho phép bạn liên kết nhiều tác vụ bất đồng bộ một cách tuần tự mà không cần phải lồng callback như trong callback hell.
````
doTask1()
  .then((result1) => {
    console.log(result1);
    return doTask2(result1);
  })
  .then((result2) => {
    console.log(result2);
    return doTask3(result2);
  })
  .then((result3) => {
    console.log('Tất cả các tác vụ đã hoàn thành.');
  })
  .catch((error) => {
    console.error('Đã xảy ra lỗi: ', error);
  });
````
4. Các phương thức của Promise
- Promise.all(): Nhận vào một mảng Promise và chỉ tiếp tục khi tất cả các Promise trong mảng đều hoàn thành. Nếu bất kỳ Promise nào bị reject, thì toàn bộ sẽ bị reject.
````
Promise.all([task1(), task2(), task3()])
  .then((results) => {
    console.log(results);  // Kết quả của tất cả các Promise
  })
  .catch((error) => {
    console.error('Có một tác vụ bị lỗi:', error);
  });
````
- Promise.race(): Chạy một nhóm Promise và trả về kết quả của Promise hoàn thành đầu tiên (có thể là fulfilled hoặc rejected).
````
Promise.race([task1(), task2(), task3()])
  .then((result) => {
    console.log(result);  // Kết quả của Promise hoàn thành đầu tiên
  })
  .catch((error) => {
    console.error('Có một lỗi xảy ra:', error);
  });
````
- Promise giúp xử lý các tác vụ bất đồng bộ trong JavaScript một cách gọn gàng, tránh được hiện tượng callback hell và làm cho mã trở nên dễ đọc, dễ bảo trì hơn. Chúng cũng là nền tảng cho async/await, giúp bạn làm việc với mã bất đồng bộ theo cách gần giống với mã đồng bộ.
### 2.3 Tìm hiểu về Async, Await
- Async và Await là cú pháp được giới thiệu từ ECMAScript 2017 (ES8) để làm việc với các tác vụ bất đồng bộ một cách dễ dàng hơn, giúp viết mã trở nên đơn giản và trông giống như mã đồng bộ. Đây là một phần mở rộng của Promises, giúp loại bỏ nhu cầu phải sử dụng nhiều phương thức .then() hoặc callback lồng nhau.
1 Hàm Async
- Khi khai báo một hàm với từ khóa async, hàm đó sẽ luôn trả về một Promise, bất kể giá trị trả về bên trong là gì. Nếu một giá trị bình thường được trả về, nó sẽ tự động được bọc trong một Promise đã được giải quyết.
- Cú pháp:
````
async function exampleFunction() {
  return "Hello, world!";
}

exampleFunction().then(result => console.log(result));  // Kết quả: "Hello, world!"
````
- Trong ví dụ này, hàm exampleFunction() trả về một chuỗi, nhưng trên thực tế, nó trả về một Promise đã giải quyết với giá trị "Hello, world!".
2. Từ khóa await
- await chỉ có thể được sử dụng bên trong các hàm async. Nó được sử dụng để "chờ" một Promise được giải quyết. Khi sử dụng await, mã sẽ tạm dừng tại dòng đó cho đến khi Promise hoàn thành và sau đó tiếp tục thực thi.
- Cú pháp:
````
async function fetchData() {
  let result = await someAsyncTask();
  console.log(result);  // In ra kết quả sau khi Promise được giải quyết
}
````
- Ở đây, await someAsyncTask() sẽ dừng thực thi hàm fetchData() cho đến khi someAsyncTask() (một Promise) được giải quyết, rồi gán kết quả vào result và tiếp tục thực thi các lệnh sau đó.
- ví dụ:
````
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: "John" });
    }, 1000); // Giả lập một tác vụ mất 1 giây
  });
}

function getUserPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

async function showUserAndPosts() {
  try {
    const user = await getUser();
    console.log('User:', user);

    const posts = await getUserPosts(user.id);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

showUserAndPosts();
````
- Khi sử dụng async/await, bạn có thể dễ dàng xử lý lỗi bằng cách sử dụng khối try/catch, tương tự như khi làm việc với mã đồng bộ.
- Trong một vài tình huống, chúng ta cũng có thể bắt các lỗi khi đang thực hiện function async. Vì tất cả các hàm async đều trả về Promises, chúng ta chỉ cần gọi thêm hàm .catch(errorHandler), .then(successHandler) khi gọi chúng.
4. Chạy nhiều tác vụ bất đồng bộ song song với Promise.all()
- Nếu bạn có nhiều tác vụ bất đồng bộ độc lập, bạn có thể thực thi chúng song song (thay vì tuần tự) bằng cách sử dụng Promise.all() với async/await.
````
async function runParallelTasks() {
  const [task1Result, task2Result] = await Promise.all([task1(), task2()]);
  console.log(task1Result, task2Result);
}
````
- Promise.all() nhận vào một mảng các Promise và sẽ chỉ trả về kết quả sau khi tất cả các Promise trong mảng đã hoàn thành. Điều này giúp các tác vụ chạy song song thay vì tuần tự.