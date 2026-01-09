import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { saveThemePreference } from "@/services/themeService";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Sync with backend (non-blocking)
    try {
      await saveThemePreference(newTheme);
    } catch (error) {
      // Theme still works locally even if backend sync fails
      console.warn("Failed to sync theme with backend:", error);
    }
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 relative"
      onClick={handleThemeChange}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun
        className={cn(
          "h-4 w-4 rotate-0 scale-100 transition-all",
          theme === "dark" && "rotate-90 scale-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 rotate-90 scale-0 transition-all",
          theme === "dark" && "rotate-0 scale-100"
        )}
      />
    </Button>
  );
}
