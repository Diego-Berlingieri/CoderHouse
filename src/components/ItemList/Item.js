import Card from 'react-bootstrap/Card'
import {useState} from 'react';
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom';


const Item = ({item}) => {
  const[stock, setStock] = useState(item.stock);  

  const restarStock = (e, qtyBuy) => {
    e.preventDefault();
    if (stock - qtyBuy >= 0) {
      setStock(stock - qtyBuy);
    } else {
      alert('Sorry...\nNot enough stock');
    }
  };

  
  return(
    <Card style={{ width: '18rem', marginTop:'20px' }}>
      <Link to={"/itemDetail/" + item.id}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + item.pictureUrl} />
      </Link>  
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </Card.Text>
        <ItemCount stock={stock} initial={1} onAdd={restarStock}></ItemCount>
    </Card.Body>
  </Card>
  );
}
export default Item;