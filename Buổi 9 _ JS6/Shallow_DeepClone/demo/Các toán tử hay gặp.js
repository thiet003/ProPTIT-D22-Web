// import {a} from "./sum.js"

// console.log(a(3, 5))

//?
// let user = {}
// console.log(user?.address?.street) //In ra undefined vif address la undefined
// Sd khi data backend tra ve, check xem co ko.

// toán tử && nó sẽ trả về 1 giá trị khá true, false khi: LẤY FALSE CUỐI CÙNG: (Cái nào là CHECK BOOL mà nó trả về FALSE thì sẽ gán cho nó (undefined, false, NaN, "",...))
let d = "" && true && "HII";
console.log("d: ", d) //Nó nhận cái ""

// toán tử || nó sẽ trả về 1 giá trị khá true, false khi: LẤY TRUE Đầu tiên
let e = "" || 12 || "HII";
console.log("e: ", e) //Nó nhận cái ""

// Tham trị, tham chiếu:
    // Các kiểu dữ liệu ng thủy đc lưu ở dạng tham trị
    // Các kiểu dữ liệu phức tạp đc lưu ở dạng tham chiếu


        //Object ko đc lưu, mà là nó là tham chiếu đến 1 ô nhớ, và ô đấy lưu giá trị của key, value.
//VD:
let user = {
    name: "alo",
    size: {
        width: 200
    }
};
let admin = user; // Cái này nó chỉ là 2 tk này nó cùng tham chiếu đến 1 ô nhớ => Thay đổi 1 cái là cả 2 đều đổi

admin.name = "Xin chao"
console.log(admin.name)
console.log(user.name)

//So sánh 2 tham chiếu: 2 object khi bằng nhau <=> Nó CÙNG THAM CHIẾU ĐẾN ! OBJECT, 2 cái độc lập là khác
let a = {}
let b = {}
console.log(a == b)
console.log(a === b)
console.log(user == admin)

// Vậy làm sao để clone Object?: (2 biến tham chiếu đến 2 obj khác nhau, chỉ clone nội dung)
// Thường: shallow copy => spread copy
// deep clone: D SU dung cho Object nhieu cap (Nếu ko đùng là nó vẫn tính tham chiếu cho tk object con của object)
let clone = {...user};
clone.name = "JELLO"
console.log(clone.name)
console.log(user.name)
