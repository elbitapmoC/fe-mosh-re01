import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  description: string;
}

const FormDescription = () => {
  const { register } = useForm<IFormInput>();

  return (
    <div className="mb-6">
      <label
        htmlFor="description"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Description
      </label>
      <input
        {...register("description")}
        type="description"
        id="description"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Playstation 5"
        required
      />
    </div>
  );
};

export default FormDescription;
