"use client";

import React, { useState, useEffect } from "react";

const DeleteTest = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const deletet = () => {
      return fetch("/api", {
        method: "DELETE",
      }).then((result) => result.json());
    };

    deletet().then((res) => setResponse(res));
  }, []);

  return response ? (
    <>
      {response.ids.map((id) => {
        return <h1>{id}</h1>;
      })}
    </>
  ) : (
    <h1>Fehler</h1>
  );
};

export default DeleteTest;
