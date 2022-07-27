import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductCart from './components/ProductCart/ProductCart';
import AddProduct from './components/AddProduct/AddProduct';
import ProductList from './components/ProductList/ProductList';
import NavBar from './components/NavBar/NavBar'



export default App;
function App() 
{
  return (
    // <div className="App">
    //   <h1>Hello World</h1>
    // </div>
    <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='productcart' element={<ProductCart/>}/>
        <Route path='addproduct' element={<AddProduct/>}/>
        <Route path='productlist' element ={<ProductList/>}/>
    </Routes>
  );
}


