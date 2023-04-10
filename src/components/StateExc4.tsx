import React, { useState } from "react";

const StateExc4 = () => {
  const [cartItems, setCartItems] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Frozen Fruits", quantity: 1 },
      { id: 2, title: "Cold Pressed Juice", quantity: 2 },
      { id: 3, title: "Jackfruit (Ripe)", quantity: 1 },
      { id: 4, title: "Watermelon (Seeded)", quantity: 1 },
    ],
  });

  const handleClick = (id: number) => {
    //TODO: On click add an additional to the cart.
    setCartItems({
      ...cartItems,
      items: cartItems.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <>
      {cartItems.items.map((item) => (
        <aside>
          <button
            className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            {item.title} ({item.quantity})
          </button>
        </aside>
      ))}
    </>
  );
};

export default StateExc4;
