import React, { useEffect, useState } from 'react'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
            <h2>Products</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "1rem", gap: "1rem" }}>
                {products.length > 0 && products.map(product =>
                    <div key={product.id} style={{ width: "90%", padding: '1rem', border: "1px solid gray", display:"flex" }}>
                        <h3>{product.title}</h3>
                        <img src={product.image} width="100px"/>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Products