import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {useEffect, useState} from 'react';

// Database
const myItemsDB = [
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

function App () {
  const[items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {          // async mock
      setTimeout(() => {                        // setTimeout = retraso de 2 segundos para emular retrasos de red
        resolve(myItemsDB)                      // busca los datos de la base y los devuelve
      },5000);
      // then = se ejecuta si la consulta a la base de datos salio bien.
      // en resultado estan los datos de la base y se pasan al statefull con setItems
    }).then(resultado => setItems(resultado))
  });

  return (
    <>
      <NavBar />
      <ItemListContainer Items={items}/>
    </>
  );
}
export default App;
