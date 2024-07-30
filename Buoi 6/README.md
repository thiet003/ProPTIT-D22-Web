# [BUỔI 6] CSS buổi 4 - Responsive

### Responsive là gì ?
\- Responsive là một kĩ thuật trong thiết kế web làm cho trang web hiển thị tốt trên nhiều thiết bị khác nhau với kích thước màn hình và độ phân giải khác nhau. 

## 1. Media query:
\- Để xử lý thay đổi giao diện giữa các dạng màn hình khác nhau (chiều rộng màn hình khác nhau), chúng ta sẽ sử dụng truy vấn `@media`.

> **Cấu trúc:**

```css
@media only|not Media-type and (Media-future and|or|not Media-future) {
    tag {
        property: value;
    }
}
```

\- **Media-type:**
- screen: dành cho trang hiển thị (không dành cho bản in)
- print: dành cho bản in (không dành cho trang hiển thị)
- all: giá trị mặc định, dành cho cả trang hiển thị và bản in
- speech: dành cho phiên bản hỗ trợ đọc thành tiếng.

\- **Media-feature**: các giá trị thông dụng:
- max-width: áp dụng CSS cho thiết bị có chiều rộng nhỏ hơn hoặc bằng giá trị đã chỉ định.
- min-width: áp dụng CSS cho thiết bị có chiều rộng lớn hơn hoặc bằng giá trị đã chỉ định.

```css
div {
    background-color: #333333;
    height: 150px;
    line-height: 150px;
    text-align: center;
    width: 200px;
}

@media only screen and (max-width: 1024px) {
    div {
        background-color: red;
    }
}

@media only screen and (max-width: 768px) {
    div {
        background-color: blue;
    }
}

@media only screen and (max-width: 640px) {
    div {
        background-color: yellow;
    }
}

@media only screen and (max-width: 480px) {
    div {
        background-color: pink;
    }
}
```

## 2. Breakpoint:
\- là những điểm (chiều rộng màn hình của thiết bị) mà ở đó giao diện được chuyển đổi cho phù hợp với thiết bị hiện tại, ví dụ như màn hình rộng hơn 1024px, thì có background-color màu đỏ, nhỏ hơn 1024px thì background-color màu xanh, khi này ta gọi 1024 là breakpoint.

## 3. Viewport:
\- là khu vực hiển thị nội dung của một trang web trên màn hình của thiết bị. Viewport rất quan trọng vì nó ảnh hưởng trực tiếp đến cách mà các phần tử của trang web được hiển thị và kích thước của chúng trên các thiết bị khác nhau.

\- Nội dung viewport được khai báo bằng thẻ <meta> với các giá trị tương ứng sau:

```css
<meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no">
```

\- Các giá trị phổ biến:
- width=device-width: Chiều rộng bằng chiều rộng của thiết bị.
- height=device-height: Chiều cao bằng chiều cao của thiết bị.
- maximum-scale=1.0: Tỷ lệ lớn nhất (1.0 ứng với 100%).
- minimum-scale=1.0: Mức phóng to tối thiểu của thiết bị (1.0 ứng với 100%).
- initial-scale=1.0: Độ phóng to ban đầu (1.0 ứng với 100%).
- user-scalable=no: Cho phép người dùng phóng to màn hình hay không (giá trị yes hoặc no).

    
