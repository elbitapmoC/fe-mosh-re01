import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

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

const Exc5 = () => {
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

  return (
    <>
      <ExpenseForm onSubmit={onSubmit} />
      {/* <ExpenseFilter /> */}
      <ExpensesList
        expenses={expenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id != id));
        }}
      />
    </>
  );
};

export default Exc5;
