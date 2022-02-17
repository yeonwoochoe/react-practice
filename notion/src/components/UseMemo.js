import React, { useState, useMemo } from "react";

const hardCarculate = (number) => {
  console.log("어려운계산!");
  for (let i = 0; i < 99; i++) {}
  return number + 10000;
};

const easyCarculate = (number) => {
  console.log("쉬운계산!");
  return number + 1;
};

const UseMemo = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCarculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCarculate(hardNumber); //렌더링하지 않을 요소를 넣음
  }, [hardNumber]);
  const easySum = easyCarculate(easyNumber);

  return (
    <div className="container">
      <h4>어려운계산기</h4>
      <div>
        <input
          type="number"
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />
        <span> + 10000 = {hardSum}</span>
      </div>

      <h4>쉬운 계산기</h4>
      <div>
        <input
          type="number"
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <span> + 1 = {easySum}</span>
      </div>
    </div>
  );
};

export default UseMemo;
