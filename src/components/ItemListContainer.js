import {useState} from 'react';
import ItemCount from './ItemCount';
import * as RBS from 'react-bootstrap';
import './ItemListContainer.css';


const ItemListContainer = (props) => {
  const[stock, setStock] = useState(props.stock);

  const restarStock = (e, qtyBuy) => {
    console.log(e, "function restarStock");
    e.preventDefault();
    if (stock - qtyBuy >= 0) {
      setStock((stock) => stock - qtyBuy);
    } else {
      //TO-DO hacer un toast o alguna notificacion de stock insuficiente
    }
  };

  return (
    <RBS.Card style={{ width: '18rem', marginTop:'20px' }}>
      <RBS.Card.Img variant="top" src={process.env.PUBLIC_URL + props.imgSrc}/>
        <RBS.Card.Body>
          <RBS.Card.Title>{props.title}</RBS.Card.Title>
          <RBS.Card.Text>
            {props.desc}
          </RBS.Card.Text>
          <ItemCount stock={stock} initial={1} onAdd={restarStock}></ItemCount>
      </RBS.Card.Body>
    </RBS.Card>
  );
}
export default ItemListContainer;