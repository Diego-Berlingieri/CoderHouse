import {Link} from 'react-router-dom';
import '../../styles/cartWidget.css';

// Se puede agregar estado del cart. "empty cart", contador de items y/o un subtotal $
function CartWidget() {
    return (
      <Link to={"/cart/"}>
        <i className="fas fa-shopping-cart"></i>
      </Link>
    );
  }
export default CartWidget;