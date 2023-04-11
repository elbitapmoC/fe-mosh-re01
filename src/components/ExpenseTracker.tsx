import { useForm, SubmitHandler } from "react-hook-form";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

enum CategoriesEnum {
  groceries = "Groceries",
  utilities = "Utilities",
  entertainment = "Entertainment",
}

interface IFormInput {
  id: number;
  description: string;
  amount: number;
  categories: CategoriesEnum;
}

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "PS5",
      amount: 600,
      categories: CategoriesEnum.entertainment,
    },
    {
      id: 2,
      description: "Nama J2 Juicer",
      amount: 500,
      categories: CategoriesEnum.utilities,
    },
    {
      id: 3,
      description: "Watermelon (seeded)",
      amount: 7,
      categories: CategoriesEnum.groceries,
    },
  ]);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    reset();
    setExpenses([...expenses, data]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            {...register("description", { required: true, minLength: 2 })}
            type="description"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Playstation 5"
          />
          {errors.description && (
            <p className="text-red-500 mt-2">
              Description should be at least 2 characters.
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>
          <input
            min={1}
            max={1000}
            type="number"
            id="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("amount", {
              valueAsNumber: true,
              required: true,
              min: 1,
              max: 1000,
            })}
          />
          {errors.amount && (
            <p className="text-red-500 mt-2">
              Amount is required & must be greater than 0.
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="categories"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("categories", { required: true })}
          >
            <option value="">Pick one</option>
            <option value={CategoriesEnum.groceries}>
              {CategoriesEnum.groceries}
            </option>
            <option value={CategoriesEnum.utilities}>
              {CategoriesEnum.utilities}
            </option>
            <option value={CategoriesEnum.entertainment}>
              {CategoriesEnum.entertainment}
            </option>
          </select>
          {errors.categories && (
            <p className="text-red-500 mt-2">Category required.</p>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <ExpensesList
        expenses={expenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id != id));
        }}
      />
    </>
  );
};

export default ExpenseTracker;
