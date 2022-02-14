// import React, { useEffect, useState } from "react";

// const UmmountTest = () => {
//   useEffect(() => {
//     console.log("마운트!!");

//     return () => {
//       console.log("언마운트!!");
//     };
//   }, []);
//   return <div>Ummount 테스트 컴포넌트 </div>;
// };

// const Lifecycle = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const toggle = () => setIsVisible(!isVisible);

//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={toggle}>ON/OFF</button>
//       {isVisible && <UmmountTest />}
//     </div>
//   );
// };

// export default Lifecycle;
