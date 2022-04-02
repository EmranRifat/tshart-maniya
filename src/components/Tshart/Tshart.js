import React from 'react';
import './Tshart.css'

const Tshart = (props) => {
    const { handleAddToCart, tshart } = props;
    const { name, picture, price } = tshart;
    // console.log(props);
    return (
        <div className='t-shart'>

            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price:$ {price}</p>
            <button onClick={() => handleAddToCart(tshart)}>AddToCart</button>

        </div>
    );
};

export default Tshart;