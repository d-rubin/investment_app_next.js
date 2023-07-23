"use client";

export default function ErrorRootPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="relative w-full h-full px-4 max-w-screen-lg mx-auto justify-center flex mt-24">
      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="text-4xl font-semibold">Something went wrong</h1>
        <h2>{error.name}</h2>
        <p>{error.message}</p>
        <button className="rounded-md bg-emerald-500 px-2 py-1" onClick={reset}>
          Try again!
        </button>
      </div>
    </main>
  );
}
