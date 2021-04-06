import {useContext} from 'react';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import {CartContext, CartProvider} from './components/Context/CartContext';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart/Cart';


function App () {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ItemListContainer} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Cart' component={Cart} />
          <Route path='/itemDetail/:id?' component={ItemDetailContainer} />
          <Route path='/itemList/:category?' component={ItemListContainer} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}
export default App;