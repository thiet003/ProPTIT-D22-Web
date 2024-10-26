async function myFunction() {
    return "Hello";
}
myFunction().
then(
    function(value) {
        console.log(value)
    },
    function(error) {
        console.log(error)
    }
);



async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Start() {
    console.log('Bắt đầu');
    await delay(5000); // Chờ 2 giây
    console.log('Kết thúc');
}
Start()