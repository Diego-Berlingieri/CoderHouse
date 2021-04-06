import {useContext} from 'react';
import {CartContext} from '../Context/CartContext';
import {Link} from 'react-router-dom';
import '../../styles/cartWidget.css';

// Se puede agregar estado del cart. "empty cart", contador de items y/o un subtotal $
function CartWidget() {
  const { cart, getCartTotals } = useContext(CartContext);
 
  return (
    <>
    <Link to={getCartTotals().qty > 0 ? "/cart/" : "#"}
          className={getCartTotals().qty > 0 ?  'cartQty' : 'disabledCart'}>

      {getCartTotals().qty} items
      <i className="fas fa-shopping-cart"></i>
    </Link>
    </>
  );
}
export default CartWidget;