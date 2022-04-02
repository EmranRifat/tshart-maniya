import React from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import useTshart from './../../hooks/useTshart';
import Tshart from '../Tshart/Tshart';
import { useState } from 'react';

const Home = () => {
    const [tSharts, setTsharts] = useTshart();
    const [cart, setCart] = useState([]);


    const handleAddToCart = (selectedItem) => {

        const exists = cart.find(tShart => tShart.id === selectedItem.id);
        if (!exists) {

            const newCart = [...cart, selectedItem]
            setCart(newCart);
        }
        else {
            alert('Item alredy added')
        }
        // const newCart = [...cart, selectedItem]
        // setCart(newCart);


    }
    const handleRemoveFromCart = (selectedItem) => {
        // console.log(selectedItem);
        const rest = cart.filter(tShart => tShart.id !== selectedItem.id);
        setCart(rest);

    }


    return (
        < div className='home-container'>

            <div className='tshart-container'>
                {
                    tSharts.map(tShart => <Tshart
                        key={tShart.id}
                        tshart={tShart}
                        handleAddToCart={handleAddToCart}

                    ></Tshart>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}
                > </Cart>

            </div>


        </div>
    );
};

export default Home;