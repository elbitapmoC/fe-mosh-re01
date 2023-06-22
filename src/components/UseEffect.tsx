import { useEffect, useRef } from "react";

const UseEffect = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // This takes place AFTER our component has rendered.
  useEffect(() => {
    // Side effect. This updates areas outside of our component.
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseEffect;
