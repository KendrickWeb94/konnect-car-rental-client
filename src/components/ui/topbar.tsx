import { Search } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { SidebarTrigger } from "./sidebar";
import MockDataImg from "@/assets/user1.png";

export {
  MockDataImg
}

export const Topbar = () => {
  return (
    <main className="w-full bg-white border-b dark:bg-bg_dark dark:border-gray-900 flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-6">
        <SidebarTrigger />
        <div className="max-w-sm rounded-md xxs:dark:bg-gray-900 xxs:bg-gray-200 py-2 px-3 flex items-center gap-4 w-full">
          <Search size={18} className="text-gray-400 dark:text-gray-600" />
          <input
            type="text"
            className="outlne-none focus:outline-none font-medium ds:hidden xxs:block pr-6 border-none bg-transparent font-inter text-gray-500 text-xs"
            placeholder="Search cars, Customers etc..."
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
            <Avatar className="w-8 bg-transparent h-8">
            <AvatarImage ></AvatarImage>
            <AvatarFallback>
              <img
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${localStorage.getItem('userAvatar') || (() => {
                const gender = "female"; // Replace with logic to determine user's gender
                const randomSeed = `${gender}-${Math.random().toString(36).substring(2, 15)}`;
                localStorage.setItem('userAvatar', randomSeed);
                return randomSeed;
              })()}`}
              alt="Fallback Avatar"
              className="w-full h-full"
              />
            </AvatarFallback>
            </Avatar>
          <div className="ds:hidden sm:block">
            <h1 className="text-sm text-gray-500 font-inter font-medium">
              Sarah Benard
            </h1>
            <p className="text-xs font-light text-gray-400">Vendor</p>
          </div>
        </div>
        <ModeToggle />
      </div>
    </main>
  );
};
