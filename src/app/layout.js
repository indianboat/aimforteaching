import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import NextTopLoader from "nextjs-toploader";
import Subnav from "./components/Subnav";
import { Suspense } from "react";
import Loading from "./loading";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "AimForTeaching",
  description: "Government teaching exams preparation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <NextTopLoader
          showSpinner={false}
          color="currentColor"
          height={4}
          crawl={true}
          shadow="0 0 10px currentColor,0 0 5px currentColor"
        />
        <Providers>
          <Navbar />
          <Subnav />
          <Suspense fallback={<Loading/>}>
          {children}
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
