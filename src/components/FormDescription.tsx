import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  description: string;
}

const FormDescription = () => {
  const { register } = useForm<IFormInput>();

  return (
    
  );
};

export default FormDescription;
