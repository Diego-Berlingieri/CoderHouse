import {Form, Button, Col} from 'react-bootstrap';
import '../../styles/ItemDetail.css';
import {useState, useEffect, useContext, React} from 'react';

import {LangContext} from '../Context/LangContext';

function ItemCount ({stock, initial, onAdd}) {
  const {lang} = useContext(LangContext);

  const[qty, setQty] = useState(initial);
  
  const[btnPlus, setBtnPlus] = useState(false);
  const[btnMinus, setBtnMinus] = useState(true);
  const[btnAdd, setBtnAdd] = useState(false);
  
  function handleQty(operation){
    if (operation === 'plus' && qty < stock) {
        setQty(qty + 1);
    } else if(operation === 'minus' && qty > 1) {
        setQty(qty - 1); 
    }
  }

  useEffect(() => {                 // run when stock or qty changes
    if (qty === 0) {                // to avoid qty = 0 at start.
      setQty(1);
    } else if (qty > stock && stock > 0) {
      setQty(stock);                // after a purchase, qty must be <= stock.
    }

    qty<=1 ? 
    setBtnMinus(true) : 
    setBtnMinus(false);             // block minus button

    qty<=stock-1 ?
    setBtnPlus(false) : 
    setBtnPlus(true);               // block plus button
    
    (stock >= qty && qty > 0) ? 
    setBtnAdd(false) : 
    setBtnAdd(true);                // block addToCart button
  }, [qty, stock]);

  
  return(
    <Form>
      <Form.Row>
        <Col xs="auto">
          <Button className="btn btn-default btn-number" variant="outline-secondary"
            onClick={(e) => handleQty('minus')} disabled={btnMinus}>
            <i className="fas fa-minus"></i>
          </Button>
        </Col>

        <Col xs={3}>
          <Form.Control type="input" value={qty} readOnly />
        </Col>

        <Col xs={2}>
          <Button className="btn btn-default btn-number" variant="outline-secondary"
            onClick={(e) => handleQty('plus')} disabled={btnPlus}>
            <i className="fas fa-plus"></i>
          </Button>
        </Col>

        <Col xs={{ span: 4, offset: 0 }}>
          <Button variant="dark"
           onClick={(e) => onAdd(e, qty)} disabled={btnAdd}>
             {lang.add_to_cart}
          </Button>
        </Col>

      </Form.Row>
      Cur.Stock: {stock}
    </Form>
  );
}
export default ItemCount;
