import {Form, Col, Button} from 'react-bootstrap';
import '../styles/ItemDetail.css';
import {useState} from 'react';


// for default value en input: defaultValue={1}
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
          <Button variant="outline-dark" type="submit"  onClick={(e) => onAdd(e, qty)}>
            Agregar
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
export default ItemCount;

