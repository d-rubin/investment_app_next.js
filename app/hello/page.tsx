import React from "react";

const GetData = async () => {
  const res = await fetch("userData", { method: "POST" });

  return <h1>{res ? <h1>Daten geladen</h1> : <h1>Lade</h1>}</h1>;
};

export default GetData;
