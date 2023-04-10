import React, { useState } from "react";

const ModifyingObjects = () => {
  const [drink, setDrink] = useState({
    title: "Mango Madness",
    size: "M",
    price: 12,
  });

  const [customer, setCustomer] = useState({
    name: "Mancho Man",
    address: {
      state: "GA",
      zip: 30083,
    },
  });

  const randomize = () => {
    const sizes = ["S", "M", "L"];
    const randomSize = Math.floor(Math.random() * 3);
    const price = Math.floor(Math.random() * 15) + 1;

    setDrink({ ...drink, size: sizes[randomSize], price });
  };

  const newCustomizer = () => {
    setCustomer({ ...customer, address: { ...customer.address, zip: 33312 } });
  };

  return (
    <>
      <button onClick={randomize}>Change price</button>

      <p>{drink.title}</p>
      <p>{drink.size}</p>
      <p>{drink.price}</p>

      <button onClick={newCustomizer}>Change location</button>

      <p>{customer.name}</p>
      <p>{customer.address.zip}</p>
    </>
  );
};

export default ModifyingObjects;
