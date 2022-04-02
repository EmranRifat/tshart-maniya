import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Grandpa from './../Ghandpaa/Grandpa';

const Header = () => {
    return (
        <div>
            <h2>Header page pong pong</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/grandpa">Grandpa</Link>

            </nav>
        </div>

    );
};

export default Header;