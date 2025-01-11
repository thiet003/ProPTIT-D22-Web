import {useCallback, useEffect, useState} from "react"
import Product from "../Product"
import axios from "axios"

function Products(){
    const [data, setData] = useState([])
    const [page, setPage] = useState([1]);
    // useEffect(() => {
    //     fetch(`https://dummyjson.com/products?limit=10&&skip=${page[0] * 10}`)
    //         .then(res => res.json())
    //         .then(dataA => {
    //             // console.log(data.products)
    //             setData(dataA.products)
    //         })
    // }, page)


    useEffect(() => {
        // axios.get(`https://dummyjson.com/products?limit=10&&skip=${page[0] * 10}`)
        //     .then(function (response) {
        //         // handle success
        //         setData(response.data.products);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // always executed
        //     });

        axios.get(`https://dummyjson.com/products`,{
            params: {
                limit: 10,
                skip: page[0] * 10
            }
        })
            .then(function (response) {
                // handle success
                setData(response.data.products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, page)


    console.log(page);
    

    const handleClick_Down = useCallback(() => {
        if(page[0] > 0) setPage([page[0] - 1]);
    })
    const handleClick_UP = useCallback(() => {
        if(page[0] < 3) setPage([page[0] + 1]);
    })
    return (
        <>
            <h1>ProductList:</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="title"/>
                    <input type="text" placeholder="cost"/>
                    <button type="submit"></button>

                </form>
            </div>
            <div>
                <button onClick={handleClick_Down}>Down</button>
                <button onClick={handleClick_UP}>Up</button>
            </div>  
            <div>
                {
                    data.map((item, index) => {
                        return (
                            <Product product={item}/>
                        )
                    })
                }
            </div>
            
        </>
    )
}
export default Products;