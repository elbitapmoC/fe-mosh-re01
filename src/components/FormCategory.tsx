import { useForm } from "react-hook-form";

enum CategoriesEnum {
  groceries = "Groceries",
  utilities = "Utilities",
  entertainment = "Entertainment",
}

interface IFormInput {
  category: CategoriesEnum;
}

const FormCategory = () => {
  const { register } = useForm();

  return (
    <div className="mb-8">
      <label
        htmlFor="categories"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Category
      </label>
      <select
        {...register("categories")}
        id="categories"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled>Choose a category</option>
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
    </div>
  );
};

export default FormCategory;
