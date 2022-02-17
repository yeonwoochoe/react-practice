import React, { useState, useEffect, useCallback } from "react";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunciton = useCallback(() => {
    console.log(`someFunc:number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunciton]);

  return (
    <div className="container callback">
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
        <br />
      </div>
      <button onClick={someFunciton}>Call someFunc</button>
    </div>
  );
};

export default UseCallback;
