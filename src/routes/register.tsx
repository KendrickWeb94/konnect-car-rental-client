
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GoogleImg from "@/assets/google.svg";
import { Link } from "react-router-dom";

export { GoogleImg };

export const Register = () => {
  return (
    <div className="space-y-6 w-full flex flex-col px-4 items-center justify-center">
     
      <div className="header">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        {/* <p className="text-gray-500">create an account to get started</p> */}
      </div>
      <form className="space-y-4 w-full max-w-sm">
        <div className="space-y-2 w-full">
          <Label className="text-xs">Name</Label>
          <Input
            type="text"
            className="max-w-sm w-full text-xs"
            placeholder="enter your full or business name "
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs">Email</Label>
          <Input
            type="email"
            className="max-w-sm w-full text-xs"
            placeholder="enter your email"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs">Password</Label>
          <Input
            type="password"
            className="max-w-sm w-full text-xs"
            placeholder="**********"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs">Location</Label>
          <Input
            type="password"
            className="max-w-sm w-full text-xs"
            placeholder="enter your location"
          />
        </div>
        <Button className="w-full bg-tw_primary hover:bg-tw_primary/80 smooth cursor-pointer">
          create an account
        </Button>
        <div className="w-full flex items-center gap-4 justify-between ">
          <div className="w-full h-[0.5px] dark:bg-gray-700 bg-gray-300"></div>
          <p className="text-sm">OR</p>
          <div className="w-full h-[0.5px] dark:bg-gray-700 bg-gray-300"></div>
        </div>
      </form>
      <Button
        onClick={() => {}}
        variant={"outline"}
        className="w-full max-w-sm flex items-center gap-4"
      >
        <img src={GoogleImg} alt="" className=" w-5 h-5 object-cover" />
        <p>Sign up with google</p>
      </Button>
      <p className="text-sm">
        Already have an account?{" "}
        <Link className=" text-tw_primary underline-offset-8" to={"/"}>
          Login
        </Link>{" "}
      </p>
    </div>
  );
};
