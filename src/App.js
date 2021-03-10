import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import * as RBS from 'react-bootstrap';

const Items = [
  { title: 'Zapatillas',
    desc: 'Zapatillas de cuero talle 43',
    stock: 10,
    imgSrc: '/images/products/4.webp',
  },
  { title: 'Campera',
    desc: 'Campera Hombre talle M',
    stock: 5,
    imgSrc: '/images/products/5.webp',
  },
  { title: 'Jean',
    desc: 'Jean Regular talle 32',
    stock: 7,
    imgSrc: '/images/products/2.webp',
  },
  { title: 'Remera',
    desc: 'Remera Mujer talle S',
    stock: 5,
    imgSrc: '/images/products/1.webp',
  },
  { title: 'Sweater',
    desc: 'Sweater Mujer talle S',
    stock: 20,
    imgSrc: '/images/products/3.webp',
  },
]

function App () {
    return (
      <>
        <NavBar />
        <RBS.Container>
          <RBS.Row className='item'>
              {Items.map((item, index) => {
                return(
                  <RBS.Col key={index}>
                    <ItemListContainer className='item' title={item.title} desc={item.desc} stock={item.stock} imgSrc={item.imgSrc}/>
                  </RBS.Col>
                )
              })}
            </RBS.Row>
        </RBS.Container>
      </>
    );
  }
  export default App;
