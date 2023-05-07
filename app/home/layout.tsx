import React from "react";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Carousel />
      {children}
    </>
  );
};

export default HomeLayout;
