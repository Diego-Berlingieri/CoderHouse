import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Routes from './components/Routes';
import NavBar from './components/NavBar/NavBar';

import {CartProvider} from './components/Context/CartContext';
import {LangProvider} from './components/Context/LangContext';


function App () {
  return (
    <>
    <CartProvider>
      <LangProvider langId={navigator.language.substring(0, 2)}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          {Routes}
        </Switch>
      </BrowserRouter>
    </LangProvider>
    </CartProvider>
    </>
  );
}
export default App;
