import semilogo from "/images/icon-carbon-neutral.svg";
import React, { useContext } from "react";
import emptyImg from "/images/illustration-empty-cart.svg";
import { TiDeleteOutline } from "react-icons/ti";
import { MyContextData } from "../contextCom/page";

export default function SideDetails() {
  const { cartState, handleTotal, handleOrder, removeFrom } =
    useContext(MyContextData);
  return (
    <div>
      <div className=" ">
        <h1 className="text-5xl text-orange-500">
          Your Cart ({cartState?.length})
        </h1>
        <div>
          {cartState?.length == 0 ? (
            <>
              <img src={emptyImg} alt="empty icon" className="mx-auto my-5" />
              <p>Your added items will appear here</p>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              {cartState?.map((item) => (
                <div
                  key={item?.id}
                  className="border-b-2 border-gray-300 inline-block"
                >
                  <div className="flex justify-between items-center px-4 my-3">
                    <div className="flex flex-col gap-2">
                      <h3 className="mt-4 font-bold text-md"> {item?.name}</h3>
                      <div className=" flex items-center px-2 justify-center gap-6 font-bold text-gray-600">
                        <span className="text-orange-500">
                          {cartState.find((cartItem) => cartItem.id === item.id)
                            ?.quantity || 0}
                          x
                        </span>
                        <span> @${(item?.price).toFixed(2)}</span>
                        <span>
                          ${Number(item?.price * item?.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <button onClick={() => removeFrom(item?.id)}>
                        <TiDeleteOutline size={30} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* for order */}
              <div className="flex items-center justify-center gap-12 text-3xl my-2 font-bold">
                <h5>Order Total</h5>
                <p className="text-orange-500">${handleTotal().toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-md my-2 ">
                <img src={semilogo} alt="carbon" />
                <p>
                  This is a <span>carbon-neutral</span> delivery
                </p>
              </div>
              <button
                className="bg-orange-500 px-5 py-3 text-white rounded-3xl"
                onClick={handleOrder}
              >
                Confirm Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
