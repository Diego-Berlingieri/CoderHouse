import firebase from "firebase/app";
import {getFirestore} from '../Firebase.js';
import "firebase/firestore";

import {useState, useContext} from 'react';
import {CartContext} from '../Context/CartContext';

import {Form, Button, Container} from 'react-bootstrap';


function Checkout() {
  const {cart, getCartTotals, clearCart} = useContext(CartContext);
  const [orderId, setOrderId] = useState();
  const [db] = useState(getFirestore());

  function ready() {
    //validate document.getElementById("nameId").value
    //validate document.getElementById("phoneId").value,
    //validate document.getElementById("emailId").value,
    //cartIsNotEmpty
  }

  function create() {
    // hacer la conversion de cart al objeto solicitado en el enunciado.
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
    }//console.log('newOrder', newOrder);
    
    const orders = db.collection("orders");
    
    orders.add(newOrder).then((resp) => {
      //console.log(resp.id);
      setOrderId(resp.id);
      clearCart();
    });

    
  }

  return (
    <Container>
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" id="nameId"/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Your phone" id="phoneId"/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Your email" id="emailId"/>
      </Form.Group>

      <Form.Group>
        <Button variant="success" onClick={create} >Save order</Button>
      </Form.Group>

      <Form.Group>
        <Form.Label>Your order is</Form.Label>
        <Form.Control type="text" placeholder="save order..." value={orderId} readOnly/>
      </Form.Group>
    </Form>
    </Container>
  );
}

export default Checkout;