import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  amount: number;
}

const FormAmount = () => {
  const { register } = useForm<IFormInput>();

  return (
    <div className="mb-6">
      <label
        htmlFor="amount"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Amount
      </label>
      <input
        {...register("amount")}
        type="number"
        id="amount"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
  );
};

export default FormAmount;
