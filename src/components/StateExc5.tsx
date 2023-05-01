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
  id: string;
  description: string;
  price: number;
  category: CategoriesEnum;
}

const StateExc5 = () => {
  const [expenses, setExpenses] = useState([
    {
      id: `${crypto.randomUUID()}`,
      description: "PS5",
      price: 600,
      category: CategoriesEnum.entertainment,
    },
    {
      id: `${crypto.randomUUID()}`,
      description: "Nama J2 Juicer",
      price: 500,
      category: CategoriesEnum.utilities,
    },
    {
      id: `${crypto.randomUUID()}`,
      description: "Watermelon (seeded)",
      price: 7,
      category: CategoriesEnum.groceries,
    },
  ]);

  const onSubmit = (data: IFormInput) => {
    setExpenses([...expenses, data]);
  };

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

export default StateExc5;
