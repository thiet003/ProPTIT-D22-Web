

function Product(props){
    const {product} = props

    return (
        <>
            <h3>{product.id}: {product.title}</h3>
            <p>{product.description}</p>
        </>
    )
}
export default Product;