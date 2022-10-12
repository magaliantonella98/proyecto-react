import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/index'
import ItemListContainer from './containers/ItemListContainer/index';
import Cart from './components/Cart/index'
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<p>Oops :c</p>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
