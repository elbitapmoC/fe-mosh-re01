import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  amount: number;
}

const FormAmount = () => {
  const { register } = useForm<IFormInput>();

  return (
    
  );
};

export default FormAmount;
