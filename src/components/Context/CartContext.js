import React, { useState } from "react";


export const CartContext = React.createContext();


export default function CartProvider(props) {
  const [cart, setCart] = useState([]);


  function clearCart() {                    // Remover todos los items.
    console.log('CartContext - clearing cart');
    let newCart = [];
    setCart(newCart);
  };


  function removeItem(id) {                // Remover un item del cart
    console.log('CartContext - removeItem');
    // Si uso el mismo array, no actualiza el componente. Por eso lo copio en un array nuevo.
    // cart.splice(i,1);

    let newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].Item.id !== id) {          // usando el itemId.
      //if (i !== index) {                      // usando su posicion en el carro.
        newCart.push(cart[i])
      }
    }
    setCart(newCart);
  };


  function addItem(Item, qtyBuy) {        // Agregar cierta cantidad de un item al carrito.
    // Si el item esta en el carrito, sumo la cantidad.
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].Item.id === Item.id) {
        cart[i].qtyBuy = cart[i].qtyBuy + qtyBuy;     // no actualiza el cart
        return;
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