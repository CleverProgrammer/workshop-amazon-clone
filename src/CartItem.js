import React from 'react'
import './CartItem.css'
import { db } from './firebase';

function CartItem({ id, cartItem }) {

    const deleteItem = () => {
        db.collection('cart-items').doc(id).delete();
    }


    const changeQuantity = (newQuantity) => {
        db.collection('cart-items').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }
    

    let options = [];

    for(let i = 1; i < Math.max(cartItem.quantity+1, 20); i++){
        options.push(<option value={i}>Qty: {i}</option>)
    }

    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src={cartItem.image} />
            </div>
            <div className="CartItem-info">
                <div className="CartItem-title">
                    {cartItem.title}
                </div>
                <div className="CartItem-actions">
                    <div className="CartItem-quantity">
                        <select 
                            onChange={(e) => changeQuantity(e.target.value)}
                            value={cartItem.quantity}>
                            {options}
                        </select>
                    </div>
                    <div 
                        onClick={deleteItem}
                        className="CartItem-delete">
                        Delete
                    </div>
                </div>

            </div>
            <div className="CartItem-price">
                ${cartItem.price}
            </div>
        </div>
    )
}

export default CartItem
