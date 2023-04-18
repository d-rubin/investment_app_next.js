"use client";

import React from "react";
import { Search } from "./Search";

const Header = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <header className="w-full h-14 bg-white border-b-2 px-4 relative flex justify-between items-center">
      <div className="flex justify-between gap-2">
        <h1 className="text-xl">Hey Tobi</h1>
        {children}
      </div>
      <Search onClick={onClick} />
    </header>
  );
};

export { Header };
