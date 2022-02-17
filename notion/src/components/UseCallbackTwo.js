import React, { useCallback, useState } from "react";
import Box from "./Box";

const UseCallbackTwo = () => {
  const [size, setSize] = useState(100);
  const [isDarks, setIsDarks] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      margin: "30px",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);
  return (
    <div style={{ backgroundColor: isDarks ? "black" : "whtie" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setIsDarks(!isDarks)}>change </button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
};

export default UseCallbackTwo;
