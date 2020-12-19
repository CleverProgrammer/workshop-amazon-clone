import React from 'react'
import './Product.css'

function Product(props) {
    console.log(props);
    return (
        <div className="Product">
            <div className="Product-description">
                <span className="Product-title">{props.title}</span>
                <span className="Product-price">${props.price}</span>
                <span className="Product-rating">
                    <p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p>
                </span>
            </div>
            <img src={props.image} />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
