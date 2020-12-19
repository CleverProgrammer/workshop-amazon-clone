import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'

function CartItems(props) {
    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">
                {props.cartItems.map((item)=>{
                    return <CartItem 
                        id={item.id}
                        cartItem={item.cartItem}
                    />
                })}
            </div>
            
        </div>
    )
}

export default CartItems
