"use client";

import Link from "next/link";
import { SiFacebook, SiTelegram, SiLinkedin } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="footer-box border border-red-500 py-8 bg-[#fbfbfb] dark:bg-neutral-950">
        <div className="container md:w-11/12 sm:w-full w-full mx-auto p-2 border border-blue-600">
          <div className="border py-1">
            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-x-3 justify-between gap-y-6">

              <div className="flex border flex-col justify-start md:text-start sm:text-start text-center md:items-start sm:items-start items-center">
                <div className="flex flex-col w-full border md:items-start sm:items-start items-center">
                  <p className="w-full text-lg font-medium lg:text-start md:text-start sm:text-center text-center">Join our newsletter</p>
                  <p className="w-full text-sm font-medium text-gray-700 dark:text-gray-100 lg:text-start md:text-start sm:text-center text-center">
                    We will send you a nice news once a week, no spam.
                  </p>
                  <form method="post" className="border mt-4 w-full">
                    <div className="flex gap-x-2 flex-col gap-y-4 lg:items-start md:items-start sm:items-center items-center">
                      <input
                        className="border rounded-full border-rose-900 px-4 py-2 w-full outline-none bg-neutral-200 dark:bg-neutral-800"
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                      <button
                        className="border px-4 py-2 bg-slate-300 dark:bg-slate-800 dark:text-white rounded-full lg:w-fit md:w-fit sm:w-full w-full  focus:scale-95 transition-transform"
                        // onClick={(e) => e.preventDefault()}
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-x-3 gap-y-6">
                <div className="flex border flex-col w-auto md:text-start sm:text-center text-center">
                  <h1 className="text-lg font-semibold md:text-right sm:text-center text-center">
                    Product
                  </h1>
                  <ul className="flex flex-col gap-y-2 mt-3 md:items-end sm:items-center items-center">
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Tutorials
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Releases
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex border flex-col w-auto md:text-start sm:text-center text-center">
                  <h1 className="text-lg font-semibold md:text-right sm:text-center text-center">
                    Company
                  </h1>
                  <ul className="flex flex-col gap-y-2 mt-3 md:items-end sm:items-center items-center">
                    <li>
                      <Link className="hover:text-blue-800" href="/aboutus">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Press
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Partners
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex border flex-col w-auto md:text-start sm:text-center text-center">
                  <h1 className="text-lg font-semibold md:text-right sm:text-center text-center">
                    Support
                  </h1>
                  <ul className="flex flex-col gap-y-2 mt-3 md:items-end sm:items-center items-center">
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Legal
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Status
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex border flex-col w-auto md:text-start sm:text-center text-center">
                  <h1 className="text-lg font-semibold md:text-right sm:text-center text-center">
                    Social
                  </h1>
                  <ul className="flex flex-col gap-y-2 mt-3 md:items-end sm:items-center items-center">
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-blue-800 transition-colors"
                        href="/"
                      >
                        Telegram
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div className="flex mt-4 lg:flex-row md:flex-row sm:flex-row flex-col justify-between md:gap-y-0 sm:gap-y-4 gap-y-4">
            <div className="flex border md:justify-start sm:justify-start justify-center items-center">
              <p className="font-medium flex justify-center items-center place-content-center place-items-center text-gray-700 dark:text-gray-100">
                &copy; 2023 aimforteaching.in | All rights reserved
              </p>
            </div>
            <div className="flex gap-x-4 justify-center items-center">
              <Link
                className="flex border text-[#3b5998]"
                href="/"
                aria-label="facebooklink"
              >
                <SiFacebook size={22} />
              </Link>
              <Link
                className="flex border text-[#3b5998]"
                href="/"
                aria-label="telegramlink"
              >
                <SiTelegram size={22} />
              </Link>
              <Link
                className="flex border text-[#00405d]"
                href="/"
                aria-label="instagramlink"
              >
                <RiInstagramFill size={22} />
              </Link>
              <Link
                className="flex border text-[#0a66c2]"
                href="/"
                aria-label="linkedinlink"
              >
                <SiLinkedin size={22} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// footer layout change for cls
