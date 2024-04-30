
import './App.css';
import Header from './Components/Headers/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Pages/Main';
import Footer from './Components/Footers/Footer';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import { useState } from 'react';
import Item from './Components/Items/Item';




function App() {
   
const addTocart = (product)=>
{



}

 return (
    <div>
        <BrowserRouter>
     <Header />
 
   <Routes>
   <Route path='/' element={<Main/>}/>
   
   <Route path='/shop' element={<Shop/>}/>
   <Route path='/blog' element={<Blog/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/cart' element={<Cart />}/>
   <Route path='/Shop/:id' element={<ProductDetail/>}/>
   <Route path='/:id' element={<ProductDetail/>}/>


   </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
