import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/products">Contact</a></li>
                <li><a href="/products">About us</a></li>
            </ul>
        </nav>
    );
};

export default Nav;