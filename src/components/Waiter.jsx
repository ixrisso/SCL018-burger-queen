import React, { useState, useContext } from 'react';
import menu from '../data/menu';
import Client from './Client';
import { globalContext } from '../App';
import Order from './Order';
import Navbar from "./Navbar";

function Waiter() {
  const menuContext = useContext(globalContext);

  const [food, setFood] = useState([]);

  const toFilter = (category) => {
    setFood(menu[category]);
  };
  const itemAdd = (item) => {
    menuContext.addItems(item);
  };
  return (
    <>
      <Navbar />
      <Client />
      <div>
        <button  type="button" onClick={() => toFilter('burgers')}>Hamburguesas</button>
        <button type="button" onClick={() => toFilter('drinks')}>Bebidas</button>
        {food.map((item) => (
          <button  type="button" key={item.id} onClick={() =>itemAdd(item)}>
            <section>{item.name}</section>
            <section>
              $
              {' '}
              {item.price}
            </section>
          </button>
        ))}
        <Order />
      </div>

    </>
  );
}

export default Waiter;
  /* return (
    <>
      <Navbar />
      <main>
        <div>
          <label htmlFor="client">Cliente</label>
          <input
            type="text"
            name="client"
            value={globalContext.client}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="table">N° Mesa</label>
          <input
            type="text"
            name="table"
            value={globalContext.table}
            onChange={onChange}
          />
        </div>

        <Menu />

        <section>
             <div>
              <p>Pedido de:</p>
              {<p>{globalContext.client}</p>}
              <p>Mesa:</p>
             { <p>{globalContext.table}</p>}
            </div>

        
      {globalContext.products.length !== 0 && (
     
          <p>Total $ {globalContext.itemsPrice} </p>
   
      )}


            <Order />

            <button onClick={() => sendOrder()}>
              Enviar Pedido
            </button>
  
        </section>
      </main>
    </>
  );
      }
export default Waiter; */
