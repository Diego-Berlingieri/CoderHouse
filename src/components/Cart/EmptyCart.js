import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


function EmptyCart () {
  return(
    <>
      <h3>Your cart is empty</h3>
      <Link to={"/"}>
         <Button variant="primary">Back to Store</Button>
      </Link>
    </>
  );
}
export default EmptyCart;
