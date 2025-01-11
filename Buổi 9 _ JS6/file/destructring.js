let sinhvien = {
    firstname: "Son",
    lastname: "Tran"
}

// let {firstname, lastname} = sinhvien
// console.log({firstname, lastname});

let {firstname: fname, lastname: lname} = sinhvien
console.log({fname, lname});
