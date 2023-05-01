import { BsTrash, BsXLg } from "react-icons/bs";

enum CategoriesEnum {
  groceries = "Groceries",
  utilities = "Utilities",
  entertainment = "Entertainment",
}

interface Expense {
  id: string;
  description: string;
  amount: number;
  categories: CategoriesEnum;
}

interface Prop {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const ExpensesList = ({ expenses, onDelete }: Prop) => {
  console.log(expenses);
  return (
    <div className="mt-20">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product description
              </th>
              <th scope="col" className="px-6 py-3">
                Cost
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>

              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(
              ({ id, description, amount, categories }: Expense) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {description}
                  </th>
                  <td className="px-6 py-4">{amount}</td>
                  <td className="px-6 py-4">{categories}</td>
                  <td className="px-6 py-4">
                    <button
                      className="flex align-center items-center bg-red-600 px-4 py-2"
                      onClick={() => onDelete(id)}
                    >
                      <BsTrash size={15} color="white" />{" "}
                      <span className="pl-2 text-white">Delete</span>
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
          <tfoot className="text-xs uppercase bg-gray-800 text-white outline outline-offset-2 outline-1">
            <tr>
              <th className="px-6 py-3">Total:</th>
              <td>
                {expenses.reduce((acc, expenses) => expenses.amount + acc, 0)}
              </td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ExpensesList;
