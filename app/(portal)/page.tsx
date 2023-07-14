import React from "react";

export default function RootPage() {
  return (
    <main className="w-full h-full pt-20">
      <h1 className="w-full h-20 pl-4 pt-4 text-4xl font-semibold fixed bg-black left-0 top-0 shadow-xl">
        Overview
      </h1>
      <section className="grid grid-cols-2 gap-4 w-full h-full items-center justify-center">
        {Array.from({ length: 8 }).map(() => {
          return (
            <article className="w-full h-full bg-gray-500 rounded-2xl">
              <span>
                <p>ETH</p>
              </span>
            </article>
          );
        })}
      </section>
    </main>
  );
}
