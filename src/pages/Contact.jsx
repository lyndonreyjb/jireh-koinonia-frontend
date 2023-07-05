import RandomVerse from "./RandomVerse";
import bg from "../assets/bg.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="flex flex-col md:flex-row w-full md:w-4/5">
        <div
          className=" w-full flex justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg.toString()})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <RandomVerse />
        </div>

        <div className="w-full md:w-5/6 flex justify-center items-center p-10 mx-auto bg-neutral-200">
          <div className="w-full">
            <h1 className="text-5xl text-center uppercase">Chat with us</h1>
            <h3 className="text-2xl text-center uppercase mt-2 text-yellow-600">
              Get in contact with us
            </h3>
            <form className="mt-4">
              <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="border border-gray-300  rounded-lg outline-none w-full  p-4"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border border-gray-300  rounded-lg outline-none w-full  p-4"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Email"
                  className="mt-4 border border-gray-300  rounded-lg outline-none w-full  p-4"
                />
                <textarea
                  type="text"
                  placeholder="Message"
                  className="mt-4 border h-40 border-gray-300 outline-none p-4 rounded-lg"></textarea>
                <button className="mt-4 h-14 w-32 rounded-lg bg-yellow-600 text-white">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div id="map"></div>
      </div>
    </div>
  );
};

export default Contact;
