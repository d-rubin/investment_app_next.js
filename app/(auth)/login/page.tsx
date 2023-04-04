import React from "react";

const Page = () => {
  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   // const responst = await fetch("uls", {
  //   //   method: "POST",
  //   //   headers: { "Content-Type": "application/json" },
  //   //   body: JSON.stringify(event),
  //   // });
  // };
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="flex flex-col h-fit xs:w-full lg:w-fit mt-36">
        <h2>Log dich ein Tobi</h2>
        <form
          className="flex gap-4 pt-4 flex-col justify-between"
          // onSubmit={(event) => handleSubmit(event)}
        >
          <input name="email" type="email" placeholder="Email eingeben..." />
          <input
            name="password"
            type="password"
            placeholder="Password eingeben..."
          />
          <button
            type="submit"
            className="cursor-pointer mt-2 rounded-lg bg-blue-400 p-2 uppercase
                        text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600
                        hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600
                        focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none
                        focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-color="light"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
