import React from 'react';
import ProductList from './components/ProductList/ProductList';


const App = () => {
    return (
        <div>
            {/* Other components, header, etc. can go here */}
            <main>
                <ProductList />
            </main>
        </div>
    );
};

export default App;
