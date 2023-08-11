"use client";
import Button from "@/components/button";
import Imput from "@/components/input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [varient, setVarient] = useState("login");

  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) =>
      currentVarient === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGljdHVyZXxlbnwwfHwwfHx8MA==&w=1000&q=80')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5 flex flex-row">
          <img src="/images/netflix.svg" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">sign in</h2>
            <div className="flex flex-col gap-4">
              <Imput
                label="UserName"
                onChange={(e) => setName(e.target.value)}
                id="username"
                type="text"
                value={name}
              />
              <div className="border-r h-full border-white"></div>
              <Imput
                label="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />

              <Imput
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
              <Button buttonType="Submit" />
              <p className="text-neutral-500 mt-12 ">
                First time using Netflix?
                <span
                  onClick={toggleVarient}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
