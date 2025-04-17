import { Moon, Sun, Monitor, Smartphone } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(
      theme === "dark" ? "light" : theme === "light" ? "system" : "dark"
    );
  };

  return (
    <div className="flex items-center gap-2">
      {theme === "light" && <Sun className="h-5 w-5 text-yellow-500" />}
      {theme === "dark" && <Moon className="h-5 w-5 text-blue-500" />}
      {theme === "system" && (
        <>
          <div className="hidden lg:block">
            <Monitor className="h-5 w-5 text-gray-500" />
          </div>
          <div className="block lg:hidden">
            <Smartphone className="h-5 w-5 text-gray-500" />
          </div>
        </>
      )}
      <Switch
        checked={theme === "dark"}
        onCheckedChange={handleToggle}
        className="transition-colors"
      />
    </div>
  );
}