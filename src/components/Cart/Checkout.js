import firebase from "firebase/app";
import {saveOrder} from '../Firebase.js';
import "firebase/firestore";

import {useState, useContext} from 'react';
import {CartContext} from '../Context/CartContext';
import {LangContext} from '../Context/LangContext';

import {Form, Button, Container} from 'react-bootstrap';


function Checkout() {
  const {lang} = useContext(LangContext);
  const {cart, getCartTotals, clearCart} = useContext(CartContext);
  
  const [orderId, setOrderId] = useState();
  const [orderComments, setOrderComments] = useState();
  
  function ready() {
    let formError = lang.cart_err;
    let isReady = true;

    if (document.getElementById("nameId").value === "") {
      formError = formError + '\n- ' + lang.cart_err_name;
      isReady = false;
    }
    if (document.getElementById("phoneId").value === "") {
      formError = formError + '\n- ' + lang.cart_err_phone;
      isReady = false;
    }
    if (document.getElementById("emailId").value === "") {
      formError = formError + '\n- ' + lang.cart_err_email;
      isReady = false;
    }
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!document.getElementById("emailId").value.match(mailformat)) {
      formError = formError + '\n- ' + lang.cart_err_email_invalid;
      isReady = false;
    }
    if (getCartTotals().qty === 0){
      formError = formError + '\n- ' + lang.cart_err_empty_cart;
      isReady = false;
    }

    if (isReady) {
      return true;        // Save cart
    } else {
      alert(formError);   // Show error
      return false;     
    }
  }
  

  function create() {
    if (!ready()) {
      return;             // if not ready, exit function
    };

    const newOrder = {
      buyer: { name: document.getElementById("nameId").value,
               phone: document.getElementById("phoneId").value, 
               email: document.getElementById("emailId").value,
             },
      items: [],
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: getCartTotals().total,
    };
    for (let i = 0; i < cart.length; i++) {
      newOrder.items.push({
        id: cart[i].Item.id,
        title: cart[i].Item.title,
        price: cart[i].Item.price,
        quantity: cart[i].qtyBuy,
      })    
    } //console.log('newOrder', newOrder);
    
    saveOrder(newOrder).then(
      result => 
      {if (result.status === "success") {
        setOrderId(result.orderId);
        clearCart();
        document.getElementById("nameId").value = "";
        document.getElementById("phoneId").value = "";
        document.getElementById("emailId").value = "";

        if (result.removedItems.length > 0) {
          let msg = lang.stock_limit_msg;

          for (let i = 0; i < result.removedItems.length; i++) {
            console.log(result.removedItems[i]);
            msg = (msg + '\n'+ lang.description + ': ' + result.removedItems[i].title);
            msg = (msg + '\n'+ lang.quantity + ': ' + result.removedItems[i].quantity);
          }
          setOrderComments(msg);
        }
      }}
    )
  }

  return (
    <Container>
    <Form>
      <Form.Group>
        <Form.Label>{lang.name}</Form.Label>
        <Form.Control type="text" placeholder={lang.name_hint} id="nameId"/>
      </Form.Group>

      <Form.Group>
        <Form.Label>{lang.phone}</Form.Label>
        <Form.Control type="text" placeholder={lang.phone_hint} id="phoneId"/>
      </Form.Group>

      <Form.Group>
        <Form.Label>{lang.email}</Form.Label>
        <Form.Control type="email" placeholder={lang.email_hint} id="emailId"/>
      </Form.Group>

      <Form.Group>
        <Button variant="success" onClick={create} >{lang.save}</Button>
      </Form.Group>

      <Form.Group>
        <Form.Label>{lang.your_order}</Form.Label>
        <Form.Control type="text" placeholder={lang.your_order_id_hint} value={orderId || ''} readOnly/>
        <Form.Control as="textarea" placeholder={lang.your_order_comments_hint} value={orderComments || ''} rows={10} readOnly/>
      </Form.Group>
    </Form>
    </Container>
  );
}

export default Checkout;
