import React, { useContext } from "react";
import { MyContextData } from "../contextCom/page";
import confirmorder from "/images/icon-order-confirmed.svg";

export default function ConfirmOrder() {
  const { cartState, handleTotal,setShowConfirmOrder,setCartState } = useContext(MyContextData);
  const startNewOrder = () => {
    setCartState([]);
    setShowConfirmOrder(false)
  };

  return (
    <div>
      <div className="max-w-[470px] mx-auto w-full bg-white rounded p-5">
        <div>
          <img src={confirmorder} alt="Order Confirmed" />
        </div>
        <h3 className="font-bold text-4xl pt-4">Order Confirmed</h3>
        <p className="text-[#87635a]">We hope you enjoy your food!</p>
        <div className="bg-[#c9aea6] p-2 mt-8">
          {cartState.map((item) => (
            <div key={item.id} className="border-b-2 border-gray-300 my-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center my-2">
                  <img
                    src={item?.image?.desktop}
                    alt={item.name}
                    className="w-16 h-16"
                  />
                  <div className="ml-4 font-bold">
                    <h3 className="">{item.name}</h3>
                    <p className="text-orange-500 text-md ">
                      {item.quantity}x{" "}
                      <span className="pl-2 text-gray-600">
                        @${item.price.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between text-3xl my-2 font-bold">
            <h5>Order Total</h5>
            <p className="text-orange-500">${handleTotal().toFixed(2)}</p>
          </div>
          <button
            className="bg-orange-500 px-36 py-3 text-white rounded-3xl  mt-4 mb-3"
            onClick={startNewOrder}
          >
            Start new Order
          </button>
        </div>
      </div>
    </div>
  );
}
