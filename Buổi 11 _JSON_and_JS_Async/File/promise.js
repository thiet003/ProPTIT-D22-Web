// // 1. VD 1: Promisse
// var a = 10;
// var promise1 = new Promise((resolve, reject) => {
    
//     if(a != undefined){
//         resolve("A: " + a); //success
//     }
//     else {
//         reject("A la Null")
//     }
// })

// promise1
//     .then((success) => { //Success là cái resolve truyền vào, cái hàm arrow là cái kết quả của resolve lần đầu.
//         console.log(success)
//         return success
//     })  // (đối số1, đối số 2,..) => {//code  (Hàm Arrow)}
//     .then((success2) => {
//         console.log(success2 + 1)
//         return success2 + 1
//     }) 
//     .then((success3) => {
//         console.log(success3 + 1)
//         return success3 + 1
//     }) 


//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("Luc nao cung vao day")
//     })



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
    var a = 10;
    var b = 20;
    var c = 30;
    var d = 40;
    var e = 50;
    var f = 60;
    var promise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    });

    var promise5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(c + d);
        }, 5000);
    });

    var promise6 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(e + f);
        }, 7000);
    });



    Promise.all([promise4, promise5, promise6])
        .then(([res1, res2, res3]) => {
            console.log(res1 + res2 + res3)
        })
        .catch(() => {
            console.log("ERROOOr")
        })
        .finally(() => {
            console.log("Luon vao day")
        })
    // All time:  max(3,5, 7)


    