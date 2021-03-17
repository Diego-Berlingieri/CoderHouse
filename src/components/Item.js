import * as RBS from 'react-bootstrap';
import {useState} from 'react';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';


const Item = ({item}) => {
  const[stock, setStock] = useState(item.stock);  


  const restarStock = (e, qtyBuy) => {
    console.log(e, "function restarStock");
    e.preventDefault();
    if (stock - qtyBuy >= 0) {
      setStock((stock) => stock - qtyBuy);
    } else {
      //TO-DO hacer un toast o alguna notificacion de stock insuficiente
    }
  };

  //TO-DO hacer la navegacion para ItemDetail
  const showItemDetail = (e, item) => {
    console.log("function showItemDetail. Item Id:", item.id);
      return(
        <>      
        <ItemDetailContainer itemId={item.id} />
        </>
      );
  };

  //Al hacer clic la Card. Se llama al metodo showItemDetail.
  return(
    <RBS.Card style={{ width: '18rem', marginTop:'20px' }} onClick={(e) => showItemDetail(e, item)}>
    <RBS.Card.Img variant="top" src={process.env.PUBLIC_URL + item.pictureUrl} />
      <RBS.Card.Body>
        <RBS.Card.Title>{item.id}. {item.title}</RBS.Card.Title>
        <RBS.Card.Text>
          {item.description}
          <br/>
          Price: ${item.price}
        </RBS.Card.Text>
        <ItemCount stock={stock} initial={1} onAdd={restarStock}></ItemCount>
    </RBS.Card.Body>
  </RBS.Card>
  );
}
export default Item;