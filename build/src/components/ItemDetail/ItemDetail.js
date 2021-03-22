import Card from 'react-bootstrap/Card';
import '../../styles/ItemDetail.css';
import ItemCount from '../ItemCount';
import {useEffect, useState} from 'react';


const ItemDetail = ({Item}) => {
  const[stock, setStock] = useState(0);

  var mySrc = 'url(' + process.env.PUBLIC_URL + Item.pictureUrl + ')';

  useEffect(() => {
      setStock(Item.stock);
  },[Item.stock]);
  
  const restarStock = (e, qtyBuy) => {
    console.log(e, "function restarStock");
    e.preventDefault();
    if (stock - qtyBuy >= 0) {
      setStock(stock - qtyBuy);
    } else {
      alert('Sorry...\nNot enough stock');
    }
  };

  return(
    <>
      {console.log('ItemDetail.js - Return ', Item)}
      <Card className='itemDetail'>
        <Card.Header Header as="h5">{Item.title}</Card.Header>
        <div className='itemDetailPicContainer' style={{ backgroundImage: mySrc }} />        
        <Card.Body>
          <Card.Text>Product No: {Item.id}</Card.Text>
          <Card.Text>Description: {Item.description}</Card.Text>
          <Card.Text>Price: ${Item.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <ItemCount stock={stock} initial={1} onAdd={restarStock}></ItemCount>
        </Card.Footer>
      </Card>
    </>
  );
}
export default ItemDetail;