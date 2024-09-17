import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    const items = localStorage.getItem("cartItems");
    if (items) {
      setCartItems([...JSON.parse(items)]);
      setIsLoaded(true);
    }
  }, []);

  function addItemToCart(item) {
    const arr = cartItems;
    const productIndex = cartItems.findIndex((data) => data.id == item.id);
    if (productIndex === -1) {
      arr.push(item);
    } else {
      arr[productIndex].quantity++;
    }
    setCartItems([...arr]);
  }
  function lessQuanityFromCart(id) {
    const arr = cartItems;
    const productIndex = cartItems.findIndex((data) => data.id == id);
    arr[productIndex].quantity--;
    setCartItems([...arr]);
  }
  function removeItemFromCart(id) {
    const arr = cartItems;
    const productIndex = cartItems.findIndex((data) => data.id == id);
    arr.splice(productIndex, 1);
    setCartItems([...arr]);
  }

  function isItemAdded(id) {
    const productIndex = cartItems.findIndex((data) => data.id == id);
    if (productIndex == -1) {
      return null;
    } else {
      return cartItems[productIndex];
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        lessQuanityFromCart,
        addItemToCart,
        removeItemFromCart,
        isItemAdded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
