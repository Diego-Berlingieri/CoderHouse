import * as RBS from 'react-bootstrap';
import './ItemListContainer.css';
import ItemList from './ItemList';


function ItemListContainer (props) {
  return (
    <RBS.Container>
      <ItemList Items={props.Items} />
    </RBS.Container>
  );
}
export default ItemListContainer;