"use client";

import Link from "next/link";
import { SiFacebook, SiTelegram, SiLinkedin } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="footer border border-red-500 pt-16 pb-8 bg-[#fbfbfb] dark:bg-neutral-950">
          <div className="container md:w-11/12 sm:w-full w-full mx-auto lg:px-4 md:px-3 sm:px-2 px-2 py-2 border border-blue-600">
            <div className="flex md:flex-row sm:flex-row flex-col justify-between py-1 md:gap-y-0 sm:gap-y-4 gap-y-4">
              <div className="flex flex-col border justify-center md:text-start sm:text-start text-center  md:items-start sm:items-start items-center">
                <h1 className="text-lg font-medium">Join our newsletter</h1>
                <h1 className="text-sm font-medium text-gray-700 dark:text-gray-100">
                  We will send you a nice news once a week, no spam.
                </h1>
              </div>
              <div className="flex border items-center md:justify-start sm:justify-start justify-center">
                <form method="post" className="border md:w-[420px] w-full">
                  <div className="flex gap-x-2 md:flex-row sm:flex-col flex-col gap-y-4 w-full">
                    <input
                      className="border rounded-full border-rose-900 px-4 py-2 w-full outline-none bg-neutral-200 dark:bg-neutral-800"
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                    <button
                      className="border px-4 py-2 bg-neutral-800 rounded-full text-white focus:scale-95 transition-transform"
                      // onClick={(e) => e.preventDefault()}
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="my-6 border py-1">
              <div className="flex md:flex-row sm:flex-row flex-col gap-x-3 justify-between md:gap-y-0 sm:gap-y-4 gap-y-4">
                <div className="flex border flex-col justify-start md:text-start sm:text-start text-center md:items-start sm:items-start items-center md:w-96 sm:w-72 w-auto">
                  <h1 className="text-xl font-semibold">AimForTeaching.in</h1>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-100 mt-2">
                    Master Your Teaching Exams, Study Tips, and Exam Updates in
                    One Place. Stay Informed with the Latest Teaching Exams
                    Updates and Strategies
                  </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 lg:gap-x-6 md:gap-x-4 gap-x-4 gap-y-6">
                  <div className="flex border flex-col w-auto md:text-start sm:text-start text-center">
                    <h1 className="text-lg font-semibold md:text-right sm:text-right text-center">
                      Product
                    </h1>
                    <ul className="flex flex-col gap-y-2 mt-3 md:items-end sm:items-end items-center">
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
                  <div className="flex border flex-col w-auto md:text-start sm:text-start text-center">
                    <h1 className="text-lg font-semibold md:text-right sm:text-right text-center">
                      Company
                    </h1>
                    <ul className="flex flex-col gap-y-2 mt-3 md:items-end sm:items-end items-center">
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
                  <div className="flex border flex-col w-auto md:text-start sm:text-start text-center">
                    <h1 className="text-lg font-semibold md:text-right sm:text-right text-center">
                      Support
                    </h1>
                    <ul className="flex flex-col gap-y-2 mt-3 md:items-end sm:items-end items-center">
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
                  <div className="flex border flex-col w-auto md:text-start sm:text-start text-center">
                    <h1 className="text-lg font-semibold md:text-right sm:text-right text-center">
                      Social
                    </h1>
                    <ul className="flex flex-col gap-y-2 mt-3 md:items-end sm:items-end items-center">
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

            <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between md:gap-y-0 sm:gap-y-4 gap-y-4">
              <div className="flex border md:justify-start sm:justify-start justify-center items-center">
                <p className="font-medium flex justify-center items-center place-content-center place-items-center text-gray-700 dark:text-gray-100">
                  &copy; 2023 aimforteaching.in | All rights reserved
                </p>
              </div>
              <div className="flex gap-x-4 justify-center items-center">
                <Link
                  className="flex border text-[#3b5998]"
                  href="/"
                  aria-labelledby="facebooklink"
                >
                  <SiFacebook size={22} />
                </Link>
                <Link
                  className="flex border text-[#3b5998]"
                  href="/"
                  aria-labelledby="telegramlink"
                >
                  <SiTelegram size={22} />
                </Link>
                <Link
                  className="flex border text-[#00405d]"
                  href="/"
                  aria-labelledby="instagramlink"
                >
                  <RiInstagramFill size={22} />
                </Link>
                <Link
                  className="flex border text-[#0a66c2]"
                  href="/"
                  aria-labelledby="linkedinlink"
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
