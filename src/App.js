import React from 'react';
import CartProvider from './Component/CartProvider';
import ProductList from './Component/ProductList';
import Cart from './Component/Cart';

const App = () => (
    <CartProvider>
      <div>
        <h1>Shopping Cart Example</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
)

export default App;
