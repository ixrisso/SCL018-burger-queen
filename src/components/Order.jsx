import React, { useContext } from "react";
import { GlobalState } from "./Context";

const Order = () => {
  const globalContext = useContext(GlobalState);
  return (
    <div>
{/*       {globalContext.products.length >= 1 ? (
        <div>
          {globalContext.products.map((item) => (
            <div key={item.id}>
              <div>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div>
                <button onClick={() => globalContext.onAdd(item)}>+</button>
                <p>{item.qty}</p>
                <button onClick={() => globalContext.onRemove(item)}>-</button>
              </div>
              <button onClick={() => globalContext.removeProducts(item)}>
                x
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Agrega productos al pedido </p>
        </div>
      )} */}
    </div>
  );
};

export default Order;
