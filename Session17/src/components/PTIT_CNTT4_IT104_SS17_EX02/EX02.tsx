import React, { useState } from 'react'
type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function EX02() {
    const [product] = useState<Product>({
        id: 1,
        name: " khanh",
        price: 2000,
        quantity: 2,

    })

    return (
        <div>
            <h2> bài 2</h2>
            <p>ID:{product.id} </p>
            <p>name :{product.name} </p>
            <p>price: {product.price} </p>
            <p> quantity :{product.quantity} </p>


        </div>
    )
}