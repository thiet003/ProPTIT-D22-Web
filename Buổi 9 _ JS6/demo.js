
// let a = 18;
// let b = function() {
//     return "Hello World"
// }
// let c = (item) => {
//     let tmp = 1;
//     for(let i of item){
//         tmp *= i;
//     }
//     return tmp;
// }
// console.log(`Tôi năm nay : ${a} tuôi`)
// console.log(`Tôi năm nay : ${b()} tuôi`)
// console.log(`Tôi năm nay : ${c([1,2,3,4,5])} tuôi`)


// let student = {
//     nameS: "Tran Xuan SOn",
//     classS: "D22CQCN04-B",
//     msv: "B22DCCN700"
// }

// let {nameS, classS} = student;

// let {nameS : name2, classS: class2} = student;
// console.log(nameS)
// console.log(classS)
// console.log(name2)
// console.log(class2)


let arr = [
    3, 
    "Tran Son", 
    {
        name: "SON",
        class: "04-B",
    },
    function(){
        console.log("hello wwrld");
    }
]

let [var1, , ,var2] = arr;
console.log(var1,var2)
var2()

let {[3]: b1, [1]:b2} = arr;
console.log(b1, b2)