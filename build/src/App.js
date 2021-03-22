import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import AboutUs from './components/AboutUs';


function App () {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ItemListContainer} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/itemDetail/:id?' component={ItemDetailContainer} />
          <Route path='/itemList/:category?' component={ItemListContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
