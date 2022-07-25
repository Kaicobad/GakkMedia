import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/NavMenu/Nav';
import ProductCart from './components/ProductCart/ProductCart';
import AddProduct from './components/AddProduct/AddProduct';
import ProductList from './components/ProductList/ProductList';



export default App;
function App() 
{
  return (
    // <div className="App">
    //   <h1>Hello World</h1>
    // </div>
    <Routes>
        <Route path='/' element={<Nav/>}/>
        <Route path='productcart' element={<ProductCart/>}/>
        <Route path='addproduct' element={<AddProduct/>}/>
        <Route path='productlist' element ={<ProductList/>}/>
    </Routes>
  );
}


