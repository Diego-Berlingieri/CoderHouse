import { Route } from 'react-router-dom';

// Routed component imports
import ItemListContainer from './ItemList/ItemListContainer';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import AboutUs from './AboutUs';
import Cart from './Cart/Cart';
import Checkout from './Cart/Checkout';


const routes = [
    <Route key={1} exact path='/' component={ItemListContainer} />,
    <Route key={2} path='/AboutUs' component={AboutUs} />,
    <Route key={3} path='/Cart' component={Cart} />,
    <Route key={4} path='/itemDetail/:id?' component={ItemDetailContainer} />,
    <Route key={5} path='/itemList/:category?' component={ItemListContainer} />,
    <Route key={6} path='/checkout' component={Checkout} />
];

export default routes;