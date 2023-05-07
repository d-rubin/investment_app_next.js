import React from "react";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Carousel />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4 mb-4">
        {children}
      </div>
    </>
  );
};

export default HomeLayout;
