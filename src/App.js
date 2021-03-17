import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

//TO-DO agregar la navegacion.

function App () {
  console.log('App.js');

  return (
    <>
      {console.log('App.js - return')}
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer id='2' />
    </>
  );
}
export default App;
