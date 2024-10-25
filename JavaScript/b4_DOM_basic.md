# Buổi 4: DOM cơ bản
![](https://topdev.vn/blog/wp-content/uploads/2021/01/dom-la-gi.gif)

- DOM (Document Object Model) là một khái niệm cơ bản trong phát triển web, đặc biệt là khi làm việc với HTML và JavaScript. DOM là một mô hình tiêu chuẩn được W3C (World Wide Web Consortium) đưa ra, dùng để truy xuất, thao tác trên các tài liệu cấu trúc  dạng HTML hoặc XML dưới dạng cây, nơi mà mỗi phần tử của tài liệu là một nút (node) trong cây này.
- Trong mỗi thẻ HTML sẽ có những thuộc tính (Properties) và có phân cấp cha – con với các thẻ HTML khác. Sự phân cấp và các thuộc tính của thẻ HTML này ta gọi là selector và trong DOM sẽ có nhiệm vụ xử lý các vấn đề như đổi thuộc tính của thẻ, đổi cấu trúc HTML của thẻ.
- Có thể thấy tất cả các thẻ HTML sẽ được quản lý trong đối tượng document. Thẻ cao nhất là thẻ html, tiếp theo là phân nhánh body và head. Bên trong head thì có những thẻ như style, title,… và bên trong body thì là vô số các thẻ HTML khác. Như vậy trong Javascript, để thao tác với các thẻ HTML ta phải thông qua đối tượng document.
- Nhiệm vụ của DOM Javascript là gì?
  - Cho phép truy xuất đến các thẻ html.
  - Thay đổi các thuộc tính của thẻ html
  - Thay đổi css của các thẻ html
  - Tạo, xóa, thêm các thẻ html


- Cấu trúc của DOM
  - Document: Đây là gốc của cây DOM, đại diện cho toàn bộ tài liệu HTML hoặc XML.
  - Element: Mỗi thẻ HTML  được biểu diễn như \<a>, \<p> một phần tử (element) trong DOM.
  - Attribute: Các thuộc tính của thẻ HTML (như id, class, src, v.v.) được biểu diễn như các nút thuộc tính.
  - Text: Nội dung văn bản bên trong các thẻ HTML được biểu diễn dưới dạng các nút văn bản.
- Một số khái niệm DOM cơ bản
  - Node: Là đơn vị cơ bản của DOM, bao gồm các loại node khác nhau như element node, text node, attribute node, comment node.
  - Parent, Child, and Sibling: Quan hệ giữa các phần tử trong DOM, nơi một phần tử có thể là cha (parent), con (child), hoặc anh/chị/em (sibling) với các phần tử khác.

## 1. HTML DOM
- đây là nhóm DOM dùng để thay đổi nội dung thẻ HTML, cũng như thay đổi các thuộc tính của thẻ HTML.
- Khi làm việc với Javascript thì việc lấy nội dung bên trong của một thẻ HTML là rất thường xuyên, và đôi khi bạn cũng cần gán nội dung vào các thẻ HTML để tạo các thông báo đến người dùng.

### 1.2 Thay đổi thuộc tính thẻ html
>> document.getElementById("element").attributeName = "new value";

Để lấy giá trị của thuộc tính HTML ta sử dụng cú pháp sau:
>> document.getElementById("element").attributeName;
### 1.2 Các phương thức và thuộc tính DOM cơ bản
1. Truy cập Phần tử
document.getElementById(id): Trả về phần tử có id được chỉ định.
document.querySelector("selecter")
>> const element = document.getElementById("myElement");
document.getElementsByClassName(className): Trả về một danh sách các phần tử có class được chỉ định.

>> const elements=document.getElementsByClassName("myClass");

document.getElementsByTagName(tagName): Trả về một danh sách các phần tử có tên thẻ được chỉ định.

>> const divs = document.getElementsByTagName("div");

document.querySelector(selector): Trả về phần tử đầu tiên phù hợp với bộ chọn CSS.

>> const firstDiv = document.querySelector("div");

document.querySelectorAll(selector): Trả về tất cả các phần tử phù hợp với bộ chọn CSS.

>> const allDivs = document.querySelectorAll("div");

2. Thao tác Phần tử

element.setAttribute(attributeName, value): Thêm hoặc thay đổi giá trị của một thuộc tính.

>> element.setAttribute("class", "newClass");

element.getAttribute(attributeName): Lấy giá trị của một thuộc tính.

>> const className = element.getAttribute("class");

element.removeAttribute(attributeName): Xóa một thuộc tính khỏi phần tử.

>> element.removeAttribute("class");
3. Thêm và Xóa Phần tử
document.createElement(tagName): Tạo một phần tử mới.

>> const newDiv = document.createElement("div");

parentNode.appendChild(newNode): Thêm một phần tử con vào cuối danh sách con của một phần tử cha.

>> document.body.appendChild(newDiv);

parentNode.insertBefore(newNode, referenceNode): Chèn một phần tử mới vào trước một phần tử tham chiếu.

>> document.body.insertBefore(newDiv, document.body.firstChild);

parentNode.removeChild(childNode): Xóa một phần tử con từ DOM.

>> document.body.removeChild(newDiv);

## 2. DOM API
- DOM API (Document Object Model Application Programming Interface) là một phần quan trọng trong lập trình web, cung cấp một giao diện tiêu chuẩn cho việc thao tác với tài liệu HTML và XML. Nó định nghĩa các phương thức, thuộc tính và đối tượng cho phép JavaScript hoặc các ngôn ngữ lập trình khác tương tác với trang web.
### 2.1  Các phần chính của DOM API
- DOM API có thể được chia thành ba phần chính:
  - Core DOM: Giao diện cơ bản để thao tác với bất kỳ tài liệu nào (HTML, XML, v.v.).
  - HTML DOM: Giao diện mở rộng của Core DOM, cung cấp các phương thức và thuộc tính để thao tác với tài liệu HTML.
  - XML DOM: Giao diện mở rộng của Core DOM, được thiết kế đặc biệt cho việc xử lý tài liệu XML.
### 2.2  Các đối tượng chính của DOM API
- DOM API cung cấp nhiều đối tượng và giao diện để tương tác với tài liệu HTML và XML. Dưới đây là một số đối tượng quan trọng trong DOM API:
- Document: Đối tượng gốc đại diện cho toàn bộ tài liệu HTML hoặc XML. Đây là điểm truy cập chính để bắt đầu tương tác với cây DOM.

  - const doc = document; // Truy cập đối tượng tài liệu
- Element: Đại diện cho một phần tử HTML hoặc XML. Đối tượng này cung cấp nhiều phương thức và thuộc tính để thao tác với các phần tử trong tài liệu.

  - const element = document.getElementById("myElement");

- Node: Là một giao diện cơ bản từ đó các đối tượng khác kế thừa, như Element, Text, Comment, v.v. Mỗi phần tử trong tài liệu HTML hoặc XML đều là một Node.

  - const node = document.createElement("div"); // Tạo một node mới

- NodeList: Đại diện cho một danh sách các node, như kết quả của querySelectorAll hoặc getElementsByClassName.

>> const nodes = document.querySelectorAll("div");

- HTMLCollection: Tương tự như NodeList, nhưng chỉ chứa các phần tử HTML và thường được trả về bởi các phương thức như getElementsByTagName hoặc getElementsByClassName.

>> const elements = document.getElementsByClassName("myClass");
### 2.3 Các phương thức chính của DOM API
- DOM API cung cấp nhiều phương thức để thao tác với tài liệu HTML và XML:
1. Thao tác Phần tử
- element.appendChild(newNode): Thêm một phần tử con vào cuối danh sách con của một phần tử cha.

>> document.body.appendChild(newDiv);

element.removeChild(childNode): Xóa một phần tử con khỏi cây DOM.

>> document.body.removeChild(newDiv);

element.replaceChild(newNode, oldNode): Thay thế một phần tử con bằng một phần tử khác.

>>  document.body.replaceChild(newDiv, oldDiv);

element.cloneNode(deep): Tạo một bản sao của một phần tử. Nếu deep là true, tất cả các phần tử con cũng sẽ được sao chép.

>> const clonedElement = element.cloneNode(true);
2. Thao tác Thuộc tính và Nội dung
element.setAttribute(attributeName, value): Thêm hoặc thay đổi giá trị của một thuộc tính.

>> element.setAttribute("class", "newClass");

element.getAttribute(attributeName): Lấy giá trị của một thuộc tính.
>> const className = element.getAttribute("class");

element.removeAttribute(attributeName): Xóa một thuộc tính khỏi phần tử.
>> element.removeAttribute("class");

## 3. DOM Document Object
- Đối tượng document là một phần của DOM (Document Object Model) mà các trình duyệt cung cấp để cho phép các nhà phát triển web tương tác với nội dung của trang web. Nó đại diện cho toàn bộ tài liệu HTML hoặc XML được tải vào trình duyệt và cung cấp các phương thức và thuộc tính để:
  - Truy cập và thao tác với các phần tử HTML.
  - Thêm, xóa, hoặc thay đổi các phần tử và nội dung của chúng.
  - Quản lý sự kiện trên trang.
  - Truy cập các siêu dữ liệu của tài liệu như tiêu đề (title), URL, domain, cookie, v.v.
### 3.1 Các thuộc tính của đối tượng document
Dưới đây là một số thuộc tính quan trọng của đối tượng document:

- document.URL: Trả về URL của tài liệu hiện tại.
console.log(document.URL); // Ví dụ: "https://www.example.com"

- document.title: Trả về hoặc đặt tiêu đề của tài liệu HTML.

console.log(document.title); // Lấy tiêu đề
- document.title = "New Title"; // Đặt tiêu đề mới

- document.domain: Trả về tên miền của tài liệu.
console.log(document.domain); // Ví dụ: "example.com"

- document.referrer: Trả về URL của tài liệu giới thiệu (trang đã dẫn đến trang hiện tại).
console.log(document.referrer);
- document.body: Trả về phần tử <body> của tài liệu.
console.log(document.body); // Truy cập nội dung của body


- document.head: Trả về phần tử <head> của tài liệu.

console.log(document.head); // Truy cập nội dung của head


- document.documentElement: Trả về phần tử gốc của tài liệu (thường là phần tử \<html>).
console.log(document.documentElement); // Truy cập phần tử \<html>

- document.doctype: Trả về đối tượng DocumentType đại diện cho định nghĩa kiểu tài liệu (DOCTYPE) của tài liệu.
console.log(document.doctype); // Truy cập DOCTYPE
### 3.2  Các phương thức của đối tượng document

1. Tạo và thao tác phần tử
- document.createElement(tagName): Tạo một phần tử HTML mới với tên thẻ được chỉ định.

  - const newDiv = document.createElement("div");

- document.createTextNode(text): Tạo một nút văn bản mới chứa nội dung văn bản được chỉ định.

  - const textNode = document.createTextNode("Hello, World!");

- document.write(content): Ghi nội dung HTML trực tiếp vào tài liệu. Phương thức này thường được tránh sử dụng sau khi tài liệu đã được tải hoàn tất vì nó sẽ ghi đè nội dung hiện tại.

- document.write("<p>This is written using document.write()</p>");

- document.close(): Đóng luồng đầu ra của tài liệu hiện tại. Phương thức này thường được sử dụng cùng với document.write().


## 4. DOM Attribute
- DOM Attributes là các đặc tính mà các phần tử HTML có thể có. Ví dụ, thẻ \<input> có thể có các thuộc tính như type, value, placeholder, id, class, và nhiều thuộc tính khác. Mỗi thuộc tính đều có một tên và một giá trị tương ứng.
### 4.1 Cách sử dụng DOM Attributes trong JavaScript
- Trong JavaScript, chúng ta có thể sử dụng các phương thức để lấy, thiết lập, thêm hoặc xóa các thuộc tính DOM.
1. Lấy giá trị của thuộc tính
element.getAttribute(attributeName): Phương thức này trả về giá trị của thuộc tính được chỉ định. Nếu thuộc tính không tồn tại, nó trả về null.
- const inputElement = document.querySelector('input');

- const type = inputElement.getAttribute('type');
>> console.log(type); // Có thể trả về 'text', 'password', v.v.
2. Thiết lập giá trị cho thuộc tính
- element.setAttribute(attributeName, value): Phương thức này được sử dụng để thiết lập giá trị cho một thuộc tính. Nếu thuộc tính chưa tồn tại, nó sẽ được tạo mới.

  - const inputElement = document.querySelector('input');
- inputElement.setAttribute('type', 'password');

3. Xóa thuộc tính
- element.removeAttribute(attributeName): Phương thức này xóa thuộc tính được chỉ định khỏi phần tử.
  - inputElement.removeAttribute('placeholder');


## 5. DOM CSS
- liên quan đến việc sử dụng JavaScript để thay đổi hoặc truy cập các thuộc tính CSS (Cascading Style Sheets) của các phần tử trong tài liệu HTML. Bằng cách sử dụng DOM, bạn có thể thao tác với các kiểu dáng (styles) của các phần tử HTML một cách linh hoạt, cho phép bạn thay đổi bố cục, màu sắc, kích thước, và các hiệu ứng động mà không cần phải thay đổi mã CSS trực tiếp.
### 5.1 Truy cập và thay đổi CSS với JavaScript
1. Thuộc tính style
element.style: Thuộc tính style trong JavaScript cho phép bạn thiết lập hoặc lấy giá trị của các thuộc tính CSS nội tuyến (inline styles) của một phần tử.
 // Lấy phần tử bằng ID 
- const element = document.getElementById('myElement');
 // Thay đổi màu nền 
- element.style.backgroundColor = 'blue'; 
// Thay đổi chiều rộng 
- element.style.width = '200px'; 
// Lấy giá trị của một thuộc tính 
- console.log(element.style.backgroundColor); // "blue"
- Lưu ý rằng thuộc tính style chỉ có thể lấy hoặc thiết lập các thuộc tính CSS đã được khai báo trực tiếp trên phần tử như một kiểu nội tuyến. Nó không thể truy cập các kiểu được định nghĩa trong các tệp CSS bên ngoài hoặc trong phần \<style> của tài liệu.

2. Sử dụng lớp CSS (CSS Classes)
- element.className: Được sử dụng để lấy hoặc thiết lập giá trị của thuộc tính class của phần tử. Điều này sẽ thay đổi tất cả các lớp CSS của phần tử.
- element.classList: Cung cấp các phương thức để thao tác với danh sách các lớp CSS trên phần tử, như add(), remove(), toggle(), và contains().
```
const element = document.getElementById('myElement');

// Thêm một lớp CSS mới
element.classList.add('new-class');

// Xóa một lớp CSS
element.classList.remove('old-class');

// Kiểm tra xem một lớp có tồn tại không
if (element.classList.contains('active')) {
  console.log('Phần tử đang ở trạng thái active');
}

// Thay đổi giá trị của thuộc tính class
element.className = 'another-class';

````
### 5.2 Sử dụng JavaScript để tạo và thêm CSS vào tài liệu
Ngoài việc thay đổi các thuộc tính CSS hiện có, bạn cũng có thể sử dụng JavaScript để tạo và thêm các quy tắc CSS mới vào tài liệu.
Ví dụ:

// Tạo một phần tử \<style> mới
const style = document.createElement('style');
````
// Thêm nội dung CSS vào phần tử <style>
style.innerHTML = `
  .new-class {
    color: red;
    font-size: 20px;
  }
`;
````
// Thêm phần tử \<style> vào \<head>
document.head.appendChild(style);

### 5.3 Thao tác với các thuộc tính CSS thông qua JavaScript
Một số thuộc tính CSS được sử dụng phổ biến và cách thao tác chúng:
1. Hiệu ứng ẩn/hiện:

const element = document.getElementById('myElement');
element.style.display = 'none'; // Ẩn phần tử
element.style.display = 'block'; // Hiện phần tử


2. Thay đổi kích thước và vị trí:

const element = document.getElementById('myElement');
element.style.width = '100px';
element.style.height = '100px';
element.style.position = 'absolute';
element.style.top = '50px';
element.style.left = '50px';
### 5.4 Lưu ý khi sử dụng DOM CSS
Hiệu suất: Truy cập và thao tác với CSS qua JavaScript có thể làm giảm hiệu suất của trang nếu không được thực hiện cẩn thận, đặc biệt là khi thao tác với nhiều phần tử hoặc thay đổi các thuộc tính nhiều lần trong một vòng lặp.
Sự khác biệt giữa trình duyệt: Một số thuộc tính CSS có thể hoạt động khác nhau tùy theo trình duyệt, do đó cần kiểm tra và thử nghiệm trên nhiều trình duyệt khác nhau để đảm bảo tính tương thích.

## DOM

### 1. Thuộc tính:
- id: Định danh – là duy nhất cho mỗi phần tử nên thường được dùng để truy xuất DOM trực tiếp và nhanh chóng.
- className: Tên lớp – Cũng dùng để truy xuất trực tiếp như id, nhưng 1 className có thể dùng cho nhiều phần tử.
- tagName: Tên thẻ HTML.
- innerHTML: Trả về mã HTML bên trong phần tử hiện tại. Đoạn mã HTML này là chuỗi kí tự chứa tất cả phần tử bên trong, bao gồm các node phần tử và node văn bản.
- outerHTML: Trả về mã HTML của phần tử hiện tại. Nói cách khác, outerHTML = tagName + innerHTML.
- textContent: Trả về 1 chuỗi kí tự chứa nội dung của tất cả node văn bản bên trong phần tử hiện tại.
- attributes: Tập các thuộc tính như id, name, class, href, title…
- style: Tập các định dạng của phần tử hiện tại
- value: Lấy giá trị của thành phần được chọn thành một biến.
2. Phương thức:
- getElementById(id): Tham chiếu đến 1 node duy nhất có thuộc tính id giống với id cần tìm.
- getElementsByTagName(tagname): Tham chiếu đến tất cả các node có thuộc tính tagName giống với tên thẻ cần tìm, hay hiểu đơn giản hơn là tìm tất cả các phần tử DOM mang thẻ HTML cùng loại. Nếu muốn truy xuất đến toàn bộ thẻ trong tài liệu HTML thì hãy sử dụng document.getElementsByTagName('*').
- getElementsByName(name): Tham chiếu đến tất cả các node có thuộc tính name cần tìm.
- getAttribute(attributeName): Lấy giá trị của thuộc tính.
setAttribute(attributeName, value): Sửa giá trị của thuộc tính.
- appendChild(node): Thêm 1 node con vào node hiện tại.
- removeChild(node): Xóa 1 node con khỏi node hiện tại.












