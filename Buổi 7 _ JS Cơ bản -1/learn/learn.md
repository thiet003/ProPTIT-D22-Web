# BUỔI 7. JAVA SCRIPT CƠ BẢN

## I. Khai báo dữ liệu
### 1. Cấu trúc trong JavaScript
#### 1. Định nghĩa:
1. JavaScript: Là 1 ngôn ngữ lập trình kịch bản dựa trên các đối tượng có sẵn, hoặc do lập trình viên tự định nghĩa
2. Lịch sử:
   1. Trước đây, JS sử dụng chủ yếu để nâng cao sự tương tác giữa người dùng với trang web (VD: popup, slider,...) hoặc xác thực dữ liệu các form.
   2. H đây, JS còn sử dụng rọng rãi trong phát triển ứng dụng, game trên điên thoại hay các ứng dụng dành cho server.
      1. Web App: ReactJS, VueJS, AngularJS,..
      2. Mobile APP: React Native
      3. Server APP: NodeJS, ExpressJS
      4. Graphic: two.js, three,js
      5. AI: brain.js
      6. Và còn nhiều lĩnh vực khác mà JS có thể làm đc
#### 2. Chèn JS
- C1: sử dụng trực tiệp các Attribute: 
  - <`button type="button" onclick="document.getElementById('hien-thi-thoi-gian-ra').innerHTML = Date()"> Nhấn vào để xem thời gian</>`
- C2: Chèn Internal:
  - Sử dụng cặp thẻ `<script></script>`
- C3: Chèn External:
  - `<script src="file.js"></script>`


### 2. Biến
1. Khai báo biến :
   1. Khai báo bằng toán tử var:
      1. `var tenBien = giatri`
      2. 1 số lưu ý:
         1. Tên biến có phân biệt chữ hoa, chữ thường
         2. Bắt đầu phải là chữ cái hoặc bằng kí tự '_'
   2. Khai báo biến tạm thời bằng let
      1. `let tenBien = giatri`
      2. Biến khai báo bằng let chỉ được sử dụng trong phạm vi khối được khai báo (khác với var, var có thể sử dụng ở ngoài phạm vi khai báo):
         1. ![alt text](image.png)
   3. Khai báo hẳng bằng const:
      1. `const tenHang = giatri`
      2. ![alt text](image-1.png)

### 3. Các loại toán tử

1. Toán tử số học:
   1. Là toán tử dùng để thực hiện các phép toán số học:
   2. Danh sách các toán tử số học:
      1. ![alt text](image-2.png)
   3. Lưu ý: toán tử ++, --:
      1. ++a là tăng trước rồi lấy giá trị sau
      2. a++ là lấy giá trị rồi mới tăng
2. Toán tử gán:
   1. Danh sách các toán tử gán :
      1. ![alt text](image-3.png)
3. Toán tử so sánh:
   1. Là toán tử 2 ngôi để so sánh giá trị của toán hạng với nhau.
   2. Danh sách toán tử:
      1. ![alt text](image-4.png)
   3. Toán tử `===` và `!==`: So sánh cả giá trị và kiểu dữ liệu
4. Toán tử logic:
   1. Danh sách toán tử: 
      1. `&&`
      2. `||`
      3. `!`


### 4. Kiểu dữ liệu:


#### 1. Kiểu dữ liệu nguyên thủy:

