import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiTwotonePhone, AiFillHome } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <footer>
      {/* Newsletter */}
      <div className="col-span-4   flex justify-center pt-10 ">
        <form action="#" className="w-5/6 md:w-2/4">
          <div className="gird-cols-3 grid gap-4 ">
            <h6 className=" flex justify-center font-semibold uppercase md:justify-start">
              Sign up for a Newsletter
            </h6>

            <div
              className="relative md:mb-6 flex flex-col"
              data-te-input-wrapper-init>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-gray-300  rounded-l-md outline-none w-full  p-4"
                />
                <button
                  type="submit"
                  className="bg-yellow-600  text-white  rounded-r-md w-1/5">
                  Submit
                </button>
              </div>

              <p
                id="helper-text-explanation"
                className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                We’ll never share your details. Read our{" "}
                <a
                  href="#"
                  className="font-medium text-slate-100 hover:underline ">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </form>
      </div>

      {/*  */}
      <div className="w-5/6 md:container mx-auto py-10 text-center md:text-left">
        <div className="flex-cols md:flex">
          {/*  */}
          <div className="w-full md:w-3/6">
            <h2 className="mb-4 text-2xl flex items-center justify-center font-semibold uppercase md:justify-start">
              Jireh Koinonia Calgary
            </h2>
            <p>
              Welcome to our vibrant church community where faith comes alive.
              We gather in love, worship with passion, and serve with
              compassion. Join us as we grow together, find purpose, and make a
              positive impact in the world.
            </p>
          </div>
          {/*  */}
          <div className="mx-auto mt-3">
            <h6 className=" text-2xl flex justify-center font-semibold uppercase md:justify-start">
              Socials
            </h6>
            <div className="flex text-2xl justify-center">
              <div className="mr-2">
                <a
                  href="#!"
                  className="text-neutral-200  hover:text-yellow-600">
                  <FaInstagram />
                </a>
              </div>
              <div className="">
                <a
                  href="#!"
                  className="text-neutral-200  hover:text-yellow-600">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div className="mx-auto mt-4">
            <h6 className="text-2xl flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <AiFillHome />
              <p className="ml-2">5510 26 Ave NE, Calgary, AB T1Y 6S1</p>
            </div>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <IoMail />
              <p className="ml-2">Jirehkoinoniacalgary@gmail.com</p>
            </div>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <AiTwotonePhone />
              <p className="ml-2">+ 01 234 567 88</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright: </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tailwind-elements.com/">
          Jireh Koinonia Calgary
        </a>
      </div>
    </footer>
  );
};

export default Footer;
