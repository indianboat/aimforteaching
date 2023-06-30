"use client";

import Link from "next/link";
import { SiFacebook, SiTelegram, SiLinkedin } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => { 
  return (
    <>
      <footer class="footer border border-red-500 py-2">
        <div className="container md:w-11/12 sm:w-full w-full mx-auto lg:px-4 md:px-3 sm:px-2 px-2 py-2 border border-blue-600">
          <div className="flex md:flex-row sm:flex-row flex-col justify-between py-1 md:gap-y-0 sm:gap-y-4 gap-y-4">
            <div className="flex flex-col border justify-center md:text-start sm:text-start text-center  md:items-start sm:items-start items-center">
              <h1 className="text-lg font-medium">Join our newsletter</h1>
              <h1 className="text-sm font-medium text-gray-700">
                We will send you a nice news once a week, no spam.
              </h1>
            </div>
            <div className="flex border items-center  md:justify-start sm:justify-start justify-center">
              <form method="post">
                <input
                  className="border border-rose-900"
                  type="text"
                  placeholder="Enter your email address"
                />
                <button
                  className="border"
                  onClick={(e) => e.preventDefault()}
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="my-6 border py-1">
            <div className="flex md:flex-row sm:flex-row flex-col gap-x-3 justify-between md:gap-y-0 sm:gap-y-4 gap-y-4">
              <div className="flex border flex-col justify-start md:text-start sm:text-start text-center md:items-start sm:items-start items-center md:w-80 sm:w-96 w-full">
                <h1 className="text-2xl font-semibold">AimForTeaching.in</h1>
                <p className="text-sm font-medium text-gray-700 mt-2">
                  Master Your Teaching Exams, Study Tips, and Exam Updates in
                  One Place. Stay Informed with the Latest Teaching Exams
                  Updates and Strategies
                </p>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 lg:gap-x-4 md:gap-4 gap-4">
                <div className="flex border flex-col md:w-40 sm:w-full w-full">
                  <h1 className="text-lg font-semibold">Product</h1>
                  <ul className="flex flex-col gap-y-2 mt-3">
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Tutorials
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
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
                <div className="flex border flex-col md:w-40 sm:w-full w-full">
                  <h1 className="text-lg font-semibold">Company</h1>
                  <ul className="flex flex-col gap-y-2 mt-3">
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Press
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Partners
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex border flex-col md:w-40 sm:w-full w-full">
                  <h1 className="text-lg font-semibold">Support</h1>
                  <ul className="flex flex-col gap-y-2 mt-3">
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Legal
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Status
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex border flex-col md:w-40 sm:w-full w-full">
                  <h1 className="text-lg font-semibold">Soical</h1>
                  <ul className="flex flex-col gap-y-2 mt-3">
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-800" href="/">
                        Telegram
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between md:gap-y-0 sm:gap-y-4 gap-y-4">
            <div className="flex border md:justify-start sm:justify-start justify-center">
              <p className="text-sm font-medium text-gray-700">
                &copy; 2023 aimforteaching.in | All rights reserved
              </p>
            </div>
            <div className="flex gap-x-4 justify-center items-center">
            <Link className="flex border" href="/"><SiFacebook /></Link>
            <Link className="flex border" href="/"><SiTelegram /></Link>
            <Link className="flex border" href="/"><RiInstagramFill /></Link>
            <Link className="flex border" href="/"><SiLinkedin /></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

//  gap in mobile
