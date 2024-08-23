

// // 1. Element:
    //a. getElementById: Lấy 1 tk duy nhất, Id trùng thì lấy tk đầu
    // var headingNode = document.getElementById('the heading h1')

    // console.log(headingNode)

    // console.log({
    //     element: headingNode
    // })
    // //b. getElementsByClassName: Lấy ra nhiều phần tử cùng class

    // var headingNodes_byClass = document.getElementsByClassName('heading h1')

    // console.log(headingNodes_byClass)

    // console.log({
    //     element: headingNodes_byClass
    // })

    // //c. getElementsByTagName: Lấy ra nhiều phần tử cùng 1 loại tag

    // var headingNodes_byTag = document.getElementsByTagName('h1')

    // console.log(headingNodes_byTag)

    // console.log({
    //     element: headingNodes_byTag
    // })

    // //d. CSS selector: Hya dùng vì dễ chọn hết các element
    // console.log('CSS selector:')
    // var headingNodes_by_CSSselector = document.querySelector('.h1')

    // console.log(headingNodes_byTag)

    // console.log({
    //     element: headingNodes_byTag
    // })

    // // e. HTML Collection: nó có 1 số cái thẻ thôi: a, form,...
    // console.log(document.forms)
    // console.log(document.forms['form-1']) // Lấy phần tử trong mảng thôi

    // console.log(document.anchors)
    // console.log(document.anchors['a1'])


    // //f. Gọi các phương thức trên, với 1 Node.

    // //VD: Lấy ra tất cả li của thẻ div - 1
    // //c1: 
    // console.log(document.querySelectorAll('.box-1 li'))
    // //c2: Sử dụng cho th dùng tk box-1 trc => li
    // var boxNode = document.querySelector('.box-1')
    // console.log(boxNode.querySelectorAll('li'))



// //2. Attribute
//     //B1: Lấy Element
    // var headingNodes_by_CSSselector1 = document.querySelector('h1')

    // console.log(headingNodes_by_CSSselector1)

    // console.log({
    //     element: headingNodes_by_CSSselector1
    // })

    // //B2: Từ element, ta thêm attribute vào:

    //     //C1: gán trực tiếp
    //     // headingNodes_by_CSSselector1.title('THE HEADING')
    //     // headingNodes_by_CSSselector1.ID('haeding h1')
    //     //headingNodes_by_CSSselector1.class('heading')
        
    //     //C2: Phương thức: có thẻ sd để gán attibue ko liên quan, ko hợp lệ đến Element
    //     headingNodes_by_CSSselector1.setAttribute('href', 'heading') //tên attribute - giá trị
    // //Trả về attribute:
    // console.log(headingNodes_by_CSSselector1.getAttribute('href'))


// //3. TEXT NODE in DOM

    // a.InnerText & textContent Property | Text node in Dom
    // var headingElement = document.querySelector('.heading_2')

    // console.log(headingElement)

    // //InnerText:
    // console.log('InnerText: ' , headingElement.innerText)
    // console.log('TextContent: ' , headingElement.textContent)

    // // CHỉnh sửa:
    // headingElement.textContent = 'New Text Test Content'
    // console.log('New InnerText: ' , headingElement.innerText)

    // //Getter / Setter:
    // var headingElement2 = document.querySelector('.heading_3')

    // console.log('InnerText: ' , headingElement2.innerText)
    // console.log('TextContent: ' , headingElement.textContent)


// //4. Thêm ELEMENT vào trong 1 ELEMENT: innerHTML, outerHTML

//     var boxElement = document.querySelector('.box')
//     console.log(boxElement)

//     //InnerHTML: THAY THẾ TẤT CẢ CÁC ELM BÊN TRONG THẺ = THẺ MỚI phải có cặp tag, nếu ko nó hiểu là text
//     boxElement.innerHTML = '<h1 title="heading">1. 11111111111</h1>'
//     boxElement.innerHTML = '<h1 title="heading">2. 22222222222</h1>'

//     console.log(boxElement.innerHTML)

//     //OuterHTML: THAY THẾ LUÔN THẺ HIỆN TẠI = THẺ MỚI. Lưu ý: khi sử dụng thì cái tk boxElement giữ yên, nhưng trong dom nó đã mất => Ko nên sử dugj

//     boxElement.outerHTML = '<h1 title="heading">Thêm ELEMENT vào trong 1 ELEMENT</h1>'

//     console.log(boxElement)
//     console.log(boxElement.innerHTML)


// //5. Node property:
    // console.log("5. Node Property: ")
    // var headingElement5 = document.querySelector('.heading_5')

    // console.log(typeof headingElement5)
    // console.log([headingElement5])


    // // - autocapitalize
    // var headingElement6 = document.querySelector('.box1')

    // console.log(typeof headingElement6)
    // console.log([headingElement6])

    //base URI: 


// V. DOM CSS:

    var boxElement8 = document.querySelector('.box_8')
    console.log(boxElement8.style)


    //VD1: Set cho the div w, h, background
    boxElement8.style.width = '100px'
    boxElement8.style.height = '100px'
   // boxElement8.style.backgroundColor = 'red'
    
    console.log(boxElement8.style.backgroundColor)
    // Muốn thay đổi nhiều mà ko cần gõ nhiều dòng:
    Object.assign(boxElement8.style, {
        width: '200px',
        height: '100px',
        backgroundColor: 'green'
    }) // dối số 1: style, 2: list các đối số muốn đổi + giá trị

    console.log(boxElement8.style.backgroundColor)
