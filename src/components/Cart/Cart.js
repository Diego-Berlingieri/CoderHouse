import {useContext, useEffect} from 'react';
import {CartContext} from '../Context/CartContext';
import {Link} from 'react-router-dom';

import {Button, Col, Card, Row, Container} from 'react-bootstrap';
import '../../styles/cart.css';


function Cart () { 
  const {cart, clearCart, removeItem, getCartTotals} = useContext(CartContext);

  useEffect(() => {                 // run when stock or qty changes
  },[cart]);


  return(
    <Container>

      {getCartTotals().qty == 0 
      ? <>
        <h3>Your cart is empty</h3>
        </>
        
      : cart.map((item, index) => {
        return(            
          <Card style={{ marginTop:'5px' }}>
          <Card.Header Header as="h5">
            <Row>
              <Col>{item.Item.title}</Col>
              <Col xs="auto"><i class="fas fa-trash-alt" onClick={(e) => removeItem(item.Item.id)}></i></Col>
            </Row>
          </Card.Header>

          <Card.Body>
          <Row>
            <Col xs="auto">
              <div className='cartPicContainer'>
                <Card.Img src={process.env.PUBLIC_URL + item.Item.pictureUrl} />
              </div>
            </Col>
            <Col>
              <Card.Text>Cart Item: {index+1}</Card.Text>
              <Card.Text>{item.Item.description}</Card.Text>
              <Card.Text>Qty: {item.qtyBuy} x Item Price: ${item.Item.price} = $ {item.qtyBuy * item.Item.price}</Card.Text>        
            </Col>
          </Row>
          </Card.Body>
          </Card>
        )
      })
      
      }
      
        
      <Card.Footer className="cartFooter">
      <Row>
        <Col xs="auto">
          <h4>Total: $ {getCartTotals().total}</h4>
        </Col>
        <Col xs="auto">
          <Button variant="success" disabled={cart.length > 0 ? false : true }>
            Go to Payment</Button>
        </Col>
        <Col xs="auto">
          <Button variant="danger" disabled={cart.length > 0 ? false : true }
            onClick={(e) => clearCart()}>
            Empty Cart</Button>
        </Col>
      </Row>
      </Card.Footer>
  
        <Link to={"/"}>
          <Button variant="primary">Back to Store</Button>
        </Link>
          
      </Container>
  );
}
export default Cart;
