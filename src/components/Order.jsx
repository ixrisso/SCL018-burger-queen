import React, { useContext } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase.js';
import { globalContext } from '../App';

function Order() {
  const menuContext = useContext(globalContext);

  const handleDelete = (id) => {
    menuContext.removeOrderItem(id);
  };

  const handleIncrease = (id) => {
    menuContext.increaseItem(id);
  };

  const handleDecrease = (id) => {
    menuContext.decreaseItem(id);
  };

  const totalOrderAmount = menuContext.items.order
    .reduce((total, item) => (total = total + item.price * item.count), 0);

  const totalOrderCount = menuContext.items.order
    .reduce((total, item) => (total = total + item.count), 0);

  const submit = async (e) => {
    e.preventDefault(e);
    const orderDate = new Date();
    const orderTime = `${orderDate.getHours()}:${orderDate.getMinutes()}:${orderDate.getSeconds()}`;

    if (menuContext.name === ' ' || menuContext.table === ' ') {
      // eslint-disable-next-line no-alert
      alert('Escribe los datos porfavorcito');
    } else {
      try {
        await addDoc(collection(db, 'orders'), {
          time: orderTime,
          name: menuContext.name,
          table: menuContext.table,
          order: menuContext.items.order,
          totalAmount: totalOrderAmount,
          status: 'pending',
        });
      } catch (error) {
        console.log(error);
      }
      menuContext.setName('');
      menuContext.setTable('');
      menuContext.cleanItemsFromOrder();
    }
  };

  return (
    <form action="" onSubmit={submit}>
      <div>
        <h3>Pedido</h3>
        <p>
          Cliente:
          {' '}
          {menuContext.name}
        </p>
        <p>
          Mesa:
          {' '}
          {menuContext.table}
        </p>
      </div>

      <div>
        <p>Producto</p>
        <p>Cantidad</p>
        <p>Total </p>
      </div>
      {menuContext.items.order.map((item) => (
        <div
          key={item.id}
          >
          <section>
            {item.name}
            <p>
              $
              {' '}
              {item.price}
            </p>

          </section>
          <div>
            <button type="button" onClick={() => handleDecrease(item.id)}> - </button>
            <p>
              {'   '}
              {item.count}
            </p>
            <button type="button" onClick={() => handleIncrease(item.id)}> + </button>
          </div>
          <button  type="button" onClick={() => handleDelete(item.id)}>Delete</button>
          <p>
            $
            {' '}
            {item.price * item.count}
          </p>

        </div>
      ))}
      <div >
        <h3>
          {' '}
          Total de Productos:
          {' '}
          {totalOrderCount}
        </h3>
        <h3>
          Total:
          $
          {' '}
          {totalOrderAmount}
        </h3>
      </div>
      <button  type="submit">Enviar Pedido</button>
    </form>
  );
}

export default Order;