// Cho 1 xâu bất kỳ, viết 1 hàm thực hiện công việc sau:
// + Đầu tiên, đảo ngược chuỗi(dùng hàm)
// + Sau đó, chuyển hết về chữ hoa
// + Tiếp tục, loại bỏ các kí tự không phải chữ cái
// + Cuối cùng kiểm tra xem xâu vừa biến đổi có đối xứng không?


// function reverse(a){
//     let s = "";
//     for(let i = 0; i < a.length; i++){
//         s = a.charAt(i) + s;
//     }
//     return s;
// }

// function delete_NotLetter(a){
//     let s = "";
//     for(let i = 0; i < a.length; i++){
//         if((a.charAt(i) >= 'a' && a.charAt(i) <= 'z') || (a.charAt(i) >= 'A' && a.charAt(i) <= 'Z')){
//             s = s + a.charAt(i) ;
//         }
//     }
//     return s;
// }

// function check(a){
//     for(let i = 0; i < a.length / 2; i++){
//         if(a.charAt(i) != a.charAt(a.length - i - 1)){
//             return false;
//         }
//     }
//     return true
// }

// var checkA = (a) => {
//     console.log(a)

//     let a1 = reverse(a)
//     console.log(a1)

//     let a2 = a1.toUpperCase()
//     console.log(a2)

//     let a3 = delete_NotLetter(a2)
//     console.log(a3)

//     console.log(check(a3))
// }

// let A1 = "tran 1000   999nart"
// let A2 = "transon 1000   999nart"
// let A3 = " tranxuanson 12345678a23sas"
// checkA(A1)
// checkA(A2)
// checkA(A3)

let Student = {
    nameStd,
    age,
    grade,
}
function Student(name, age, grade){
    this.grade = grade
    this.age = age
    this.grade = grade
}


function showInfo(student){
    console.log(student.name, " + ", student.age, " + ", student.grade)
}

let student1 = new Student("Son", 18, '10')
let student2 = new Student("Tujg", 19, '11')
let student3 = new Student("Duy", 15, '12')

let StuMan = new Array();

StuMan.push(student1, student2, student3)

function checkName(student, nameCheck){
    return student.name === nameCheck
}