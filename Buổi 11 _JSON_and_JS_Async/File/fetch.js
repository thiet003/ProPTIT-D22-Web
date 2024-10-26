async function getData(){
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()

    let par = document.querySelector('.par')
    console.log(par)
    let str = ``;
    for(let i = 0; i < 5; i++){
        console.log(data['products'][i])
        str += `<div class="chill">
                    <h3>Product - ${i} :${data['products'][i].title}</h3>
                    <p>${data['products'][i].description}</p>
                </div>`
    }
    par.innerHTML = str;
}

getData()

