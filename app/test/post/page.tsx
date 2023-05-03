"use client";

import React, { useEffect, useState } from "react";

const PostTest = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const post = () => {
      return fetch("/api", {
        method: "POST",
        body: "Tether",
      }).then((result) => result.json());
    };

    post().then((res) => setResponse(res));
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

export default PostTest;
