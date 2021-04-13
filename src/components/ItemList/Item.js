import Card from 'react-bootstrap/Card'
//import {useState} from 'react';
//import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom';

// <Card.Img variant="top" src={process.env.PUBLIC_URL + item.pictureUrl} />

const Item = ({item}) => {

  return(
    <Card style={{ width: '18rem', marginTop:'20px' }}>
      <Link to={"/itemDetail/" + item.id}>
        <Card.Img variant="top" src={item.cloudinary} />
      </Link>  
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Price: ${item.price}</Card.Text>
    </Card.Body>
  </Card>
  );
}
export default Item;
