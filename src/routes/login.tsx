
// import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GoogleImg from "@/assets/google.svg";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

export { GoogleImg };

export const Login = () => {
    return (
         <div className="space-y-8 w-full flex flex-col px-4 items-center justify-center">
             {/* <ModeToggle /> */}
             <div className="header">
               <h1 className="text-2xl font-semibold">Welcome back</h1>
               {/* <p className="text-gray-500">create an account to get started</p> */}
             </div>
             <form className="space-y-4 w-full max-w-sm">

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
               <div className="w-full flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <Checkbox /> <p className="text-xs">Remember me for 30 days</p>
                </div>
                <Link className="text-xs text-tw_primary" to={"/forgot-password"}>Forgot password?</Link>
               </div>
               <Button type="submit" className="w-full bg-tw_primary hover:bg-tw_primary/80 smooth cursor-pointer">
                Sign in
               </Button>
               <div className="w-full flex items-center gap-4 justify-between ">
                 <div className="w-full h-[0.5px] dark:bg-gray-700 bg-gray-300"></div>
                 <p className="text-sm">OR</p>
                 <div className="w-full h-[0.5px] dark:bg-gray-700 bg-gray-300"></div>
               </div>
             </form>
               <Button onClick={() => {}} variant={"outline"} className="w-full max-w-sm flex items-center gap-4">
                 <img src={GoogleImg} alt="" className=" w-5 h-5 object-cover" />
                 <p>Sign in with google</p>
               </Button>
             <p className="text-sm">Don't have an account? {" "} <Link className=" text-tw_primary underline-offset-8" to={"/register"}>Create one</Link> </p>
           </div>
    )
}