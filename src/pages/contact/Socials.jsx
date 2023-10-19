import { AiTwotonePhone, AiFillHome } from "react-icons/ai";
import { IoMail } from "react-icons/io5";

const Socials = () => {
  return (
    <div className="h-full mx-auto p-14 justify-center items-center bg-white">
      <div className="grid grid-rows-1 md:grid-cols-3 gap-8 ">
        <div className=" flex flex-col items-center justify-center md:justify-start text-center">
          <div className="text-5xl">
            <div className="rounded-full bg-yellow-600 flex items-center justify-center w-24 h-24">
              <AiFillHome className="text-white" />
            </div>
          </div>
          <h3 className="uppercase font-extrabold text-xl mt-4 text-slate-900">
            Join Us
          </h3>
          <p>5510 26 Ave NE, Calgary, AB T1Y 6S1</p>
        </div>
        <div className="flex flex-col items-center justify-center md:justify-start text-center">
          <div className="text-5xl">
            <div className="rounded-full bg-yellow-600 flex items-center justify-center w-24 h-24">
              <IoMail className="text-white" />
            </div>
          </div>
          <h3 className="uppercase font-extrabold text-xl mt-4 text-slate-900">
            Email
          </h3>
          <p>Jirehkoinoniacalgary@gmail.com</p>
        </div>
        <div className="flex flex-col items-center justify-center md:justify-start text-center">
          <div className="text-5xl">
            <div className="rounded-full bg-yellow-600 flex items-center justify-center w-24 h-24">
              <AiTwotonePhone className="text-white" />
            </div>
          </div>
          {/* <h3 className="uppercase font-extrabold text-xl mt-4 text-slate-900">
            Phone
          </h3>
          <p>+ 403 555 5555</p> */}
        </div>
      </div>
    </div>
  );
};

export default Socials;
