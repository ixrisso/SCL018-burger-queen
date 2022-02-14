import React, { useContext, useState } from "react";
import { GlobalState } from "./Context";
import menu from "../data/menu";

const Menu = () => {
  const globalContext = useContext(GlobalState);
  const menuBoth = menu.products;
  const Button = menuBoth.filter((element) => element.section === "option");
  const [product, changeProduct] = useState(Button);

  const typeProduct = (option) => {
    switch (option) {
      case "burger":
        changeProduct(
          menuBoth.filter((element) => element.section === option)
        );
        break;
      case "drink":
        changeProduct(
          menuBoth.filter((element) => element.section === option)
        );
        break;
        default:
    }
  };
  return (
    <>
     <div>
        <button
          onClick={() => typeProduct("burger")}
        
        >
          Burgers
        </button>
        <button
          onClick={() => typeProduct("drink")}
          
        >
         Drinks
        </button>
              </div>
      <div>
        {product.map((e) => (
          <div key={e.id}>
            <button
              
              onClick={() => globalContext.onAdd(e)}
            >
              <p >{e.name}</p>
              <p >${e.price}</p>
            </button>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Menu;
