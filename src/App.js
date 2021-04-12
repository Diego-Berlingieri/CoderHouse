import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';

import {CartProvider} from './components/Context/CartContext';


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
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}
export default App;