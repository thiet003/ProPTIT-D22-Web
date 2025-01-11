//I. Javascript Callback Functions

//ĐK: Là hàm khi đc truyền qua đối số khi gọi 1 hàm khác
    //1. Là hàm
    //2. Đc truyền qua đối số.
    //3. Đc gọi lại trong hàm nhận đối số

    function myFunction(parafram) {
        console.log(parafram)
        console.log("Hi World")
    }


    //C1: 
        //ĐK 1:Là hàm:
        function myCallBack(){
            return "Hello World"
        }
        //ĐK2: Đc tr qua đối số 
        myFunction(myCallBack)
        //=> myCallBack là hàm callback

    //C2:
    
//II.
// var courses = [
//     'JS',
//     'C',
//     'C++',
// ]

// courses.map(function(course) {
//     console.log(course)
// })

//III. Ứng dụng:
    // Xử lý bất đồng bộ: Có thể thấy tk Promise nó sẽ không chờ khởi tạo Đối tượng mà nó chạy thẳng ra console chạy luôn. Và ta phải dùng setTimeout để chờ cho đến khi Ktao xong thì mới hiển thij đc
    // var promise3 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve();
    //     }, 3000);
    // })
    // console.log(promise3)
    // setTimeout(() => {
    //     console.log('wait 5s')
    //     console.log(promise3)
    // }, 5000);



//IV. PROMISSE
// 1. VD 1: Promisse
var a = 10;
var promise1 = new Promise((resolve, reject) => {
    
    if(a != undefined){
        resolve("A: " + a); //success
    }
    else {
        reject("A la Null")
    }
})

promise1
    .then((success) => {
        console.log(success)
        return success
    })  // (đối số1, đối số 2,..) => {//code  (Hàm Arrow)}
    .then((success2) => {
        console.log(success2 + 1)
        return success2 + 1
    }) 
    .then((success3) => {
        console.log(success3 + 1)
        return success3 + 1
    }) 


    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Luc nao cung vao day")
    })



//2. VD2 : 3 trạng thái promisse

    //a. Pending: Khi JS chạy thì nó vào hàm, ko chờ tk setTimeout chạy hết đâu, vì dây nó kiểu khai báo thôi à. Nó sẽ chạy luôn đến tk log sau. => Chưa nhận đc thì là Pending
    // var promise3 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve();
    //     }, 3000);
    // })
    // console.log(promise3)
    // setTimeout(() => {
    //     console.log('wait 5s')
    //     console.log(promise3)
    // }, 5000);


//3. VD3: Promise ALL:
// var a = 10;
// var b = 20;
// var c = 30;
// var d = 40;
// var e = 50;
// var f = 60;
// var promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(a + b);
//     }, 3000);
// });

// var promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(c + d);
//     }, 5000);
// });

// var promise6 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(e + f);
//     }, 7000);
// });



// Promise.all([promise4, promise5, promise6])
//     .then(() => {
//         console.log(promise4 + promise5 + promise6)
//     })
//     .catch(() => {
//         console.log("ERROOOr")
//     })
//     .finally(() => {
//         console.log("Luon vao day")
//     })