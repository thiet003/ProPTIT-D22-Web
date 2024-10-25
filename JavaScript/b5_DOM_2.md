# Buổi 5: DOM part 2

## 1. DOM EVENTS
- là một phần của Document Object Model (DOM) cho phép bạn tương tác với người dùng thông qua các sự kiện (events) như nhấp chuột (click), gõ phím (keypress), di chuyển chuột (mousemove), và nhiều sự kiện khác. Các sự kiện này được kích hoạt khi người dùng hoặc trình duyệt thực hiện một hành động nào đó trên trang web, và chúng cho phép JavaScript xử lý các phản hồi tương ứng giúp tạo ra các trang web tương tác và động.
### 1.1 Các loại DOM Events phổ biến
1. Mouse Events: Các sự kiện liên quan đến chuột.

- click: Khi người dùng nhấp chuột vào một phần tử.
- dblclick: Khi người dùng nhấp đúp vào một phần tử.
- mousedown: Khi nút chuột được nhấn xuống.
- mouseup: Khi nút chuột được thả ra.
- mousemove: Khi con trỏ chuột di chuyển qua một phần tử.
- mouseover: Khi con trỏ chuột di chuyển vào một phần tử.
- mouseout: Khi con trỏ chuột di chuyển ra khỏi một phần tử.
2. Keyboard Events: Các sự kiện liên quan đến bàn phím.

- keydown: Khi một phím được nhấn xuống.
- keyup: Khi một phím được thả ra.
- keypress: Khi một phím được nhấn xuống và giữ.
3. Form Events: Các sự kiện liên quan đến biểu mẫu.

- submit: Khi một biểu mẫu được gửi đi.
- focus: Khi một phần tử (như ô nhập liệu) nhận được tiêu điểm.
- blur: Khi một phần tử mất tiêu điểm.
- change: Khi giá trị của một phần tử (như hộp chọn hoặc ô nhập liệu) thay đổi.
- input: Khi giá trị của một phần tử đầu vào thay đổi.
4. Document/Window Events: Các sự kiện liên quan đến tài liệu hoặc cửa sổ trình duyệt.

- load: Khi tài liệu hoặc hình ảnh đã tải xong.
- resize: Khi cửa sổ trình duyệt được thay đổi kích thước.
- scroll: Khi người dùng cuộn trang.
- unload: Khi tài liệu hoặc cửa sổ trình duyệt đóng lại.

### 1.2 Cách sử dụng DOM Events
1. Sử dụng thuộc tính HTML
>> \<button onclick="alert('Button clicked!')">Click me\</button>.

## 2. DOM Event Listener
- là một cơ chế trong JavaScript cho phép bạn "lắng nghe" và phản hồi lại các sự kiện (events) xảy ra trên các phần tử HTML trong Document Object Model (DOM). 
- là một hàm hoặc đối tượng JavaScript sẽ được gọi khi sự kiện cụ thể mà nó đang "lắng nghe" được kích hoạt (triggered).
### 2.1 Cú pháp addEventListener
>> element.addEventListener(event, function, useCapture);
- element: Phần tử DOM mà bạn muốn gắn sự kiện.
- event: Tên của sự kiện mà bạn muốn lắng nghe (ví dụ: "click", "keydown", "mouseover", v.v.).
- function: Hàm xử lý sự kiện sẽ được gọi khi sự kiện xảy ra.
- useCapture (tùy chọn): Một boolean chỉ định liệu sự kiện có được xử lý trong giai đoạn nắm bắt (capture phase) hay không. Giá trị mặc định là false (nghĩa là sự kiện sẽ được xử lý trong giai đoạn nổi bọt - bubble phase).

````
// Chọn phần tử nút
const button = document.querySelector('button');

// Thêm một listener cho sự kiện click
button.addEventListener('click', function() {
  alert('Button was clicked!');
});

````
- Sử dụng thuộc tính on\<Event>
````
const button = document.querySelector('button');

// Gắn sự kiện click vào nút
button.onclick = function() {
  alert('Button clicked!');
};

````
### 2.2 Gỡ bỏ Event Listener
- sử dụng phương thức removeEventListener. Bạn phải chỉ định cùng một hàm và tên sự kiện đã được sử dụng khi thêm Event Listener.
````
// Hàm xử lý sự kiện
function handleClick() {
  alert('Button clicked!');
}

// Thêm Event Listener
button.addEventListener('click', handleClick);

// Gỡ bỏ Event Listener
button.removeEventListener('click', handleClick);
````
### 2.3 Sự khác biệt giữa addEventListener và các phương pháp khác
- addEventListener vs onclick:
  - Sử dụng addEventListener cho phép thêm nhiều trình xử lý sự kiện vào cùng một phần tử và sự kiện mà không ghi đè lẫn nhau.
  - Sử dụng thuộc tính sự kiện như onclick chỉ cho phép một trình xử lý sự kiện duy nhất tại một thời điểm. Nếu bạn gán một hàm mới cho onclick, nó sẽ ghi đè hàm cũ.
