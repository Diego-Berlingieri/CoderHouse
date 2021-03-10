import * as RBS from 'react-bootstrap';
import {useState} from 'react';

function ItemCount ({stock, initial, onAdd}) {
  const[qty, setQty] = useState(0);

  return(
    <form>
      Current Stock: {stock}
      <br/>
      <input id='cant' type='number' placeholder={'max: ' + stock} onChange={e => setQty(e.target.value)}></input>
      <RBS.Button      
        onClick={(e) => onAdd(e, qty)}
        className="buyBtn" variant="primary">Agregar al carro
      </RBS.Button>
    </form>
  );
}
export default ItemCount;