##### a. Boolean: 
##### b. Number:
##### c. String
- Note: Cách để nhập được dấu ' cho câu:
  - Sử dụng 1 dấu \ ở trước dấu ' (VD: ` 'PC \'s SonTran' `)
  - Sử dụng dấu để chứa xâu khác loại (VD: ` "PC \'s SonTran" `) 
##### e. undefined
- Biến mà không gán giá trị thì mặc đinh sẽ là undefined
##### f. null: Không có gì 
##### g: symbol: Khi khai báo, thì biến có tính độc nhất
- Dù có KDL, Giá trị thì vẫn là khác nhau.
##### h. VD:

#### 2. Kiểu dữ liệu phức tạp:

##### a. Function: 
- Code trong function chỉ chạy khi gọi đến nó.

##### b. Object:
- Lưu hầu hết các dạng dữ liệu trong JS.
- Object bao gồm: Các cặp key-value, khai báo cách nhau bằng dấu ',', key có thể là 1 function

##### c. Arr: 
- `Key` đc đánh tự động, tự tăng (0, 1 ,2, 3,...)


#### 3. Cách kiểm tra kiểu dữ liệu
- Sử dụng typeof



## II. Các đối tượng trong JavaScript(String, Number, Object,...)

### 1. Làm việc với String
#### a. Khai báo:
- Đặt biến, KDL String: ` var fullName = 'Son Tran'`
- Đặt biến, KDL Object: ` var fullName2 = new String('Son Tran')`

#### b. Các phương thức:

- 1.length
- 2.find index
- 3.slice
- 4.replace
- 5.upper-lower case
- 6.trim
- 7.split
- 8.charAt(id)


### 2. Làm việc với Number

#### b. Các phương thức:
- isFixed()
- isNaN(a)
- toString()


### 3. Làm việc với Object

#### a. Khai báo:
1. ![alt text](image-5.png)
2. Khai báo các cặp key-value:
   1. key: khai báo như tên biến. Nhưng nếu tên mà ta muốn đặt vi phạm quy tắc đặt tên: sử dụng dấu ` "" ` để khai báo key

#### b. Xuất:
1. ![alt text](image-7.png)
2. Lưu ý: Khi muốn xuất ra 1 key, mà key là 1 xâu: sử dụng : `obj['key']`

#### c. Xóa:
1. ![alt text](image-8.png)

#### d. THêm:
1. ![alt text](image-9.png)

#### e. Constructor: Kiểu kiểu constructor của Java
- Là 1 hàm giúp ta khởi tạo 1 Object như ta muốn. Các Object tạo từ hàm này có cùng các thuộc tính.
  
### 4.Date Object: Thời gian

1. Đối tượng Date:
   ```js
      var date = new Date(); //=> Sau khi tạo đối tượng này, ta có thể sử dụng các phương thức ở trong class Date để xử lý thời gian
      var date2 = Date()
   ```
2. Xuất:
   ```js
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
   ```



## III. Cấu trúc rẽ nhánh, toán tử 3 ngôi
- Hầu hết đều giống như C++.

## IV. Vòng lặp

## V. Làm việc với hàm

### 1. Định nghĩa:
- Hàm là 1 khối mã, để làm 1 công việc cụ thể.

### 2. 2 loại hàm:
1. Hàm built-in: Hàm đã được xây dựng sẵn, chỉ gọi ra dùng.
   1. Alert: Tạo ra 1 popup thông báo.
   2. Console
   3. Confirm
   4. prompt
   5. Set timeout
   6. Set interval
   7. VD:
      ```js
         var fullName = 'Son Tran'

         // 2. console: cái này nó sẽ thao tác trên console, giúp ta debug trong quá trình học
         console.log('Day la 1 dong log') // In ra 1 dòng log: Mở tab console là thấy dòng text này
         console.log(fullName)

         console.warn('Day la canh bao')
         console.error('Day la loi')

         // 3. confirm:
         //confirm('Xac Nhan bn du tuoi') // Tạo 1 hộp thoại xác nhận, bên trong nhập 1 message

         //4.prompt: cũng là 1 thông báo nhưng có thêm ô để điền
         //prompt('Xac Nhan bn du tuoi')

         // 5. Set timeout: sau 1 khoang thơi gian thì làm cái j đó(ở trong funtion) - 1 lần
         // setTimeout(function() {

         // }, time) // time là thời gian count

         // setTimeout(function() {
         //     alert('THongbao')
         // }, 3000)

         //6. setInterval: như setTime out nhưng nó lặp lại liên tục
         setInterval(function() {
            console.log('Test setInterval ' + Math.random())
         }, 3000)

         // Luu y:
            //1. Math.random(): tra vể 1 chuối random
      ```
2. Hàm tự định nghĩa:

### 3. Hàm tự định nghĩa:
1. Cú pháp:
   ```js
      function tenHam(tso1, tso2,...){
         //code
      }
      //GỌi hàm:
      tenHam(doiso1, doiso2)
   ```
2. Lưu ý:
   1. Nếu gọi trùng tên hàm khi ta gọi hàm thì việc gọi hàm này tính là chạy hàm cuối cùng.
   2. Nếu 1 biến đc đinh nghĩa ở trong hàm thì biến đó là local (KỂ CẢ BIẾN VAR)
   3. Nếu hàm A nằm trong hàm B thì cũng như trên
3. Đối tượng argument
   1. Chỉ dùng đc ở trong hàm. Nó là 1 mảng, chứa tất cả các đối số được truyền vào.
   2. Từ khóa return: Trả về giá trị cho hàm. (Có thể trả về Object luôn)
   3. ![alt text](image-10.png)4

### 4. Các cách viết hàm:
1. Hàm định nghĩa: (Declaration Function)
   1. Có tính hoisting(có thể gọi trước khi khai báo)
   2. cú pháp:
   3. ```js
         funtion tenHam(tso1, tso2){
            //Code
         }
      ```
2. Hàm Biểu thức: (Expression Function)
   1. Ko có tính hoisting(có thể gọi trước khi khai báo)
   2. cú pháp:
   3. ```js
         var tenHam = function(tso1, tso2){
            //Code
         }
      ```
3. Hàm mũi tên (Arrow Function)
   1. KO Có tính hoisting(có thể gọi trước khi khai báo)
   2. cú pháp:
   3. ```js
         var tenHam = (tso1, tso2) => {
            //Code
         }
      ```
   4. Lưu ý: Arrow Function ko có Arrgument, Để lấy các đối số đã truyền ở dạng 1 mảng thì ta sử dụng cú pháp spread :
      1. sử dụng từ khóa ... + 1tubatki thì argument lúc này là cái 1tubatki đó.
      2. ![alt text](image-7-1.png)






## VI. Callback

### 1. ĐN:
1. ĐN:
- Là 1 hàm truyền dưới dạng đối số của 1 hàm khác.
- Hàm callback có thể gọi ngay sau khi các chức năng khác kết thúc
2. ĐK: Là hàm khi đc truyền qua đối số khi gọi 1 hàm khác
   1. Là hàm
   2. Đc truyền qua đối số.
   3. Đc gọi lại trong hàm nhận đối số 

### 2. Promise:
- Để giải quyết vấn đề `CallBack Hell` (Muốn chơ1 hàm này phải chờ 1 hàm khác thực hiện và liên tục thế ....)
- Là 1 cách viêt hàm đơn giản hơn, mỗi hàm nằm trên 1 dòng.
1. Cú pháp: 
```js
   var promise = new Promise((resolve, reject) => {
      //resolve() // Nếu thành cồng thì sẽ chạy vào resolve
      // reject() // Nếu thất bại
   })
   promise
      .then((success1)) => {
         //Nếu thành công
         return x;
      }
      .then((success2)) => { //(success2) = x
         //Nếu thành công
         return y;
      }
      .then((success3)) => { //(success3) = y
         //Nếu thành công
         return z;
      }

      .catch(err){
         // Nếu thất bại chạy vô đây
      }
      .finally(){
         // Luôn chạy vô đây.
      }

```

### 3. Promise ALL.