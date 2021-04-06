import {useEffect, useState, useContext} from 'react';
import {CartContext} from '../Context/CartContext';
import ItemCount from '../ItemCount';
import Card from 'react-bootstrap/Card';
import '../../styles/ItemDetail.css';


const ItemDetail = ({Item}) => {
  const [stock, setStock] = useState(0);
  const {addItem} = useContext(CartContext);

  var mySrc = 'url(' + process.env.PUBLIC_URL + Item.pictureUrl + ')';

  useEffect(() => {
      setStock(Item.stock);
  },[Item.stock]);
  
  const restarStock = (e, qtyBuy) => {
    e.preventDefault();

    if (stock - qtyBuy >= 0) {
      addItem(Item, qtyBuy);        // funcion del provider
      setStock(stock - qtyBuy);     // descontar del stock
    } else {
      alert('Sorry...\nNot enough stock');
    }
  };

  return(
    <>
      <Card className='itemDetail'>
        <Card.Header as="h5">{Item.title}</Card.Header>
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