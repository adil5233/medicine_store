import React, { useState, useEffect, useRef } from 'react';
import './LoginForm.css';

const LoginForm = ({ isVisible, onClose, onLogin, onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignupMode, setSignupMode] = useState(false);

    const formRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click is outside the form container
            if (formRef.current && !formRef.current.contains(event.target)) {
                onClose();
            }
        };
    
        // Attach the event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
    
        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleLogin = () => {
        console.log('Login attempt:', { username, password });
        onClose();
    };

    const handleSignup = () => {
        console.log('Signup attempt:', { username, password });
        onClose();
    };

    const toggleMode = () => {
        setSignupMode(!isSignupMode);
    };

    return isVisible ? (
        <div className={`login-form ${isVisible ? 'slide-in' : ''}`}>
            <div className="form-container" ref={formRef}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignupMode ? (
                    <button onClick={handleSignup}>Signup</button>
                ) : (
                    <button onClick={handleLogin}>Login</button>
                )}
                <p onClick={toggleMode}>
                    {isSignupMode
                        ? 'Already have an account? Login here.'
                        : 'Don\'t have an account? Signup here.'}
                </p>
            </div>
        </div>
    ) : null;
};

export default LoginForm;
