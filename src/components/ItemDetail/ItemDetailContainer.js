import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import ItemDetail from './ItemDetail';


function ItemDetailContainer () {
    const[item, setItem] = useState([]);        // statefull
    let{id} = useParams();
    //console.log('ItemDetailContainer.js - param: ', id);
  
    useEffect(() => {                           // useEffect se ejecuta luego del primer render (simil componentDidMount)
      new Promise((resolve, reject) => {        // async mock
        setTimeout(() => {                      // setTimeout = retraso de 2 segundos para emular retrasos de red
          resolve(
            require('../../assets/myDataBase.json')    // busca los datos de la base y los devuelve
          )
        }, 2000);
      })
      .then((consulta) => {                    // 'then' se ejecuta si la consulta a la base de datos salio bien
        var found = consulta.find(
          function (curElement) {
            return curElement.id === parseInt(id);
          }
        );
        return found                            // recorre el array y devuelve found donde id = props.id
      })
      .then(resultado => setItem(resultado))    // pasar found al statefull con setItem
    },[id]);
  
    return (
      <>{console.log(item)}
        <ItemDetail Item={item}/>
      </>
    );
  }
  export default ItemDetailContainer;
