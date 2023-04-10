import React from "react";

// As a rule of thumb...
// The component that holds the state is the one that's responsible for updating the state.
interface cartProps {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: cartProps) => {
  return (
    <>
      <p className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Cart Items:
      </p>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {cartItems.map((cartItem, id) => (
          <li className="ml-8" key={id}>
            {cartItem}
          </li>
        ))}
      </ul>
      <button
        onClick={onClear}
        className="mt-8 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Clear
      </button>
    </>
  );
};

export default Cart;
