import React from 'react'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import './Cart.css'

function Cart(props) {
    return (
        <div className="Cart">
            <CartItems cartItems={props.cartItems}   />
            <CartTotal cartItems={props.cartItems}  />
        </div>
    )
}

export default Cart
