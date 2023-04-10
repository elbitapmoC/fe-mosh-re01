import { useState } from "react";

const ModifyingArrayOfObjects = () => {
  const [games, setGames] = useState([
    {
      id: 0,
      title: "One Piece Odyssey",
      online: false,
      crossPlay: false,
      released: false,
      year: {
        month: "Jan",
        day: 13,
      },
    },
    {
      id: 1,
      title: "Kirby's Return To Dream Land Deluxe",
      online: false,
      crossPlay: false,
      released: false,
      year: {
        month: "Feb",
        day: 24,
      },
    },
    {
      id: 2,
      title: "Amnesia: The Bunker",
      online: false,
      crossPlay: false,
      released: false,
      year: {
        month: "Mar",
        day: 1,
      },
    },
  ]);
  const handleClick = (index: number) => {
    setGames(
      games.map((game) =>
        game.id === index ? { ...game, released: !game.released } : game
      )
    );
  };

  return (
    <>
      {games.map(({ id, title, released }) => (
        <li key={id}>
          <button
            className={`text-white font-medium rounded-lg mb-2 text-sm px-4 py-2 ${
              released
                ? "bg-slate-600 hover:bg-slate-700 focus:ring-slate-800"
                : "bg-red-600 hover:bg-red-700 focus:ring-red-800"
            }`}
            onClick={() => handleClick(id)}
          >
            {title}
          </button>
        </li>
      ))}
    </>
  );
};

export default ModifyingArrayOfObjects;
