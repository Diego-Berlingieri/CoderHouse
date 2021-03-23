import {Form, Col, Button} from 'react-bootstrap';
import '../styles/ItemDetail.css';
import {useState} from 'react';


function ItemCount ({stock, initial, onAdd}) {
  const[qty, setQty] = useState(0);
  
  return(
    <Form>
      Cur.Stock: {stock}
      <Form.Row>
        <Col>
          <Form.Control
            id="qtyFormInput"
            type='number'
            placeholder={'max: ' + stock} onChange={e => setQty(e.target.value)}
          />
        </Col>
        
        <Col>
          <Button variant="dark" type="submit"
           onClick={(e) => onAdd(e, qty)}
           disabled={stock>0? false : true}>
             Add to cart
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
export default ItemCount;

