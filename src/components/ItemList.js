import * as RBS from 'react-bootstrap';
import Item from './Item';


function ItemList ({Items}) {
  return(
    <>
      <RBS.Row className='item'>
      {Items.map((item, index) => {
        return(
          <RBS.Col key={index}>
            <Item item={item}/>
          </RBS.Col>
        )
      })}
      </RBS.Row>
    </>
  );
}
export default ItemList;