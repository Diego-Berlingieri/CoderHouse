import {useContext, useEffect} from 'react';
import {CartContext} from '../Context/CartContext';

import CartList from './CartList';
import EmptyCart from './EmptyCart';

import {Container} from 'react-bootstrap';
import '../../styles/cart.css';


function Cart () { 
  const {cart, getCartTotals} = useContext(CartContext);

  useEffect(() => {                 // run when stock or qty changes
  },[cart]);

  
  return(
    <Container>
      {getCartTotals().qty === 0 
      ? <EmptyCart/>
      : <CartList/>
    }
    </Container>
  );
}
export default Cart;
