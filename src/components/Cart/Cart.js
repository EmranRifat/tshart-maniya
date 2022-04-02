import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering
    let command;

    if (cart.length === 0) {
        command = <p>Please add some items..</p>
    }
    else {
        command = <p><small>Thanks for adding</small></p>
    }




    return (
        <div>
            <h1>Total Items: {cart.length}</h1>
            {command}
            {
                cart.map(tshart => <p>
                    {tshart.name}
                    <button onClick={() => handleRemoveFromCart(tshart)}>X</button>
                </p>)

            }
        </div>
    );
};

export default Cart;