````
// Cách này chỉ giữ lại một hàm xử lý sự kiện
button.onclick = function() {
  alert('First handler');
};
button.onclick = function() {
  alert('Second handler');
}; // Sẽ ghi đè lên handler đầu tiên

// Cách này cho phép cả hai handler cùng hoạt động
button.addEventListener('click', function() {
  alert('First handler');
});
button.addEventListener('click', function() {
  alert('Second handler');
});
````

## 3. InnerText, textContent, InnerHTML
- là ba thuộc tính của các phần tử DOM trong JavaScript, được sử dụng để truy cập và thay đổi nội dung văn bản hoặc HTML của một phần tử HTML. Mỗi thuộc tính có một số đặc điểm và ứng dụng riêng biệt.
### 3.1 InnerText
- là một thuộc tính cho phép bạn lấy hoặc thiết lập nội dung văn bản hiển thị của một phần tử HTML, bao gồm cả khoảng trắng và định dạng, nhưng bỏ qua các thẻ HTML.
- innerText chỉ trả về văn bản hiển thị mà người dùng có thể nhìn thấy trên trang. Nó sẽ bỏ qua các phần tử HTML có CSS display: none; hoặc visibility: hidden;.
- Khi bạn thiết lập innerText, nó sẽ dẫn đến việc trình duyệt phân tích lại các phần tử DOM để tính toán lại CSS.
````
<div id="example">
  Hello <span style="display: none;">World</span>
</div>
<script>
  const element = document.getElementById('example');
  console.log(element.innerText); // Kết quả: "Hello"
</script>
````
- Trong ví dụ này, văn bản của phần tử /<span> không hiển thị, vì vậy innerText chỉ trả về "Hello".

- Ưu điểm của innerText:
  - Chỉ lấy văn bản hiển thị, bỏ qua nội dung không hiển thị.
  - Tự động cập nhật khi nội dung hiển thị thay đổi do CSS.
- Nhược điểm của innerText:
  - Có thể chậm hơn textContent vì nó kích hoạt việc tính toán lại kiểu dáng (reflow) và vẽ lại (repaint).
### 3.2 textContent
- là một thuộc tính cho phép bạn lấy hoặc thiết lập nội dung văn bản của một phần tử, bao gồm tất cả các văn bản con bên trong nó. Nó sẽ bao gồm cả nội dung văn bản kể cả các phần tử con bị ẩn, nó bỏ qua tất cả các thẻ HTML.
- textContent trả về tất cả văn bản trong phần tử, bao gồm cả văn bản ẩn do CSS.
- Khi bạn thiết lập textContent, nó sẽ thay thế tất cả nội dung của phần tử với văn bản mới.
````
<div id="example">
  Hello <span style="display: none;">World</span>
</div>
<script>
  const element = document.getElementById('example');
  console.log(element.textContent); // Kết quả: "Hello World"
</script>
````
- Trong ví dụ này, textContent trả về cả "Hello" và "World", mặc dù phần tử \<span> đang bị ẩn.

- Ưu điểm của textContent:
  - Nhanh hơn innerText vì nó không kích hoạt việc tính toán lại kiểu dáng và vẽ lại.
  - Đơn giản hơn nếu bạn chỉ cần làm việc với văn bản và không quan tâm đến việc hiển thị.
- Nhược điểm của textContent:
  - Bao gồm tất cả văn bản, kể cả những phần tử ẩn hoặc không hiển thị.
### 3.3 innerHTML
-  là một thuộc tính cho phép bạn lấy hoặc thiết lập nội dung HTML bên trong của một phần tử. Nó trả về toàn bộ nội dung HTML, bao gồm cả các thẻ HTML con.
- Khi sử dụng innerHTML để thiết lập nội dung, tất cả nội dung hiện tại của phần tử sẽ bị thay thế và tất cả các phần tử con sẽ bị phá hủy.
- innerHTML có thể bao gồm cả mã HTML, không chỉ văn bản đơn thuần. Điều này có nghĩa là bạn có thể thêm hoặc thay đổi cấu trúc HTML của một phần tử.

````
<div id="example">
  Hello <span style="display: none;">World</span>
</div>
<script>
  const element = document.getElementById('example');
  console.log(element.innerHTML); // Kết quả: "Hello <span style="display: none;">World</span>"
</script>
````
- Ưu điểm của innerHTML:
  - Rất mạnh mẽ vì cho phép truy cập và thay đổi toàn bộ cấu trúc HTML.
Hữu ích cho việc chèn mã HTML động vào trang.
- Nhược điểm của innerHTML:
  - Có thể dễ dàng dẫn đến các lỗ hổng bảo mật như Cross-Site Scripting (XSS) nếu không cẩn thận với dữ liệu đầu vào.
  - Chậm hơn khi thao tác trên các phần tử DOM lớn vì nó phá hủy và tạo lại tất cả các phần tử con mỗi khi được thiết lập lại.

