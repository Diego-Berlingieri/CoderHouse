import * as RBS from 'react-bootstrap';
import Item from './Item';

//<RBS.Col key={index} md={{ span: 4, offset: 1 }} lg={4}></RBS.Col>

function ItemList ({Items}) {
  return(
    <RBS.Row xs={1} md={2} lg={3}>
      {Items.map((item, index) => {
        return(
          <RBS.Col key={index}>
            <Item item={item}/>
          </RBS.Col>
        )
      })}
    </RBS.Row>
  );
}
export default ItemList;