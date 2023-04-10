import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

// Default value of 50.
const StateExc4 = ({ children, maxChars = 50 }: Props) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  const checkLength = () => {
    return visible ? (
      <p>{children}</p>
    ) : (
      <p>{children.substring(0, maxChars)}...</p>
    );
  };

  return (
    <>
      {checkLength()}
      <button
        className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
        onClick={handleClick}
      >
        {visible ? "Show Less" : "Show More"}
      </button>
    </>
  );
};

export default StateExc4;
