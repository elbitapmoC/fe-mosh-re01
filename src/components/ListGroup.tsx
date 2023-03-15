import { MouseEvent, useState } from "react";

// Allows us to define the shape of our object.
interface ListGroupProps {
  places: string[];
  heading: string;
}

const ListGroup = ({ places, heading }: ListGroupProps) => {
  const [listItem, setListItem] = useState(0);

  const handleClick: any = (
    e: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    console.log(e);
    setListItem(index);
  };

  return (
    <>
      <h1 className="mb-4 mt-12">{heading}</h1>
      {places.length < 1 ? (
        <p>Nothing to see here.</p>
      ) : (
        <ul className="w-48 text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white">
          {places.map((place: string, idx: number) => (
            <li
              key={idx}
              className={`w-full px-4 py-2 border-b rounded-t-lg dark:border-gray-600 ${
                listItem === idx && "bg-gray-800 border-gray-60"
              }`}
              onClick={(e) => handleClick(e, idx)}
            >
              {place}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
