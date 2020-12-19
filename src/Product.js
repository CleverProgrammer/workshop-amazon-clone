import React from 'react'
import { db } from './firebase'
import './Product.css'

function Product(props) {

    const addToCart = () => {
        const cartItem = db.collection('cart-items').doc(props.id);
        cartItem.get()
        .then((doc)=>{
            if(doc.exists){
                cartItem.update({
                    quantity: parseInt(doc.data().quantity) + 1
                })
            } else {
                cartItem.set({
                    title: props.title,
                    image: props.image,
                    price: props.price,
                    quantity: 1
                })
            }
        })
        
    }
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
            <button onClick={addToCart} >Add to Cart</button>
        </div>
    )
}

export default Product
