import React, { useEffect, useState } from 'react'
import Products from './Products'

const ProductNextApi = () => {
    const [products, setProducts] = useState([])
    const [productId, setProductId] = useState(0)

    const handleNext = () => {
        setProductId(cur => cur + 1)
    }

    // async example
    // const funcAsync = async () =>{
    //     const res = await fetch("https://fakestoreapi.com/products").then(res=> res.json()).then(data => data)
    //     console.log(res)
    // }

    // funcAsync()

    const fetchApi = () => {
        const url = 'https://fakestoreapi.com/products/' + productId  //https://fakestoreapi.com/products/0 
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts([...products, data]))
    }

    useEffect(() => {
        if (productId > 0) {
            fetchApi()
        }
    }, [productId])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
                display: 'flex', justifyContent: "space-around", gap: '1rem', height: "2rem", padding: "1rem",
                backgroundColor: "seagreen", fontSize: "1.25rem"
            }}>
                <div>Product to be Fetched with ID : <span style={{ color: "white", padding: ".25rem 1rem", backgroundColor: "gray" }}>{productId + 1}</span></div>
                <button onClick={handleNext}> Next Product</button>
            </div>
            <Products products={products} />
        </div>
    )
}

export default ProductNextApi