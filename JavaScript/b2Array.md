# Buổi 2.  Các phương thức trong Array
## 1. Tổng quan
- Array (mảng) là một cấu trúc dữ liệu dùng để lưu trữ danh sách các phần tử (có thể là các giá trị cùng loại hoặc khác loại) trong một thứ tự nhất định. Mảng rất linh hoạt và có thể chứa bất kỳ loại dữ liệu nào, bao gồm số, chuỗi, đối tượng, và thậm chí là các mảng khác.
    ````
    let fruits = ["Apple", "Banana", "Mango"];
    var fruits = new Array("Apple", "Banana", "Mango");
    let emptyArray = [];
    var emptyArray = new Array();
    ````
## 2. Các phương thức
### 2.1 push(), pop(), unshift(), shift()
- push() thêm một hoặc nhiều phần tử vào cuối mảng.
- pop() xóa phần tử cuối cùng khỏi mảng.
- unshift() thêm một hoặc nhiều phần tử vào đầu mảng.
- shift() xóa phần tử đầu tiên khỏi mảng.
````
arr.push("duy")

arr.push(1, "phan")

````
### 2.2 concat(), slice(), splice(), reverse(), join()
- concat() được sử dụng để hợp nhất hai hoặc nhiều mảng lại với nhau. Phương thức này không thay đổi các mảng gốc mà trả về một mảng mới.
  - let newArray = array1.concat(array2, array3, ...); 
- splice(): Thêm, xóa, hoặc thay thế các phần tử trong mảng.
  - array.splice(vt bắt đầu, số lượng xóa, phần tử thêm 1, phần tử thêm 2, ...);
- slice() trả về một mảng con, chứa các phần tử từ vị trí start đến (nhưng không bao gồm) vị trí end. Nếu không chỉ định end, slice() sẽ lấy tất cả phần tử từ vị trí start đến hết mảng. Phương thức này không làm thay đổi mảng gốc.
  - let newArray = array.slice(start, end);
- reverse() đảo ngược thứ tự các phần tử trong mảng và thay đổi trực tiếp mảng gốc. 
  - array.reverse();
- join() nối tất cả các phần tử của mảng thành một chuỗi, các phần tử sẽ được ngăn cách bởi một chuỗi đã chỉ định. Nếu không chỉ định, các phần tử sẽ được ngăn cách bằng dấu phẩy.
  - let str = array.join("chuỗi ngăn cách"); 
### 2.3 indexOf(), includes(), find()
- indexOf() trả về chỉ số đầu tiên mà một phần tử cụ thể xuất hiện trong mảng. Nếu phần tử không tồn tại trong mảng, phương thức sẽ trả về -1.
  - let index = array.indexOf(phần tử cần tìm, fromIndex);
- includes() kiểm tra xem mảng có chứa một phần tử cụ thể hay không. Nó trả về true nếu phần tử tồn tại trong mảng, ngược lại trả về false.
  - let isPresent = array.includes(element, fromIndex);
- find() trả về phần tử đầu tiên trong mảng thỏa mãn một điều kiện nhất định do một hàm kiểm tra (callback function) cung cấp. Nếu không có phần tử nào thỏa mãn điều kiện, find() sẽ trả về undefined.
  - arr.find(callback)
  - arr.find(callback(element[, index[, array]])[, thisArg])
````
 callback: Hàm thực thi với mỗi giá trị trong mảng,
  có 3 tham số truyền vào: */
  
  // element: Phần tử hiện tại đang được xử lý trong mảng
  // index (không bắt buộc): Thứ tự của phần tử hiện tại đang được xử lý trong mảng
  // array (không bắt buộc): Mảng nguồn mà hàm find() đang xử lý

/* thisArg (không bắt buộc): Đối tượng tùy chọn để
  sử dụng như thế nào khi thực hiện callback */
````
### 2.4 forEach(), map()
- forEach() thực thi một hàm cho mỗi phần tử của mảng. Phương thức này không trả về kết quả, mà chỉ thực hiện các thao tác đã định nghĩa trong hàm callback.
  - function name(elemen, index) {}
  - array.forEach(name)
  - 

- map() tạo ra một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Mảng mới sẽ có cùng số lượng phần tử với mảng ban đầu.
  - let newArray = array.map(callback(element, index, array), thisArg);
  - 
### 2.5 filter(), some(), every(), group(), reduce()
- filter() tạo ra một mảng mới chứa tất cả các phần tử của mảng gốc mà thỏa mãn một điều kiện nhất định được cung cấp bởi một hàm callback.
  - let newArray = array.filter(callback(element, index, array), thisArg);
  - 
- some() kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện do một hàm callback cung cấp hay không. Nó trả về true nếu có, và false nếu không có phần tử nào thỏa mãn.
  - let result = array.some(callback(element, index, array), thisArg);   
  - 
- every() kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện do một hàm callback cung cấp hay không. Nó trả về true nếu tất cả các phần tử thỏa mãn, ngược lại trả về false.
  - let result = array.every(callback(element, index, array), thisArg);
  - 
- group(): là một phần của ES2021 (ECMAScript 2021),   để nhóm các phần tử của mảng dựa trên một tiêu chí do hàm callback cung cấp. Nó trả về một đối tượng nơi các khóa là kết quả của hàm callback và các giá trị là các mảng của các phần tử tương ứng.
- reduce() áp dụng một hàm callback lên từng phần tử của mảng (từ trái sang phải) để giảm nó thành một giá trị duy nhất.
    ````
    function name (accumulator, currentValue) {
        return accumulator + currentValue;
    }
    - accumulator: Giá trị tích lũy từ lần gọi trước, hoặc giá trị khởi tạo nếu được cung cấp. Nếu không cung cấp, accumulator sẽ được gán bằng phần tử đầu tiên của mảng, và hàm callback sẽ bắt đầu từ phần tử thứ hai.
    - currentValue: Phần tử hiện tại trong mảng.
    ````
    -  value = arr.reduce(nameFunction, giá trị khởi tạo accumulator);





