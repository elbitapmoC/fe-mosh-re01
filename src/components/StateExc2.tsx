import React, { useState } from "react";

const StateExc2 = () => {
  const [game, setGame] = useState({
    name: "Fried Chicken of The Woods",
    toppings: [
      "tomato cream",
      "cashew mozzarella",
      "basil pesto",
      "chili bomba",
    ],
  });

  const handleClick = () => {
    //TODO: Add new topping to the array.
    // "fried oyster mushrooms",
    setGame({
      ...game,
      toppings: [...game.toppings, "fried oyster mushrooms"],
    });
  };

  return (
    <button
      className="text-white absolute left-2.5 top-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
      onClick={handleClick}
    >
      StateExc2
    </button>
  );
};

export default StateExc2;
