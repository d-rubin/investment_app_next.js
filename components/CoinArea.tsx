"use client";

import React, { useEffect, useState } from "react";
import { DisplayCoin } from "./DisplayCoin";

const CoinArea = () => {
  const [ids, setIds] = useState([]);
  const getUserData = async (user: string) => {
    const response = await fetch("userData");
    const json = await response.json();
    setIds(json[user].ids);
  };
  useEffect(() => {
    getUserData("tobi");
  }, []);

  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4 mb-4">
      {ids[0] && ids.map((id) => <DisplayCoin id={id} key={id} />)}
    </div>
  );
};

export { CoinArea };
