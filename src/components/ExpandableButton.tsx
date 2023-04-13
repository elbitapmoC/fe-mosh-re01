import { useState } from "react";

interface Prop {
  text: String;
  length: number;
}

// TODO: Showing Shortened Text
// TODO: Showing Full Text
const ExpandableButton = ({ text, length }: Prop) => {
  const [visible, setVisible] = useState(false);

  const checkVisibility = () => {
    return <p>{visible ? text : text.slice(0, length)}</p>;
  };

  return (
    <>
      {checkVisibility()}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <span>{visible ? "Show Less" : "Show More"}</span>
      </button>
    </>
  );
};

export default ExpandableButton;
