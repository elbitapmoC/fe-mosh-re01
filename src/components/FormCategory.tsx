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
    
  );
};

export default FormCategory;
