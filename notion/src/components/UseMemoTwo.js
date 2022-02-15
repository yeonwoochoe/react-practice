import React, { useEffect, useMemo, useState } from "react";

const UseMemoTwo = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIskorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  //
  //   country : isKorea ? '한국' : '외국'
  //  }

  useEffect(() => {
    console.log("useEffect호출");
  }, [location]);

  return (
    <div className="container">
      <h4>하루에 몇끼 먹어요?</h4>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <h4>어느 나라에 있어요?</h4>
      <div>
        <p>나라 :{location.country}</p>
        <button onClick={() => setIskorea(!isKorea)}>비행기타자</button>
      </div>
    </div>
  );
};

export default UseMemoTwo;
