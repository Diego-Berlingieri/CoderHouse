import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from '../Context/CartContext';
import {LangContext} from '../Context/LangContext';

import {Button, Col, Card, Row} from 'react-bootstrap';

function CartList () {
  const {cart, removeItem, clearCart, getCartTotals} = useContext(CartContext);
  const {lang} = useContext(LangContext);

  return(
    <>{
    cart.map((item, index) => {
        return(            
          <Card key={index} style={{ marginTop:'5px' }}>
          <Card.Header as="h5">
            <Row>
              <Col>{item.Item.title}</Col>
              <Col xs="auto"><i className="fas fa-trash-alt" onClick={(e) => removeItem(item.Item.id)}></i></Col>
            </Row>
          </Card.Header>

          <Card.Body>
          <Row>
            <Col xs="auto">
              <div className='cartPicContainer'>
                <Card.Img src={item.Item.cloudinary} />
              </div>
            </Col>
            <Col>
              <Card.Text>{item.Item.description}</Card.Text>
              <Card.Text>Qty: {item.qtyBuy} x Item Price: ${item.Item.price} = $ {item.qtyBuy * item.Item.price}</Card.Text>        
            </Col>
          </Row>
          </Card.Body>
          </Card>
        )
      }) // end map
    }
    
    <Card.Footer className="cartFooter">
      <Row>
        <Col xs="auto">
          <h4>{lang.total}: $ {getCartTotals().total}</h4>
        </Col>
        <Col xs="auto">
          <Link to={"/checkout"}>
            <Button variant="success" disabled={cart.length > 0 ? false : true }>
              {lang.checkout}</Button>
          </Link>
        </Col>
        <Col xs="auto">
          <Button variant="danger" disabled={cart.length > 0 ? false : true }
            onClick={(e) => clearCart()}>
            {lang.empty_cart}</Button>
        </Col>
      </Row>
    </Card.Footer>
    </>
    );// end return

} //end function CartList
export default CartList;
