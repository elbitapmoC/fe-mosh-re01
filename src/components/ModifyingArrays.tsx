import React, { useRef, useState } from "react";

const ModifyingArrays = () => {
  const [movies, setMovies] = useState([
    "Mario World",
    "Black Panther: Wakanda Forever",
  ]);

  //SOURCE: https://stackoverflow.com/questions/58017215/what-typescript-type-do-i-use-with-useref-hook-when-setting-current-manually
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClickAdd = () => {
    if (inputRef.current) {
      setMovies([...movies, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  const handleClickRemove = () => {
    const stored = inputRef.current?.value;
    setMovies(movies.filter((movie) => movie !== stored));
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          +
        </div>
        <input
          type="text"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Add in your favorite movie..."
          ref={inputRef}
        />
        <button
          onClick={handleClickAdd}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Movie
        </button>
      </div>

      <ul>
        {movies.map((movie, idx) => (
          <li key={idx}>
            <p>{movie}</p>
          </li>
        ))}
      </ul>

      <button
        type="submit"
        onClick={handleClickRemove}
        className="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
      >
        Remove Movie
      </button>
    </>
  );
};

export default ModifyingArrays;
