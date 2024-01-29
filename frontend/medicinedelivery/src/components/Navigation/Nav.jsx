import React, { useState } from 'react';
import './Nav.css';
import LoginForm from '../Login/LoginForm';
import login from './assests/login.svg';
import cart from './assests/cart.svg';
import offers from './assests/offers.svg';

const Nav = () => {

    const [isLoginFormVisible, setLoginFormVisible] = useState(false);

    const handleLogin = () => {
        // Perform actions after successful login
        // For example, update the user's login status or fetch user data
        console.log('User logged in!');
        // Close the login form
        setLoginFormVisible(false);
    };

    const toggleLoginForm = (e) => {
        e.preventDefault();
        setLoginFormVisible(!isLoginFormVisible);
    };

    return (
        <nav>
            <ul>
                <li><a href="/login" onClick={toggleLoginForm}><span><img src={login} alt="" srcset="" /></span>Hello, Log in</a></li>
                <li> <LoginForm
                isVisible={isLoginFormVisible}
                onClose={() => setLoginFormVisible(false)}
                onLogin={handleLogin}/></li>
                <li><a href="/products"><span><img src={offers} alt="" srcset="" /></span>Offers</a></li>
                <li><a href="/cart"><span><img src={cart} alt="" srcset="" /></span>Cart</a></li>
            </ul>
        </nav>
    );
};

export default Nav;