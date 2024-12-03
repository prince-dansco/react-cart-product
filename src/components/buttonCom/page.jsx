import React, { useContext } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { MyContextData } from "../contextCom/page";
  
export default function ButtonCom({ product }) {
  const { addToCart, inCrement, deCrement, cartState } =
    useContext(MyContextData);

  const isProductInCart = cartState.find((item) => item.id === product.id);

  return (
    <div>
      <div>
        {!isProductInCart ? (
          // Display "Add to cart" button if the product is not in the cart
          <button
            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white text-lg border-2 border-black"
            onClick={() => addToCart(product)}
          >
            <FiShoppingCart className="text-orange-400 text-xl" />
            Add to cart
          </button>
        ) : (
          // Display the increment and decrement buttons if the product is in the cart
          <div className="flex items-center gap-7 px-4 py-2 rounded-xl bg-red-500 text-white">
            <CiCircleMinus size={29} onClick={() => deCrement(product.id)} />
            <span>{isProductInCart.quantity}</span>
            <CiCirclePlus size={29} onClick={() => inCrement(product.id)} />
          </div>
        )}
      </div>
    </div>
  );
}
