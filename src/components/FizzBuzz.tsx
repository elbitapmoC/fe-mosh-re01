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

  for (let i = 0; i < 100; i++) {
    console.log(calcNum(i));
  }

  return <></>;
};

export default FizzBuzz;
