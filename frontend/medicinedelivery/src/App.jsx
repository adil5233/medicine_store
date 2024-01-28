import React from 'react';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import './App.css'
import Carousel from './components/Carousel/Carousel';


const App = () => {
    return (
        <div>
            {/* Other components, header, etc. can go here */}
            <main>
                <Header/>
                <Nav/>
                <Carousel/>
                <ProductList />
            </main>
        </div>
    );
};

export default App;
