import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import UseMemo from "./UseMemo";
import UseMemoTwo from "./UseMemoTwo";
import UseCallback from "./UseCallback";
import UseCallbackTwo from "./UseCallbackTwo";
const Page = () => {
  return (
    <div className="page">
      <Header />
      <Content />
      <UseMemo />
      <UseMemoTwo />
      <UseCallback />
      <UseCallbackTwo />
      <Footer />
    </div>
  );
};

export default Page;
