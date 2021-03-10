// style sin usar un css externo (dentro del .js)
const cartStyle = {
  color: 'white',
  textdecoration: 'none',
  cursor:'pointer',
};

// Se puede agregar estado del cart. "empty cart", contador de items y/o un subtotal $
function CartWidget() {
    return (
      <i className="fas fa-shopping-cart" style={cartStyle}></i>
    );
  }
export default CartWidget;