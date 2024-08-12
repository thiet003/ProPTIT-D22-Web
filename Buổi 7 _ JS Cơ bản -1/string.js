console.log("I")
 // 1. Tạo chuỗi
        //c1: nen dung
        var fullName = '   Son Tran   '
        console.log(typeof fullName)
    //C2: Khoi tao doi tuong, KDL nhieu khi ko mong muon
        var fullName2 = new String('Son Tran')
        console.log(typeof fullName2)

// 2. Một số các sử dụng backslash(\)
    // 1.Cái ví dụ ở bài kiểu dữ liệu (son's tran)
    // 2. cần in ra dấu \ : vd: toi\em => "toi\\em"

// 3. Xem độ dài chuỗi
    console.log(fullName.length)

// 5. Template string ES6
    console.log(`Toi Ten la: ${fullName} ${fullName2}`)




console.log("II")
//1 length:
console.log("1. length")
console.log(fullName.length)

// 2.find index
console.log("2. find index:")
console.log(fullName.indexOf('n'))
console.log(fullName.indexOf('Tr'))
console.log(fullName.indexOf('ABC'))

console.log(fullName.indexOf('n' , 5)) // Tìm id của xâu con bắt đầu từ kí tự thứ 5

console.log(fullName.lastIndexOf('n'))// TImf kis tu cuoi cung

console.log(fullName.search('Tr'))// gần như index, nhưng nó ko hỗ trợ cái vị trí để bắt đầu tìm kiếm. Và cái nữa là nó chỉ hỗ trợ tìm kiếm biểu thức chính qui


// 3.cut string

console.log(fullName.slice(0, 6))

// 4.replace

console.log(fullName.replace('Tr', 'Ch'))
console.log(fullName)// Nó ra cái biểu thức cũ => Nó chỉ là tạo 1 xâu mới rồi lưu cho nó , xâu cũ ko đổi

console.log(fullName.replace(/Tr/g, 'Ch'))// Thay thế tất cả các chuỗi

// 5.upper-lower case

console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

// 6.trim: xóa dấu space thừ ở 2 đầu

console.log(fullName.trim())

// 7.split: chia chuoiox thanh array

var languages = 'JS, PHP, CSS, C++'
console.log(languages.split(','))
console.log(languages.split(''))// cat tat ca ki tu

// 8.get char by index

const myString2 = 'Son TRAN';
console.log(myString2.charAt(0))

console.log(myString2.charAt(100))
console.log(typeof myString2.charAt(100)) // Nếu ko có thì sẽ trả lại chuỗi rỗng

console.log(myString2[100]) // Nếu dung cách này thì trả về undefined
