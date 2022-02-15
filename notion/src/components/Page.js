import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import UseMemo from "./UseMemo";
import UseMemoTwo from "./UseMemoTwo";
const Page = () => {
  return (
    <div className="page">
      <Header />
      <Content />
      <UseMemo />
      <UseMemoTwo />
      <Footer />
    </div>
  );
};

export default Page;
