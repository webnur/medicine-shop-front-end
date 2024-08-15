import React from "react";

const SignUp = () => {
  return (
    <div className="login-banner md:py-[80px] lg:py[80px]">
      <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-[#13B2EA] shadow-lg sm:rounded-3xl p-7 sm:p-10 ">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Create an Account
        </h1>

        <form action="#" className="space-y-6">
          <div className="space-y-2 text-sm">
            <label
              htmlFor="email"
              className="block text-zinc-700 dark:text-zinc-300 font-medium"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
              id="email"
              placeholder="Enter Email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="space-y-2 text-sm">
            <label
              htmlFor="password"
              className="block text-zinc-700 dark:text-zinc-300 font-medium"
            >
              Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
              id="password"
              placeholder="Enter password"
              name="password"
              type="password"
              required
            />
            <div className="flex justify-end text-xs">
              <a
                href="#"
                className="text-zinc-700 hover:underline dark:text-zinc-300"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
            Submit
          </button>
        </form>
        <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
          Don&apos;t have an account?
          <a href="#" className="font-semibold underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
