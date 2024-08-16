//I.
    // 1. Tạo mảng:
    // - cách tạo
    // - sử dụng cách nào, tại sao
    // - kiểm tra datatype?
    // 2. Truy xuất mảng
    // - độ dài mảng
    // - lấy phần tử theo id.


    // 1. Tạo mảng:
    //c1:
    var languages  = [
        'JS',
        'C++',
        'C#',
        'C',
        null,
        undefined,
        function(){

        },
        {},
        'C++++++'

    ]

    console.log(languages)
    console.log(typeof(languages))
    //c2:
    var languages2  = new Array(
        'JS',
        'C++',
        'C#',
        'C',
        null,
        undefined,
        function(){
        },
        {},
    )
    console.log(languages)

    //Kiểm tra xem biến có phải array ko
    console.log(Array.isArray(languages))

    // So pHan tu
    console.log(languages.length)

    // 2. Truy xuất mảng
    console.log(languages[2])



//II. Làm việc với Mảng:
    console.log('II. Làm việc với Mảng:')
    //1. to String
    console.log(languages.join()) // Nếu ko điền j thì cho các thành phần cách bằng ấu ','
    console.log(languages.join('')) // điền kí tự rống => cách bằng kí tự rống
    console.log(languages.join('|')) // điền kí tự | => cách bằng kí tự |


    //2. pop: KHi mảng trống => xoá => trả về undeffine

    console.log("Phần tử xoá = pop: " ,languages.pop())
    console.log(languages)
    languages.pop()
    console.log(languages)

    //3. push: dart

    languages.push("JAVA")
    languages.push("Python", "Assem")

    console.log(languages)

    //4. shift: ngược với pop

    console.log("Phần tử xoá = shift: " ,languages.shift())
    console.log(languages)
    languages.shift()
    console.log(languages)

    //4. unshift: ngược với push

    //5. splicing:
    console.log("splice xoá:")
    console.log(languages)
    languages.splice(1, 3) // 1: Đặt điểm bắt đầu , //5: Số phần tử xoá từ điểm đó
    console.log(languages)


    console.log("splice chèn:")
    languages.splice(1, 0, "Dash") // 1: Đặt điểm bắt đầu , //0: Số phần tử xoá từ điểm đó(ta xoá 0 phần tử vì ta cần chèn thôi, chứ xoá j dou), string cuối là chèn thêm tk ấy vào
    console.log(languages)
    languages.splice(1, 2, "Control") // xoá 2 tk, thay 1 tk vào đó
    console.log(languages)

    // 6. concat: nối array: sẽ nối vào tk bên ngoài: ng.côncat(trong)

    console.log(languages.concat(languages2));

    //7. slicing: cắt 1 vài element của mảng

    console.log("slice: ", languages.slice(1, 4)); // tu 1 -> 4


//III. Array Method:
    //     for each()
    //     every()
    //     some()
    //     find()
    //     filter()
    //     map()
    //     reduce()
    console.log("III. Array Method:")
    var courses = [
        {
            id: 1,
            name: 'JS',
            coin: 250
        },
        {
            id: 2,
            name: 'C',
            coin: 100
        },
        {
            id: 3,
            name: 'C++',
            coin: 0
        },
        {
            id: 4,
            name: 'Assembly',
            coin: 250
        }
    ]


    // forEach
        console.log('1. forEach: ')
        courses.forEach(function(course, id) {
            console.log(id, course)
        })// call back: hamf la tham so


    //every: Check 1 cái j đó của tất cả các objecct trong array. Nó sẽ chạy từng tk từ đầu -> cuối
        console.log('2. every: ')
        var isFullFree = courses.every(function(course, id) {
            return course.coin === 0
        })// call back: hamf la tham so
        console.log(isFullFree)


    //some: Check 1 tk duy nhất bất kì ở trong mảng
        console.log('3. some: ')
        var isHasFree = courses.some(function(course, id) {
            return course.coin === 0
        })// call back: hamf la tham so
        console.log(isHasFree)

    //find: Tìm xem trong tất cả các tk có tk nào có : 1 key mà = VALUE mà ta đang tìm hay ko, hoặc 1 thuộc tính nào đó ko, nếu có thì nó trả về CHÍNH TK OBJECT ĐÓ
        console.log('4. find: ')
        var isHasName = courses.find(function(course, id) {
            return course.name === 'C++'
        })// call back: hamf la tham so
        console.log(isHasName)

    //fillter: Tìm xem trong tất cả các tk có tk nào có : 1 key mà = VALUE mà ta đang tìm hay ko, hoặc 1 thuộc tính nào đó ko, nếu có thì nó trả về TẤT CẢ OBJECT CÓ NÓ
        console.log('4. find: ')
        var isHasCoin = courses.filter(function(course, id) {
            return course.coin === 250
        })// call back: hamf la tham so
        console.log(isHasCoin)

    //Map: Sử dụng khi muốn thay đổi Element của Array:
        console.log('5. map: ')
        function courseHandler(course){
            return course
        }
        var newCourses = courses.map(courseHandler); // Trả về mảng mới có đúng số element của mảng cũ
        //Trong map la 1 cái vòng lặp qua tất cả các object
        //Sau bước gọi map, nó sẽ dùng element, gọi ngược lại cái courseHandler, tra về mấy cái đối số

        console.log(newCourses) // in ra caí return trong courseHandler

    //Reduce: Muốn nhận về 1 giá trị duy nhất sau khi xử lý
        console.log("Reduce:")
        //VD: tổng coin:
        //C1:
            var totalCoin = 0
            for (var course of courses){
                totalCoin += course.coin
            }

            console.log(totalCoin)

        //c2:reduce: khi gọi đến, nó sẽ tạo đối số: function và initiavalue(gt khởi tạo)
            var i = 0;
            function coinHandler1(accumulator, currentValue, currentID, originArray){ // accumulator: Biến lưu trữ, originArray: Nếu ta thay đổi j tk này, cái tk courses nó cũng thay đổi luôn, currentValue: Lưu ID của OBJECT,currentID: tương tự
                console.table({
                    'Luot chay: ': i,
                    'Bien Tich Tru - Lúc đầu = initialValue, sẽ đc lưu khi ta return 1 cái j đó: ': accumulator
                })
            }
            var totalCoin2 = courses.reduce(coinHandler1, 0);  //0 chính là cái totalCoin đó

            //Code lại VD 1 = reduce:
            function coinHandler(accumulator, currentValue, currentID, originArray){ // accumulator: Biến lưu trữ, originArray: Nếu ta thay đổi j tk này, cái tk courses nó cũng thay đổi luôn, currentValue: Lưu ID của OBJECT,currentID: tương tự
                return accumulator + currentValue.coin;
            }
            var totalCoin3 = courses.reduce(coinHandler, 0);  //0 chính là cái totalCoin đó
            console.log(totalCoin3)

    //Reduce PII.

        //initial Value: ko bắt buộc, nhưng nếu ta cần set nó thì tất nhiên :))
        //VD: Flat: Làm phẳng mảng:
        console.log("VD reduce: FlatArr")
        var depthArr = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
        var flatArr = depthArr.reduce(function(flatARR_Out, currentItem_Of_DepthArr) {
            return flatARR_Out.concat(currentItem_Of_DepthArr)
        }, []) // Khởi tạo ban đầu 1 mảng rỗng, nối dần từng phần tử và trả về flatArr
        console.log(flatArr)

    //Phương thức: includes: có sắn ở trong Array và String
    console.log("Include Method:")
    var title = "Xin Chao Cac Bn"
    console.log(title.includes('Xin'))
    console.log(title.includes('Xin', 2))