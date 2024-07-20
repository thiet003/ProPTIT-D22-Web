## 1. Text, Fonts, Icons, List, Table

### 1.1 Text:
\- Các thuộc tính phổ biến của Text:
- color: Thiết lập màu văn bản.
- text-align: Căn chỉnh văn bản (left, right, center, justify).
- text-decoration: Trang trí văn bản (underline, overline, line-through, none).
- text-transform: Biến đổi văn bản (uppercase, lowercase, capitalize).
- line-height: Chiều cao dòng.
- letter-spacing: Khoảng cách giữa các chữ cái.
- word-spacing: Khoảng cách giữa các từ.
- text-shadow: Đổ bóng cho văn bản.

### 1.2 Font:
\- Các thuộc tính phổ biến của font:
- font-family: Thiết lập phông chữ (Arial, 'Times New Roman', sans-serif, ...).
- font-size: Thiết lập kích thước phông chữ.
- font-style: Kiểu phông chữ (normal, italic, oblique).
- font-weight: Độ đậm của phông chữ (normal, bold, bolder, lighter, 100-900).
- font-variant: Biến thể của phông chữ (normal, small-caps).

### 1.3 Icons:
\- Sử dụng các thư viện như Font Awesome hoặc Material Icons để thêm biểu tượng vào trang web.

```html
<i class="fas fa-home"></i> Home
<i class="fas fa-envelope"></i> Mail
```

<i class="fas fa-home"></i> Home
<i class="fas fa-envelope"></i> Mail

### 1.4 List (Danh sách):

- list-style-type: Kiểu danh sách (none, disc, circle, square, decimal, lower-alpha, upper-alpha, ...).
- list-style-image: Hình ảnh sử dụng làm biểu tượng danh sách.
- list-style-position: Vị trí của biểu tượng danh sách (inside, outside)

```css
selector {
    list-style-image: url('image.png');
}
```

### 1.5 Table:

- border: Đường viền của bảng.
- border-collapse: Kiểm soát cách các đường viền của bảng được kết hợp (collapse, separate).
- border-spacing: Khoảng cách giữa các ô bảng.
- padding: Khoảng cách bên trong ô bảng.
- text-align: Căn chỉnh văn bản trong ô bảng.
- vertical-align: Căn chỉnh dọc văn bản trong ô bảng.

## 2. Position:
\- Các giá trị của thuộc tính Position:
- static
  - Mô tả: Đây là giá trị mặc định của position cho mọi phần tử.
  - Đặc điểm: Phần tử sẽ được đặt theo thứ tự bình thường của tài liệu. Thuộc tính top, right, bottom, và left không có hiệu lực đối với phần tử có position: static;.
- relative
  - Mô tả: Đặt phần tử dựa trên vị trí ban đầu của nó trong luồng tài liệu, nhưng có thể di chuyển dựa trên các thuộc tính top, right, bottom, và left.
  - Đặc điểm: Khi bạn đặt position: relative; và thiết lập các giá trị top, right, bottom, hoặc left, phần tử sẽ di chuyển một cách tương đối từ vị trí ban đầu của nó, nhưng không ảnh hưởng đến các phần tử khác.
- absolute:
  - Mô tả: Đặt phần tử dựa trên phần tử cha gần nhất có position không phải là static. Nếu không có phần tử cha nào có position khác static, phần tử sẽ dựa trên thẻ `<html>`.
  - Đặc điểm: Phần tử sẽ được di chuyển từ vị trí của phần tử cha gần nhất có position khác static. Nó sẽ không chiếm không gian trong luồng tài liệu, điều này có nghĩa là các phần tử khác sẽ không biết về nó.
- fixed:
  - Mô tả: Đặt phần tử dựa trên cửa sổ trình duyệt. Nó sẽ giữ nguyên vị trí của nó ngay cả khi bạn cuộn trang web.
  - Đặc điểm: Phần tử sẽ không di chuyển khi bạn cuộn trang web. Nó thường được sử dụng cho các phần tử như thanh điều hướng hoặc thông báo mà bạn muốn hiển thị ở cùng một vị trí trên màn hình.
- sticky:
  - Mô tả: Đặt phần tử theo thời gian, nhưng hoạt động như relative cho đến khi nó gần với một điểm cuộn xác định (bao gồm top, right, bottom, left).
  - Đặc điểm: Khi bạn cuộn đến một vị trí đã chỉ định, phần tử sẽ "dán" ở đó trong khi phần còn lại của tài liệu tiếp tục cuộn.

## 3. Combinator selectors (bộ chọn tổ hợp): 

\- Lựa chọn dựa trên mối quan hệ cụ thể giữa chúng.

> **Descendant Selector (space):** Chọn tất cả các phần tử con (ở bất kỳ cấp nào) của một phần tử khác.

```css
div p {
    color: blue;
}
/* tất cả các phần tử <p> bên trong phần tử <div> sẽ có màu chữ màu xanh. */
```

