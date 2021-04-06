import Container from 'react-bootstrap/Container'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../Firebase';

import '../../styles/ItemListContainer.css';
import ItemList from './ItemList';


function ItemListContainer () {
  const[items, setItems] = useState([]);        // statefull
  let{category} = useParams();

  
  useEffect(() => {
    // setLoading(true);
    const db = getFirestore();
    let itemCollection = null;

    if (!category){
      itemCollection = db.collection('items');
    } else {
      itemCollection = db.collection('items').where('category', '==', category);
    }
    
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No results');
      }
      setItems(querySnapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
        }
      ));
    }).catch((error) => {
      console.log('Error searching items', error);
    }).finally(() => {
      //setLoading(false);
    });
  },[category]);
  

  return (
    <Container>
      <ItemList Items={items} />
    </Container>
  );
}
export default ItemListContainer;
