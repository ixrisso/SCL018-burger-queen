import React from 'react'
/* import Menu from "./Menu" */
import menu from "./data/menu";

const Waiter = () => {
    const burguers = menu.hamburguesa;
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
        </div>}
    </section>
)};
export default Waiter
