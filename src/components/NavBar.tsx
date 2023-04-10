import React from "react";

interface cartProps {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: cartProps) => {
  return (
    <p className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
      {cartItemsCount} Items inside Cart
    </p>
  );
};

export default NavBar;
