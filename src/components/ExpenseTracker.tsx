import FormDescription from "./FormDescription";
import FormAmount from "./FormAmount";
import FormCategory from "./FormCategory";
import { useForm } from "react-hook-form";

const ExpenseTracker = () => {
  const { handleSubmit } = useForm();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* TODO: Add input validation-- 
      Description should be at least 3 characters.
      */}
      <FormDescription />
      {/* TODO: Add input validation--
      Amount required
      */}
      <FormAmount />
      {/* TODO: Add input validation 
      Category required
      */}
      <FormCategory />

      {/* TODO: onSubmit-- clear input fields */}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default ExpenseTracker;
