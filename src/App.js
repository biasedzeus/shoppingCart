import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css"
import BuySection from "./components/BuySection";

import { Container,Row,Col } from "reactstrap";
import Cart from './components/Cart';
import './App.css';



function App() {
  const [cartItem,setCartItem] = useState([]);


  const addIncart = item => {
  const isAlreadyincart = cartItem.findIndex(function(array){
    return array.id === item.id;
    
  });

  console.log("ALREADY:",isAlreadyincart);
  if(isAlreadyincart !== -1){
    toast("Item already in the cart", {type:"error",position:'top-center'});
    return;

  }


  setCartItem([...cartItem,item])

   toast("Item added to cart",{
    type:"success",
    position: 'top-center',
    style:{
      textAlign:'center',

    }
  })
  }

  const buyNow = () => {

    setCartItem([])
    toast("Purchase Complete",{
      type:"success"
    })
  }

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
  };







return (<Container fluid>

  <ToastContainer
  position="bottom-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  />
  <Row>
    <Col md= "8">
    <BuySection addIncart = {addIncart}/>
    </Col>
    <Col md="4">
      <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
    </Col>
  </Row>

</Container>


    // <div>
    //   <BuySection addIncart = {addIncart}/>

    // </div>
    
  )

    
}

export default App;
