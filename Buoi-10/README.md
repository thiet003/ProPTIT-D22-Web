# [BUỔI 10] DOM CƠ BẢN

## DOM là gì ?

\- DOM (Document Object Model) là một chuẩn được định nghĩa bới W3C được dùng để truy xuất và thao tác trên các tài liệu có cấu trúc dàng HTML hay XML bằng các ngôn ngữ lập trình thông dụng như Javascript, PHP…

![Alt text!](src/dom-la-gi.gif)

\- Trong mỗi thẻ HTML sẽ có những thuộc tính (Properties) và có phân cấp cha – con với các thẻ HTML khác. Sự phân cấp và các thuộc tính của thẻ HTML này ta gọi là selector và trong DOM sẽ có nhiệm vụ xử lý các vấn đề như đổi thuộc tính của thẻ, đổi cấu trúc HTML của thẻ.

## Cấu trúc của DOM:

\- DOM biểu diễn tài liệu HTML hoặc XML dưới dạng cây cấu trúc (tree structure), trong đó:

- Document: Đại diện cho toàn bộ tài liệu, là gốc của cây DOM.

- Element: Đại diện cho các phần tử HTML (ví dụ: `<div>`, `<p>`, `<a>`), và mỗi phần tử này là một nút (node) trong cây DOM.

- Text Node: Đại diện cho văn bản bên trong các phần tử HTML.

- Attribute: Đại diện cho các thuộc tính của phần tử HTML (ví dụ: `class`, `id`, `href`).

- Comment: Đại diện cho các chú thích (comments) trong HTML.

> **HTML DOM**

\- HTML DOM giúp thao tác dữ liệu theo mô hình hướng đối tượng. Các phần tử bên trong 1 tài liệu có cấu trúc được định nghĩa thành các đối tượng, phương thức và thuộc tính để có thể truy xuất dễ dàng mà vẫn đảm bảo tính cấu trúc.

\- Mỗi phần tử là một đối tượng, sở hữu các thuộc tính và các phương thức để làm việc với các thuộc tính đó như thêm, xóa, sửa, cập nhật. Bên cạnh đó, bạn cũng có thể thêm bớt các phần tử tùy thích, giúp cho nội dung và cấu trúc của trang web luôn cập nhật động. Nó định nghĩa sau đây:

- HTML elements như là objects

- properties của tất cả HTML elements

- methods để truy cập đến tất cả HTML elements

- events cho tất cả HTML elements

> **DOM API**: 

\-  là tập hợp các phương thức và thuộc tính để tương tác với HTML DOM, cho phép thao tác tài liệu HTML thông qua các lệnh JavaScript.

> **DOM Attribute**

\- là phần của DOM API liên quan đến việc truy cập và thay đổi các thuộc tính của phần tử HTML.

> **DOM CSS**

\- là phần của DOM API cho phép truy cập và thay đổi kiểu dáng CSS của các phần tử HTML.




> **1. Truy Cập và Chọn Phần Tử (Accessing and Selecting Elements)**

- document.getElementById(id): Lấy phần tử có id được chỉ định.

- document.getElementsByClassName(className): Lấy tất cả các phần tử có class được chỉ định. Trả về một danh sách các phần tử (HTMLCollection).

- document.getElementsByTagName(tagName): Lấy tất cả các phần tử có thẻ (tag) được chỉ định. Trả về một HTMLCollection.

- document.querySelector(selector): Lấy phần tử đầu tiên phù hợp với bộ chọn CSS (CSS selector) được chỉ định.

- document.querySelectorAll(selector): Lấy tất cả các phần tử phù hợp với bộ chọn CSS (CSS selector) được chỉ định. Trả về một NodeList.

> **2. Thao Tác với Nội Dung Phần Tử (Manipulating Element Content)**

- element.innerHTML: Truy cập hoặc thay đổi nội dung HTML của một phần tử.

- element.textContent: Truy cập hoặc thay đổi nội dung văn bản của một phần tử (bỏ qua bất kỳ thẻ HTML nào).

- element.innerText: Truy cập hoặc thay đổi văn bản hiển thị của một phần tử, bao gồm cả định dạng.

> **3. Thao Tác với Thuộc Tính Phần Tử (Manipulating Element Attributes)**

- element.getAttribute(attributeName): Lấy giá trị của thuộc tính được chỉ định.

- element.setAttribute(attributeName, value): Thiết lập giá trị của thuộc tính được chỉ định.

- element.removeAttribute(attributeName): Xóa thuộc tính được chỉ định.

> **4. Thao Tác với CSS và Lớp (CSS and Class Manipulation)**

- element.classList.add(className): Thêm một hoặc nhiều lớp CSS vào phần tử.

element.classList.remove(className): Xóa một hoặc nhiều lớp CSS khỏi phần tử.

- element.classList.toggle(className): Thêm lớp nếu nó chưa có, và xóa lớp nếu nó đã có.

- element.classList.contains(className): Kiểm tra xem phần tử có chứa lớp được chỉ định hay không.

> **5. Thao Tác với Cấu Trúc DOM (DOM Structure Manipulation)**

- document.createElement(tagName): Tạo một phần tử HTML mới.

- element.appendChild(childNode): Thêm một nút con vào cuối danh sách con của phần tử.

- element.insertBefore(newNode, referenceNode): Thêm một nút con mới vào trước nút tham chiếu (reference node).

- element.removeChild(childNode): Xóa một nút con từ phần tử.

> **6. Xử Lý Sự Kiện (Event Handling)**

- element.addEventListener(event, function): Gắn một trình xử lý sự kiện cho một sự kiện cụ thể trên phần tử.

- element.removeEventListener(event, function): Xóa một trình xử lý sự kiện khỏi phần tử.

