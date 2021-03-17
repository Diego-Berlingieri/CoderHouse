import {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';


function ItemDetailContainer (props) {
    console.log('ItemDetailContainer.js - props.id', props.id);
    const[item, setItem] = useState([]);        // statefull
  
    useEffect(() => {
      new Promise((resolve, reject) => {        // async mock
        setTimeout(() => {                      // setTimeout = retraso de 2 segundos para emular retrasos de red
          resolve(myItemsDB2)                   // busca los datos de la base y los devuelve
        }, 3000);
      })
      .then((consulta2) => {                    // 'then' se ejecuta si la consulta a la base de datos salio bien
        var found = consulta2.find(
          function (curElement) {
            return curElement.id === parseInt(props.id);
          }
        );
        return found                            // recorre el array y devuelve found donde id = props.id
      })
      .then(resultado => setItem(resultado))    // pasar found al statefull con setItem
    },[]);
  
    return (
      <>
        {console.log('ItemDetailContainer.js - return', item)}
        <ItemDetail Item={item}/>
      </>
    );
  }
  export default ItemDetailContainer;

  
// Database
const myItemsDB2 = [
  { id: 1,
    title: 'Zapatillas',
    description: 'Zapatillas de cuero talle 43',
    price: 4000,
    stock: 10,
    pictureUrl: '/images/products/4.webp',
  },
  { id: 2,
    title: 'Campera',
    description: 'Campera Hombre talle M',
    price: 7000,
    stock: 5,
    pictureUrl: '/images/products/5.webp',
  },
  { id: 3,
    title: 'Jean',
    description: 'Jean Regular talle 32',
    price: 2500,
    stock: 7,
    pictureUrl: '/images/products/2.webp',
  },
  { id: 4,
    title: 'Remera',
    description: 'Remera Mujer talle S',
    price: 950,
    stock: 5,
    pictureUrl: '/images/products/1.webp',
  },
  { id:5,
    title: 'Sweater',
    description: 'Sweater Mujer talle S',
    price: 1800,
    stock: 20,
    pictureUrl: '/images/products/3.webp',
  },
]