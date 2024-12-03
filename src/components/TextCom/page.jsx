import React, { useContext } from "react";
import ButtonCom from "../buttonCom/page";
import { MyContextData } from "../contextCom/page";
import SideDetails from "../DisplaySide/page";
import ConfirmOrder from "../confirmOrder/page";

export default function ShowContent() {
  const { removeFrom, products, cartState, handleTotal, handleOrder,showConfirmOrder  } =
    useContext(MyContextData);
  return (
    <div>
 {showConfirmOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <ConfirmOrder />
        </div>
      )}



      <h1 className="text-4xl font-bold pl-7">Dessert</h1>
      <div className="md:max-w-[1120] w-full md:w-[75rem] p-3 md:mx-auto my-7 flex flex-col md:flex-row justify-between gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((item) => (
            <div className="" key={item.id}>
              <div className="flex flex-col gap-0 items-start relative">
                <div className="mb-8">
                  {item.image && (
                    <img
                      src={
                        window.innerWidth < 796
                          ? item.image.mobile
                          : item.image.desktop
                      }
                      alt={item.name}
                      className="w-full h-fit rounded relative"
                    />
                  )}
                  <div className="absolute left- md:left-[20%] bottom-[89px]">
                    <ButtonCom product={item} />
                  </div>
                </div>
                <h2 className="text-gray-400 text-sm mt-3">{item.category}</h2>
                <h2 className="text-md font-bold">{item.name}</h2>
                <h2 className="text-orange-400 font-bold">
                  ${item.price.toFixed(2)}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[25rem] w-full px-4 py-6 text-center bg-white h-fit">
          <SideDetails />
        </div>
      </div>
    </div>
  );
}
