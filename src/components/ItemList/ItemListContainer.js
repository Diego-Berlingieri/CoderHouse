import Container from 'react-bootstrap/Container'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import '../../styles/ItemListContainer.css';
import ItemList from './ItemList';


function ItemListContainer () {
  const[items, setItems] = useState([]);        // statefull
  let{category} = useParams();
  

  useEffect(() => {                             // 
    new Promise((resolve, reject) => {          // async mock
      setTimeout(() => {                        // setTimeout = retraso de 2 segundos para emular retrasos de red
        resolve(                                // busca los datos de la base y los devuelve
          require('../../assets/myDataBase.json') 
        )        
      }, 2000);
      // then = se ejecuta si la consulta a la base de datos salio bien.
      // en resultado estan los datos de la base y se pasan al statefull con setItems
    }).then((consulta) => {                    // 'then' se ejecuta si la consulta a la base de datos salio bien
      var found = consulta.filter(
      function (curElement) {
        if (category) {
          return curElement.category === category;
        } else {
          return consulta;
        }
      }
    );
    return found                              // recorre el array y devuelve found donde category = props.category
  })
  .then(resultado => setItems(resultado))     // pasar found al statefull con setItem
},[category]);
  
  return (
    <Container>
      <ItemList Items={items} />
    </Container>
  );
}
export default ItemListContainer;
