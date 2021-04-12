import React, { useState } from "react";


export const CartContext = React.createContext();


export default function CartProvider(props) {
  const [cart, setCart] = useState([]);


  function clearCart() {                    // Remover todos los items.
    setCart([]);
  };

  function removeItem(id) {                // Remover un item del cart
    // cart.splice(i,1); no actualiza el componente.
    let newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].Item.id !== id) {
        newCart.push(cart[i])
      }
    }
    setCart(newCart);
  };

  function addItem(Item, qtyBuy) {        // Agregar cierta cantidad de un item al carrito.
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].Item.id === Item.id) {
        qtyBuy = qtyBuy + cart[i].qtyBuy;
        cart.splice(i,1);
      }
    }
    setCart([ ...cart, {Item, qtyBuy} ]);
  };

  /*function isInCart(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].Item.id === id) {
        return true;
      }
    }
    return false;
  }*/

  function getCartTotals(){
    let totalQty = 0;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = total + (cart[i].Item.price * cart[i].qtyBuy);
      totalQty = totalQty + cart[i].qtyBuy;
    }
    return {total: total, qty: totalQty};
  }

  
  return (
    <CartContext.Provider value={{ cart, setCart, clearCart, removeItem, addItem, getCartTotals }}>
      {props.children}
    </CartContext.Provider>
  );
}
export { CartProvider };