fetch("https://dummyjson.com/products/categories")
    .then(response => response.json())
    .then(data => {
        var htmls = "";
        data.forEach(element => {
            htmls += `
                <div class ="product-item">${element.slug}</div>
            ;`
        });
        console.log(data);
        console.log(htmls);

        var divCategory = document.querySelector(".product-category")
        divCategory.innerHTML = htmls
    })
    .catch(error => {
        console.log(error)
    })