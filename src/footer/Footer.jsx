import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiTwotonePhone, AiFillHome } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";
import { IoMail } from "react-icons/io5";
import { client } from "../client";
import Loading from "../Loading";
const Footer = () => {
  const [footer, setFooter] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = '*[_type == "footer"]';
      const data = await client.fetch(query);
      setFooter(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <footer>
      {/* Newsletter */}
      <div className="col-span-4 p-10 pb-4 md:p-14  flex justify-center">
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
                  className="border border-gray-300  rounded-l-lg outline-none w-full  p-4"
                />
                <button
                  type="submit"
                  className="bg-yellow-600 hover:bg-yellow-500 text-white rounded-r-md w-2/5 md:w-1/5 flex justify-center items-center">
                  <span className="hidden md:block">Submit</span>
                  <div className=" block md:hidden text-2xl">
                    <VscSend />
                  </div>
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
        {footer.length > 0 && (
          <div className="flex-cols h-full md:flex text-neutral-200">
            <div className="w-full md:w-3/6 mt-3 md:mt-0">
              <h2 className="mb-4 text-2xl flex items-center justify-center font-semibold uppercase md:justify-start">
                {footer[1].title}
              </h2>

              <p>{footer[1].description}</p>
            </div>

            <div className="mx-aut mt-3 md:mt-0">
              <h6 className="mb-4  text-2xl flex justify-center font-semibold uppercase md:justify-start">
                {footer[0].title}
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
            <div className="mx-auto mt-3 md:mt-0">
              <h6 className="mb-4 text-2xl flex justify-center font-semibold uppercase md:justify-start">
                {footer[2].title}
              </h6>
              <div className="mb-4 flex items-center justify-center md:justify-start">
                <AiFillHome />
                <p className="ml-2">{footer[2].address}</p>
              </div>
              <div className="mb-4 flex items-center justify-center md:justify-start">
                <IoMail />
                <p className="ml-2">{footer[2].email}</p>
              </div>
              <div className="mb-4 flex items-center justify-center md:justify-start">
                <AiTwotonePhone />
                <p className="ml-2">{footer[2].phone}</p>
              </div>
            </div>
          </div>
        )}
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
