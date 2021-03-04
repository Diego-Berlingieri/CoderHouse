import React, { Component } from 'react';
import mycart from '../images/cart-solid.svg';

const cartStyle = {
  alignitems: 'center',
  display: 'inline-flex',
};

const icoStyle = {
  height: 40,
  width: 40,
};

// Se puede agregar un contador de items y/o un subtotal $
export default class CartWidget extends Component {
  render() {
    return (
      <div style={cartStyle}>
          <img style={icoStyle} src={mycart} className="cart" alt="shopping cart" />
      </div>
    );
  }
}