"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleToggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 检查是否支持 view transitions 且用户未开启“减少动画”偏好
    const canAnimate =
      typeof document.startViewTransition === "function" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canAnimate) {
      toggleTheme();
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    // 设置 CSS 变量，供 CSS 使用
    document.documentElement.style.setProperty("--darkX", `${x}px`);
    document.documentElement.style.setProperty("--darkY", `${y}px`);

    // 使用 startViewTransition
    document.startViewTransition(() => {
      toggleTheme();
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full relative overflow-hidden cursor-pointer"
      onClick={handleToggleTheme}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
