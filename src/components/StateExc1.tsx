import React, { useState } from "react";

const StateExc1 = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "JB",
    },
  });

  const handleClick = () => {
    //TODO: Change the name of player
    setGame({ ...game, player: { ...game.player, name: "1" } });
  };

  return (
    <button
      className="text-white absolute left-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
      onClick={handleClick}
    >
      StateExc1
    </button>
  );
};

export default StateExc1;
