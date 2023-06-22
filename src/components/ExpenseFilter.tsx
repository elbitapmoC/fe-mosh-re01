import categories from "../categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <label htmlFor="pet-select">Filter by:</label>
      <select
        className="bg-gray-700 w-full text-sm text-left text-gray-400 px-6 py-2 mb-2"
        onChange={(e) => {
          onSelectCategory(e.target.value);
        }}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
