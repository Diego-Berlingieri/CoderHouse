import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getItemById} from '../Firebase';

import ItemDetail from './ItemDetail';


function ItemDetailContainer () {
    const[item, setItem] = useState([]);        // statefull
    let{id} = useParams();

    useEffect(() => {
      getItemById(id).then(
        result => 
        {if (result.status === "success") {
          setItem(result.item)
        }}
      )
    },[id]);


    return (
      <>{/*console.log(item)*/}
        <ItemDetail Item={item}/>
      </>
    );
  }
  export default ItemDetailContainer;
