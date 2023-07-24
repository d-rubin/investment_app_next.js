import React from "react";
import { v4 as uuid } from "uuid";

export default function LoadingRootPage() {
  return (
    <main className="w-full h-full pt-24">
      <h1 className="w-full max-w-screen-xl mx-auto h-20 pl-4 pt-4 text-4xl font-semibold fixed bg-black top-0 shadow-xl">
        Overview
      </h1>
      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full h-fit justify-items-center">
        {Array.from({ length: 50 }).map(() => {
          return (
            <article
              key={uuid()}
              className="animate-pulse bg-gray-200 w-full h-40 rounded-2xl p-2 flex flex-col justify-between relative"
            />
          );
        })}
      </section>
    </main>
  );
}
