# Buổi 7: API

## 1. Fetch API
- FetchAPI là một giao diện trong JavaScript được sử dụng để thực hiện các yêu cầu HTTP (như GET, POST, PUT, DELETE) từ phía client (trình duyệt web) tới máy chủ (server). FetchAPI cung cấp một cách hiện đại, linh hoạt và dễ sử dụng để giao tiếp với các tài nguyên trên web, thay thế cách tiếp cận cũ như XMLHttpRequest.
- FetchAPI được xây dựng dựa trên các Promises trong JavaScript, giúp xử lý các yêu cầu bất đồng bộ (asynchronous) một cách dễ dàng hơn, đồng thời cải thiện khả năng đọc và quản lý mã.
### 1.1 Cú pháp
````
fetch(url, [options])
  .then(response => {
    // Xử lý phản hồi từ fetch
  })
  .catch(error => {
    // Xử lý lỗi khi yêu cầu gặp vấn đề
  });
````
- url: Là URL của tài nguyên mà bạn muốn yêu cầu.
- options (tùy chọn): Đối tượng chứa các thiết lập như phương thức HTTP (GET, POST, PUT, DELETE), headers, body,...
- Response của câu fetch() là một đối tượng Stream, nghĩa là khi chúng ta gọi phương thức json(), một Promise được trả về, vì quá trình đọc stream sẽ diễn ra bất đồng bộ.
1. GET
````
fetch('https://dummyjson.com/products')
  .then(response => response.json())  // nhận kết quả từ fetch, chuyển đổi dữ liệu từ định dạng JSON thành đối tượng JavaScript
  .then(data => console.log(data))    // nhận kết quả từ .then() trên, Xử lý dữ liệu
  .catch(error => console.error('Error:', error));  // Xử lý lỗi
````

2. POST
- Gửi dữ liệu tới server để tạo mới một tài nguyên hoặc thực hiện một hành động.
- Thường được sử dụng để gửi dữ liệu từ form (như đăng ký, đăng nhập) hoặc tải lên dữ liệu.
````
fetch('https://dummyjson.com/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
````

3. Yêu cầu PUT (Cập nhật tài nguyên)
- Cú pháp của yêu cầu PUT tương tự như yêu cầu POST, nhưng với mục đích là thay thế dữ liệu hiện có trên server.
````
fetch('https://api.example.com/data/1', {  // URL đến tài nguyên cần cập nhật
  method: 'PUT',  // Phương thức PUT để cập nhật dữ liệu
  headers: {
    'Content-Type': 'application/json'  // Định dạng dữ liệu gửi lên là JSON
  },
  body: JSON.stringify({
    name: 'Jane Doe',  // Dữ liệu mới để cập nhật
    email: 'jane@example.com'
  })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Update failed');  // Kiểm tra nếu yêu cầu thất bại
  }
  return response.json();  // Chuyển đổi phản hồi thành JSON
})
.then(data => console.log('Update success:', data))  // Xử lý phản hồi sau khi cập nhật thành công
.catch(error => console.error('Error:', error));  // Xử lý lỗi
````

4. Yêu cầu DELETE (Xóa tài nguyên)
- DELETE được sử dụng để xóa một tài nguyên khỏi server. Yêu cầu DELETE thường chỉ cần một URL để xác định tài nguyên cần xóa và không yêu cầu dữ liệu trong body (khác với POST hoặc PUT).
````
fetch('https://api.example.com/data/1', {  // URL đến tài nguyên cần xóa
  method: 'DELETE',  // Phương thức DELETE để xóa tài nguyên
})
.then(response => {
  if (!response.ok) {
    throw new Error('Delete failed');  // Kiểm tra nếu yêu cầu thất bại
  }
  console.log('Delete success');  // Xác nhận xóa thành công
})
.catch(error => console.error('Error:', error));  // Xử lý lỗi
````

