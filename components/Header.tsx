"use client";

import React from "react";
import { Search } from "./Search";

// eslint-disable-next-line react/require-default-props
const Header = ({ children }: { children?: React.ReactNode }) => {
  const handleClick = (id: string) => {
    console.log(id);
  };

  return (
    <header className="w-full h-14 bg-white border-b-2 px-4 relative flex justify-between items-center">
      <div className="flex justify-between gap-2">
        <h1 className="text-xl">Hey Tobi</h1>
        {children}
      </div>
      <Search onClick={handleClick} />
    </header>
  );
};

export { Header };
