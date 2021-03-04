import CartWidget from './CartWidget';
import logo from '../images/logo.svg';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">

      <div className="container">
        <div className="logobox">
          <img src={logo} className="logo" alt="logo" />
          <h1>MELLOW</h1>
        </div>
        <CartWidget />
      </div>

      <div className="categories">
        <a className="cat-link" href="#" target="_blank">Hombre</a>
        <a className="cat-link" target="_blank">Mujer</a>
        <a className="cat-link" target="_blank">Niños</a>
        <a className="cat-link" target="_blank">Deportes</a>
        <a className="cat-link" target="_blank">Rebajas</a>
      </div>
      
    </div>
  );
}

export default NavBar;
