import React, { useState } from "react";

const FizzBuzz = () => {
  // Print 0 - 100
  // Fizz / 3
  // Buzz / 5
  // FizzBuzz / 3 & 5

  const calcNum = (index: number) => {
    if (index % 5 === 0 && index % 3 === 0) {
      return "FizzBuzz";
    } else if (index % 5 === 0) {
      return "Buzz";
    } else if (index % 3 === 0) {
      return "Fizz";
    } else if (index % 7 === 0) {
      return "Bazz";
    } else {
      return index;
    }
  };

  return (
    <ul className="mt-12 w-48 text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white">
      <li
        className={`w-full px-4 py-2 border-b rounded-t-lg dark:border-gray-600`}
      >
        1
      </li>
    </ul>
  );
};

export default FizzBuzz;
