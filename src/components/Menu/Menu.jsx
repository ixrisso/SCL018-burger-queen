import React from "react";
import menu from "/Users/irisso/Documents/SCL018-burger-queen/src/data/menu.json";

const Menu = () => {
  const burguers = menu.hamburguesa;
  const drinks = menu.liquido;
  return (
    <section>
      <h1>Menú</h1>
      
      <div>
        {burguers.map((e, index) => {
          return (
            <button key={index}>
              <h3>{e.tipo}</h3>
              <h5>{e.precio}</h5>
            </button>
          );
        })}
      </div>

      <div>
        {drinks.map((e, index) => {
          return (
            <button key={index}>
              <h3>{e.tipo}</h3>
              <h5>{e.precio}</h5>
            </button>
          );
        })}
      </div>

    </section>
  );
};

export default Menu;