## 2. REST API 
(Representational State Transfer Application Programming Interface)
- là một kiểu kiến trúc API được sử dụng rộng rãi trong phát triển web để cho phép các hệ thống khác nhau giao tiếp với nhau thông qua giao thức HTTP.
- REST API tuân theo các nguyên tắc và quy tắc của kiến trúc REST, do Roy Fielding giới thiệu vào năm 2000.
### 2.1 Giới thiệu chung
1. API (Application Programming Interface)
- API là một tập hợp các quy tắc và giao thức giúp cho các ứng dụng hoặc dịch vụ giao tiếp với nhau. API đóng vai trò trung gian, cho phép một ứng dụng yêu cầu và nhận dữ liệu từ ứng dụng khác (thường là từ server).
2. REST (Representational State Transfer)
- REST là một phong cách kiến trúc để xây dựng hệ thống phân tán, như ứng dụng web. REST nhấn mạnh việc sử dụng các phương thức HTTP chuẩn để quản lý tài nguyên, với các quy ước về cách thức xử lý và định dạng dữ liệu.

- Một REST API thường hoạt động dựa trên bốn phương thức HTTP chính:

  - GET: Lấy dữ liệu từ server (ví dụ: lấy danh sách người dùng, bài viết, sản phẩm, v.v.).
  - POST: Gửi dữ liệu mới đến server để tạo tài nguyên (ví dụ: thêm người dùng mới, đăng ký tài khoản).
  - PUT: Cập nhật dữ liệu đã có trên server (ví dụ: cập nhật thông tin người dùng).
  - DELETE: Xóa dữ liệu trên server (ví dụ: xóa một tài khoản người dùng).
### 2.2 Nguyên tắc chính của REST API
- Một API được coi là RESTful nếu nó tuân thủ các nguyên tắc chính của REST:

1. Stateless (Không trạng thái)
- Mỗi yêu cầu từ client (người dùng hoặc hệ thống yêu cầu) đến server (hệ thống xử lý) phải độc lập và không chứa bất kỳ thông tin nào từ các yêu cầu trước đó. Server không lưu giữ trạng thái của client giữa các yêu cầu. Tất cả thông tin cần thiết phải được client gửi đi trong mỗi yêu cầu.
2. Client-Server (Khách hàng - Máy chủ)
- Client và server hoạt động độc lập. Client gửi yêu cầu và nhận phản hồi từ server. Server không cần biết chi tiết về client và ngược lại.
3. Cacheable (Có thể lưu vào bộ nhớ đệm)
- Một REST API nên cho phép dữ liệu có thể được lưu trữ tạm thời (cache) để cải thiện hiệu suất và giảm tải cho server. Ví dụ, các yêu cầu GET có thể được cache để tránh việc truy cập server nhiều lần.
4. Layered System (Hệ thống phân lớp)
- Kiến trúc của hệ thống REST có thể phân chia thành nhiều lớp. Client không cần phải biết hệ thống bên dưới server, miễn là nó nhận được phản hồi mong muốn.
5. Uniform Interface (Giao diện thống nhất)
- REST sử dụng một giao diện đơn giản và thống nhất, giúp mọi loại ứng dụng hoặc hệ thống có thể tương tác với nhau thông qua các phương thức HTTP chuẩn. Tài nguyên (resource) thường được biểu diễn qua URI (Uniform Resource Identifier).

- Ví dụ:

  - GET https://api.example.com/users (Lấy danh sách tất cả người dùng).
  - POST https://api.example.com/users (Tạo người dùng mới).
  - GET https://api.example.com/users/1 (Lấy thông tin của người dùng với ID 1).
  - PUT https://api.example.com/users/1 (Cập nhật thông tin người dùng với ID 1).
  - DELETE https://api.example.com/users/1 (Xóa người dùng với ID 1).
6. Resource Representation (Biểu diễn tài nguyên)
- Mỗi tài nguyên trên server được biểu diễn dưới dạng một URL duy nhất (URI). Dữ liệu tài nguyên được biểu diễn ở nhiều định dạng khác nhau, phổ biến nhất là JSON và XML. Tuy nhiên, JSON được sử dụng rộng rãi hơn do tính nhẹ và dễ đọc.
- 
- Ví dụ về REST API
Giả sử bạn có một API quản lý danh sách sách (books) tại địa chỉ https://api.example.com/books. Đây là cách một REST API sẽ làm việc:

Lấy danh sách các cuốn sách (GET request):
> GET https://api.example.com/books
````
[
  { "id": 1, "title": "Book A", "author": "Author A" },
  { "id": 2, "title": "Book B", "author": "Author B" }
]
````
## 3. Sử dụng công cụ PostMan