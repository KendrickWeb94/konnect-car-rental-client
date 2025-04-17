import React, { ReactNode } from "react";
import authImg from "@/assets/auth-img.png";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export { authImg };

interface LayoutProps {
  children: ReactNode;
}

export const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="relative lg:flex h-screen justify-between w-full">
      <div className="absolute z-20 cursor-pointer top left-0 m-5">
        <Link to={"/"} className="cursor-pointer">
          <Button variant={"outline"} size={"icon"}>
            <X />
          </Button>
        </Link>
      </div>
      <section className="h-screen lg:w-[50%] overflow-auto scroll-bar-gone lg:fixed left-0 top-0">
        <div className="w-full h-screen flex items-center overflow-auto scroll-bar-gone justify-center">
          {children}
        </div>
      </section>
      <div className="h-screen ds:hidden lg:block lg:fixed top-0 right-0">
        <img src={authImg} alt="" />
      </div>
    </main>
  );
};
