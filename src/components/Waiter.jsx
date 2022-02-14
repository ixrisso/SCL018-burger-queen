import React, { useContext } from "react";
import { GlobalState } from "./Context";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Order from "./Order";

const Waiter = () => {
  const globalContext = useContext(GlobalState);
  console.log(globalContext);
  const onChange = (e) => {
    if (e.target.name === "client") {
      globalContext.changeClient(e.target.value);
    } else if (e.target.name === "table") {
      globalContext.changeTable(e.target.value);
    }
  };
  const sendOrder = () => {
    if (globalContext.client === "" || globalContext.table === "") {
      /* console.log('algo anda mal, intenta de nuevo 😸') */;
    } else if (globalContext.products.length === 0) {
      /* console.log('algo anda mal, intenta de nuevo 😸') */;
    } else {
      console.log('todo bien 😸'),
      
/*          globalContext.resumeOrder();
          globalContext.setProducts([]);
          globalContext.changeClient("");
          globalContext.changeTable(""); */
  }};

  return (
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
export default Waiter;