> **Child Selector (>):** Chọn tất cả các phần tử con trực tiếp của một phần tử khác.

```css
ul > li {
    list-style-type: none;
}
/* tất cả các phần tử <li> là con trực tiếp của phần tử <ul> sẽ không có dấu chấm hoặc số. */
```

> **Adjacent Sibling Selector (+):** Chọn phần tử kế tiếp ngay sau phần tử khác (cùng cấp).

```css
h1 + p {
    margin-top: 0;
}
/* phần tử <p> ngay sau phần tử <h1> sẽ có margin-top bằng 0. */
```

> **General Sibling Selector (~):** Chọn tất cả các phần tử cùng cấp sau một phần tử khác.

```css
h1 ~ p {
    color: green;
}
/* tất cả các phần tử <p> là anh em sau phần tử <h1> sẽ có màu chữ màu xanh lá. */
```

>  \- Khi áp dụng các combinator selectors này vào tài liệu HTML, ta có thể kiểm soát các kiểu dáng của các phần tử dựa trên vị trí của chúng trong cấu trúc cây DOM.

## 4. Pseudo-class selectors (bộ chọn lớp giả): 

\- chọn các phần tử dựa trên một trạng thái nhất định.

```css
a:hover {
    color: red;
}
```

## 5. Pseudo-elements selectors (bộ chọn phần tử giả):

\- chọn và tạo kiểu cho 1 phần của phần tử.

```css
p::first-line {
    font-weight: bold;
}
```

## 6. Attribute selectors

- chọn các phần tử dựa trên thuộc tính hoặc giá trị của thuộc tính.

```css
input[type="text"] {
    width: 200px;
}
```

## 7. Relative & Absolute Units (rem, em, cm, px, ...)

### 7.1 Relative Units:
\- là các đơn vị cố định và không thay đổi dựa trên kích thước màn hình hay các yếu tố khác. 
\- Các đơn vị tuyệt đối phổ biến:
- px (pixel)
- in(inch), cm(centimet), mm(milimet).

### 7.2 Absolute Units:
\- được xác định dựa trên các phần tử khác trên trang web, giúp chúng có thể thích ứng với nhiều kích thước màn hình và độ phân giải khác nhau. 
\- Các đơn vị tương đối phổ biến:
- em: Tương đối so với kích thước font của phần tử cha.
- rem: Tương đối so với kích thước font của phần tử gốc (`<html>`), làm cho nó dễ đoán hơn so với em.
- ex: dựa trên x-height của font hiện tại. X-height là chiều cao của các chữ cái viết thường và không có nét kéo dài lên hoặc xuống. (ít được sử dụng).
- ch: dựa trên chiều rộng của ký tự số "0" trong font hiện tại. VD: độ rộng của số 0 trong font hiện tại là 10 pixels thì 1ch=10px.
- % (phần trăm): Tương đối so với kích thước của phần tử cha.
- vh, vw: tuơng đối so với 1% của chiều cao/ rộng của viewport 
- vmin, vmax: tương đối so với 1% chiều nhỏ/ lớn hơn của viewport.

## 8. !important, Math Functions, CSS function attr(), Variables, Box Sizing:

### 8.1 !important
\- là một chỉ thị trong CSS dùng để ghi đè tất cả các quy tắc khác áp dụng cho một phần tử. Khi bạn sử dụng !important sau một thuộc tính CSS, thuộc tính đó sẽ có ưu tiên cao nhất và không bị ghi đè bởi bất kỳ quy tắc nào khác.

### 8.2 Math functions: 
\- CSS cung cấp một số hàm toán học để thực hiện các phép tính trực tiếp trong CSS. 
\- Một số hàm toán học phổ biến:
- calc(): Được sử dụng để thực hiện các phép tính cộng, trừ, nhân, và chia.
- min(): Trả về giá trị nhỏ nhất từ danh sách các giá trị.
- max(): Trả về giá trị lớn nhất từ danh sách các giá trị.
- clamp(): Giới hạn giá trị trong một khoảng cho trước.

```css
div {
  width: calc(100% - 50px);
  font-size: min(2vw, 16px);
  padding: clamp(10px, 5vw, 50px);
}

```

### 8.3 CSS Function attr()
\- Hàm attr() được sử dụng để lấy giá trị của một thuộc tính HTML và sử dụng giá trị đó trong CSS.

```css
a::after {
  content: attr(href);
}
/* lấy giá trị của thuộc tính href của thẻ <a> và chèn giá trị đó vào nội dung của pseudo-element ::after */
```

### 8.4 CSS Variables
\- định nghĩa các biến CSS mà có thể được tái sử dụng trong toàn bộ stylesheet.
\- Cách sử dụng:
- khai báo: sử dụng tiền tố `--`.
- sử dụng: `var()`.

```css
:root {
  --main-bg-color: lightblue;
}

body {
  background-color: var(--main-bg-color);
}
```
