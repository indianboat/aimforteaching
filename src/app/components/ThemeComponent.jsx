"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbMoonFilled, TbSunLow } from "react-icons/tb";

const ThemeComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <button
        className="hover:bg-gray-100  p-2 rounded-full transition-colors hover:dark:bg-[#4B5563]"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <TbSunLow size={16} className="text-gray-300" />
        ) : (
          <TbMoonFilled size={16} className="text-gray-700" />
        )}
      </button>
    </>
  );
};

export default ThemeComponent;
