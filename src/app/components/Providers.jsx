"use client";

import { ThemeProvider} from "next-themes";

const Providers = ({ children }) => {

  return (
    <>
      <ThemeProvider defaultTheme="system" attribute="class">{children}</ThemeProvider>
    </>
  );
};

export default Providers;
