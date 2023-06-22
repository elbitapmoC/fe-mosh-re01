import React, { useEffect, useState } from "react";

const ProductList = ({ option }: { option: string }) => {
  const connect = () => console.log("connecting...");
  const disconnect = () => console.log("disconnecting...");

  useEffect(() => {
    console.log("Fetching options...", option);
    connect();

    // This is how we clean up our code.
    return () => {
      disconnect();
    };
  }, [option]);

  return <>product list</>;
};

export default ProductList;
