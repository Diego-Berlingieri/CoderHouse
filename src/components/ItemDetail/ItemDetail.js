import * as RBS from 'react-bootstrap';
import './ItemDetail.css';

//<RBS.Card.Img className="itemDetailPic" variant="top" src={process.env.PUBLIC_URL + Item.pictureUrl} />

function ItemDetail ({Item}) {
  console.log('ItemDetail.js');
  var mySrc = 'url(' + process.env.PUBLIC_URL + Item.pictureUrl + ')';

  return(
    <>
      {console.log('ItemDetail.js - Return ', Item)}
      <RBS.Card className='itemDetail'>
        <RBS.Card.Header Header as="h5">ITEM DETAIL -{Item.id}. {Item.title}</RBS.Card.Header>
        <div className='itemDetailPicContainer' style={{ backgroundImage: mySrc }} />        
        <RBS.Card.Body>
          <RBS.Card.Text>
            Description: {Item.description}
            <br/>
            Price: ${Item.price}
          </RBS.Card.Text>
        </RBS.Card.Body>
        <RBS.Card.Footer className="text-muted">stock: {Item.stock}</RBS.Card.Footer>
      </RBS.Card>
    </>
  );
}
export default ItemDetail;