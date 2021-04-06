import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../Firebase';

import ItemDetail from './ItemDetail';


function ItemDetailContainer () {
    const[item, setItem] = useState([]);        // statefull
    let{id} = useParams();
    //console.log('ItemDetailContainer.js - param: ', id);
  
    useEffect(() => {
      // setLoading(true);
      const db = getFirestore();
      const itemCollection = db.collection('items');
      const item = itemCollection.doc(id);

      item.get().then((doc) => {
        if (!doc.exists) {
          console.log('Item does not exist - id: ', id);
          return;
        }
        console.log('Item found');
        setItem({id: doc.id, ...doc.data()});

      }).catch((error) => {
        console.log('Error searching items', error);
      }).finally(() => {
        //setLoading(false);
      });
    },[id]);

    return (
      <>{console.log(item)}
        <ItemDetail Item={item}/>
      </>
    );
  }
  export default ItemDetailContainer;
