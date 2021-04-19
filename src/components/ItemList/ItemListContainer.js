import Container from 'react-bootstrap/Container'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getItemList} from '../Firebase';

import '../../styles/ItemListContainer.css';
import ItemList from './ItemList';


function ItemListContainer () {
  const[items, setItems] = useState([]);        // statefull
  let{category} = useParams();


  useEffect(() => {
    getItemList(category).then(
      result => 
      {if (result.status === "success") {
        setItems(result.items)
      }}
    )
  },[category]);
  

  return (
    <Container>
      <ItemList Items={items} />
    </Container>
  );
}
export default ItemListContainer;
