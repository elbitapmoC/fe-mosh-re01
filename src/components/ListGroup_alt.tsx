import { MouseEvent, useState } from "react";

// Allows us to define the shape of our object.
interface ListGroupProps {
  items: string[];
  heading: string;
}

const ListGroupAlt = ({ items, heading }: ListGroupProps) => {
  // Hooks allow us to tap into built in features of react.
  // We're telling react that we have data that possibly will change over time.

  const [listItem, setListItem] = useState(0);

  const handleClick: any = (index: number) => {
    setListItem(index);
  };

  return (
    <>
      <h1 className="mb-4 mt-12">{heading}</h1>
      {items.length < 1 ? (
        <p>Nothing to see here.</p>
      ) : (
        <ul className="w-48 text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white">
          {items.map((item: string, idx: number) => (
            <li
              key={idx}
              className={`w-full px-4 py-2 border-b rounded-t-lg dark:border-gray-600 ${
                listItem === idx && "bg-gray-800 border-gray-60"
              }`}
              onClick={() => handleClick(idx)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroupAlt;
