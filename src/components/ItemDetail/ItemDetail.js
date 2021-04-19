import {useEffect, useState, useContext} from 'react';

import {CartContext} from '../Context/CartContext';
import {LangContext} from '../Context/LangContext';

import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import '../../styles/ItemDetail.css';


const ItemDetail = ({Item}) => {
  const [stock, setStock] = useState(0);
  const {addItem} = useContext(CartContext);
  const {lang} = useContext(LangContext);

  //var mySrc = 'url(' + process.env.PUBLIC_URL + Item.pictureUrl + ')';
  //<div className='itemDetailPicContainer' style={{ backgroundImage: mySrc }} />

  useEffect(() => {
      setStock(Item.stock);
  },[Item.stock]);
  
  const restarStock = (e, qtyBuy) => {
    e.preventDefault();

    if (stock - qtyBuy >= 0) {
      addItem(Item, qtyBuy);        // funcion del cartProvider
      setStock(stock - qtyBuy);     // descontar del stock
    } else {
      alert('Sorry...\nNot enough stock');
    }
  };

  return(
    <>
      <Card className='itemDetail'>
        <Card.Header as="h5">{Item.title}</Card.Header>
        <Card.Img variant="top" className='cardImage' src={Item.cloudinary} />
        <Card.Body>
          <Card.Text>{lang.description}: {Item.description}</Card.Text>
          <Card.Text>{lang.price}: ${Item.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <ItemCount stock={stock} initial={1} onAdd={restarStock}></ItemCount>
        </Card.Footer>
      </Card>
    </>
  );
}
export default ItemDetail;
