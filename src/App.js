import React, {
  createContext, useState, useMemo, useCallback,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from './firebase.js';
import Home from './components/Home';
import Waiter from './components/Waiter';
import Kitchen from './components/Kitchen';
import menu from './data/menu.json';

export const globalContext = createContext();

function App() {
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const [items, setItems] = useState({
    itemList: menu,
    order: [],
  });
  const [orderStatus, setOrderStatus] = useState(false);

  const addItems = useCallback((item) => setItems({
    ...items,
    order: items.order.find((orderItem) => orderItem.id === item.id)
      ? items.order.map((orderItem) => (orderItem.id === item.id
        ? { ...orderItem, count: orderItem.count + 1 }
        : orderItem))
      : [...items.order, { ...item, count: 1 }],
  }), [items]);

  const removeOrderItem = useCallback((id) => {
    setItems({
      ...items,
      order: items.order.filter((orderItem) => orderItem.id !== id),
    });
  }, [items]);

  const increaseItem = useCallback((id) => {
    setItems({
      ...items,
      order: items.order.map((orderItem) => orderItem.id === id
        ? { ...orderItem, count: orderItem.count + 1 }
        : orderItem),
    });
  }, [items]);
  const decreaseItem = useCallback((id) => {
    setItems({
      ...items,
      order: items.order.map((orderItem) => orderItem.id === id
        ? { ...orderItem, count: orderItem.count > 1 ? orderItem.count - 1 : 1 }
        : orderItem),
    });
  }, [items]);
  const editStatus = useCallback(async (id, status) => {
    setOrderStatus(true);
    try {
      const ordersRef = doc(db, 'orders', id);
      await updateDoc(ordersRef, {
        status: status,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = useMemo(() => ({
    orderStatus,
    setOrderStatus,
    items,
    name,
    setName,
    table,
    setTable,
    setItems,
    addItems,
    removeOrderItem,
    increaseItem,
    decreaseItem,
    editStatus
  }), [orderStatus, addItems,  increaseItem, editStatus,
    decreaseItem, items, name, removeOrderItem, table]);
  return (

    <globalContext.Provider value={value}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Waiter" element={<Waiter />} />
        <Route path="/Kitchen" element={<Kitchen />} />
              </Routes>
    </globalContext.Provider>
  );
}

export default App;