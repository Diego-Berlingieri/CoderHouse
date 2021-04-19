import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

import {useContext} from 'react';
import {LangContext} from '../Context/LangContext';

function EmptyCart () {
  const {lang} = useContext(LangContext);

  return(
    <>
      <h3>{lang.empty_cart_msg}</h3>
      <Link to={"/"}>
         <Button variant="primary">{lang.Back_to_store}</Button>
      </Link>
    </>
  );
}
export default EmptyCart;
