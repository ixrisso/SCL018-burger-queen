import React, { useEffect, useState, useContext } from "react";
import menu from "./data/menu";

const Menu = () => {
  const burguers = menu.hamburguesa;
/*   const globalContext = useContext(Context);
  const [product, changeProduct] = useState(Button); */

  const drinks = menu.liquido;
  return (
    <section>
      <h1>Menú</h1>
      
      {<div>
        {burguers.map((e, index) => {
          return (
            <button key={index}>
              <h3>{e.tipo}</h3>
              <h5>{e.precio}</h5>
            </button>
          );
        })}
      </div>

/*       <div>
        {drinks.map((e, index) => {
          return (
            <button key={index}>
              <h3>{e.tipo}</h3>
              <h5>{e.precio}</h5>
            </button>
          );
        })}
      </div> */}

    </section>
  );
};

export default Menu;