## 4. PreventDefault & StopPropagation
- là hai phương thức quan trọng của đối tượng sự kiện (event object) trong JavaScript, được sử dụng để kiểm soát hành vi của sự kiện và cách sự kiện lan truyền trong Document Object Model (DOM).
### 4.1 PreventDefault()
- preventDefault() là một phương thức của đối tượng sự kiện trong JavaScript, được sử dụng để ngăn chặn hành vi mặc định của sự kiện.
- Khi một sự kiện xảy ra, trình duyệt thường thực hiện một số hành vi mặc định, như chuyển hướng khi nhấp vào một liên kết, gửi biểu mẫu khi nhấp vào nút "Submit", cuộn trang khi nhấn phím mũi tên, v.v.
- Sử dụng preventDefault() sẽ ngăn chặn hành vi mặc định này mà không ngăn sự kiện lan truyền (bubbling) hay bắt (capturing).
````
<a href="https://www.example.com" id="myLink">Click me</a>

<script>
  const link = document.getElementById('myLink');

  // Thêm sự kiện click vào liên kết
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn không cho liên kết chuyển hướng
    console.log('Link clicked, but default action prevented.');
  });
</script>
````
### 4.2 stopPropagation()
-  là một phương thức của đối tượng sự kiện, được sử dụng để ngăn chặn sự kiện tiếp tục lan truyền (propagate) từ phần tử hiện tại lên các phần tử cha trong DOM.
- Có hai giai đoạn trong sự lan truyền sự kiện:
  - Giai đoạn nắm bắt (capturing phase): Sự kiện được phát từ gốc của tài liệu đến phần tử đích.
  - Giai đoạn nổi bọt (bubbling phase): Sau khi sự kiện đến phần tử đích, nó sẽ bắt đầu nổi bọt lên thông qua các phần tử cha cho đến khi đến gốc của tài liệu.
- stopPropagation() sẽ ngăn sự kiện tiếp tục lan truyền trong cả hai giai đoạn này.
````
<div id="parent">
  Parent Div
  <button id="childButton">Click me</button>
</div>

<script>
  const parentDiv = document.getElementById('parent');
  const childButton = document.getElementById('childButton');

  // Thêm sự kiện click vào phần tử cha
  parentDiv.addEventListener('click', function() {
    console.log('Parent Div clicked');
  });

  // Thêm sự kiện click vào nút con
  childButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Ngăn không cho sự kiện lan truyền lên phần tử cha
    console.log('Child Button clicked');
  });
</script>
````
- Trong ví dụ này, khi bạn nhấp vào nút con, chỉ thông báo "Child Button clicked" sẽ được ghi ra console. Sự kiện sẽ không lan truyền lên phần tử cha (parentDiv), vì stopPropagation() đã được gọi.

## 5. DOM Nodes
- Một Node là một đối tượng cơ bản trong DOM có thể là bất kỳ loại dữ liệu nào như phần tử, văn bản, thuộc tính, nhận xét, tài liệu, hoặc phần tử tài liệu.
- Các Node này được sắp xếp theo cấu trúc cây, nơi mỗi Node có thể có một Node cha (parent node) và các Node con (child nodes). Cây DOM bắt đầu từ một Node gốc gọi là Document Node.
### 5.1 Các loại DOM Nodes chính

1. Element Node:

Đại diện cho các phần tử HTML hoặc XML (ví dụ: \<div>, \<p>, \<span>, \<a>, v.v.).
Có thể có Node con và có thể là Node cha của các Node khác.
Có các thuộc tính như id, class, src, href, v.v.
Ví dụ:
\<div id="myDiv">Hello, world!\</div>
Trong DOM, thẻ <div> là một Element Node.

2. Text Node:

Đại diện cho nội dung văn bản của các phần tử.
Luôn là Node con của Element Node và không thể chứa các Node con khác.
Ví dụ:
>> \<p>Hello, world!\</p>
3. Attribute Node
4. Comment Node:
5. Document Node:
6. DocumentType Node:
7. DocumentFragment Node:
### 5.2 Cấu trúc của một DOM Tree
- DOM tổ chức các Nodes dưới dạng một cấu trúc cây. Trong cây DOM:

- Root Node (Node gốc): Là Document Node, đại diện cho toàn bộ tài liệu.
- Parent Node (Node cha): Một Node có thể có các Node con và được gọi là Node cha.
- Child Node (Node con): Các Node nằm dưới một Node cha gọi là Node con.
- Sibling Nodes (Node anh chị em): Các Nodes cùng cấp có cùng Node cha gọi là Node anh chị em.

Ví dụ về cấu trúc DOM Tree:
````
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div>
      <p>Hello, World!</p>
    </div>
  </body>
</html>
````
- Cấu trúc DOM Tree sẽ trông như thế này:
````
Document
└── html (Element Node)
    ├── head (Element Node)
    │   └── title (Element Node)
    │       └── Text Node: "Example"
    └── body (Element Node)
        └── div (Element Node)
            └── p (Element Node)
                └── Text Node: "Hello, World!"
````