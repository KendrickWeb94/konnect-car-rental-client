import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export const OnBoarding = () => {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-bg_dark">
      <div className="w-full py-4 border-b border-gray-200 dark:border-gray-800">
        <section className="mx-auto w-full max-w-[90%]">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-inter font-medium">Onboarding</h1>
            <ModeToggle />
          </div>
        </section>
      </div>
      <section className="mx-auto pt-10 w-full max-w-[90%]">
        <div className="w-full">
          <form action="space-y-6 w-full max-w-lg">
            <div className="space-y-2 w-full">
              <Label className="text-sm">
                Are you registering as a company or person?
              </Label>
              <Input
                type="text"
                className="max-w-lg w-full text-xs"
                placeholder="enter your answer here"
              />
            </div>
            <div className="space-y-2 pt-8 w-full">
              <Label className="text-sm">
                if you chose company, would you like to upload your logo?
              </Label>
              <Input
                type="file"
                className="max-w-lg w-full text-xs"
                placeholder="enter your answer here"
              />
            </div>
            <div className="space-y-2 pt-8 w-full">
              <Label className="text-sm">Your country</Label>
              <select
                name="first-time"
                id="ft"
                className="file:text-foreground text-foreground text-xs max-w-lg placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1  shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              >
                <option
                  className="bg-muted"
                  selected
                  disabled
                  value="Select answer"
                >
                  Select your nationality
                </option>
                <option className="bg-muted" value="Yes">
                  Yes
                </option>
                <option className="bg-muted" value="No">
                  No
                </option>
                <option className="bg-muted" value="am_just_selling_my_car">
                  am just selling my car
                </option>
              </select>
            </div>
            <div className="space-y-2 pt-8 w-full">
              <Label className="text-sm">Where are you located?</Label>
              <Input
                type="text"
                className="max-w-lg w-full text-xs"
                placeholder="enter your address here"
              />
            </div>
            <div className="space-y-2 pt-8 w-full">
              <Label className="text-sm">
                Is this your first time selling cars?
              </Label>
              <select
                name="first-time"
                id="ft"
                className="file:text-foreground text-xs max-w-lg placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1  shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              >
                <option
                  className="bg-muted"
                  selected
                  disabled
                  value="Select answer"
                >
                  Select answer
                </option>
                <option className="bg-muted" value="Yes">
                  Yes
                </option>
                <option className="bg-muted" value="No">
                  No
                </option>
                <option className="bg-muted" value="am_just_selling_my_car">
                  am just selling my car
                </option>
              </select>
            </div>
            <br />
            <Button type="submit" className="bg-gradient-to-t from-tw_primary to-tw_primary/70 dark:text-white">
              Submit details
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};
