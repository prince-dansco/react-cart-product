import React, { createContext, useState, useEffect } from "react";
import ConfirmOrder from "../confirmOrder/page";

// Create the context outside the component
export const MyContextData = createContext();

export default function ContextData({ children }) {
  const [products, setProducts] = useState([]);
  const [cartState, setCartState] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [showConfirmOrder, setShowConfirmOrder] = useState(false);
  console.log(cartState);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((response) => response.json())
      .then((cart) => {
        console.log(cart);
        setProducts(cart);
      })
      .catch((error) => {
        console.log("Data not found", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  // for adding to cart
  const addToCart = (item) => {
    // checking for duplicates
    if (!cartState.find((cartItem) => cartItem.id === item.id)) {
      setCartState((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  // for incrementing
  const inCrement = (id) => {
    setCartState((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    console.log("showing product", cartState);
  };

  // for decrementing
  const deCrement = (id) => {
    setCartState((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // for removing from cart
  const removeFrom = (id) => {
    setCartState((prev) => prev.filter((item) => item.id !== id));
  };

  const handleTotal = () => {
    return cartState.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleOrder = () => {
    setShowConfirmOrder(true);
  };
  const Value = {
    products,
    handleOrder,
    cartState,
    addToCart,
    inCrement,
    deCrement,
    removeFrom,
    setProducts,
    handleTotal,
    showConfirmOrder,
    setShowConfirmOrder,
    setCartState,
    showConfirmOrder
  };
  return (
    <MyContextData.Provider value={Value}>
      
      {children}
    </MyContextData.Provider>
  );
}
