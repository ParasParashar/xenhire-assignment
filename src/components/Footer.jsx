import { FaInstagram, FaFacebook, FaHeart } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className=" flex flex-col ">
      {/* top section */}
      <section className=" flex flex-col gap-2 sm:flex-row items-center justify-between p-10 px-32  bg-[#f0f9fe]">
        <p className=" flex flex-col gap-2 ">
          <span>Prepare for your next interview</span>
          <span>with mentors from top companies</span>
        </p>

        <Contact title={"Send us an email"} desc={"contactus@preplaced.in"} />
        <Contact title={"Give us a call"} desc={"+91 96990 39801"} />
      </section>

      {/* middle section */}
      <section className=" flex items-center justify-between py-10 px-10  bg-[#bedbfd] px-32">
        <p className=" text-lg sm:text-2xl font-semibold space-x-4">
          Still Have Doubts ?
        </p>
        <button className=" hover:opacity-75 flex gap-1 items-center bg-[#141146] text-white rounded-md px-4 py-2 text-sm sm:text-lg">
          <span>Book A session With Our Team</span>
          <IoMdArrowRoundForward />{" "}
        </button>
      </section>

      {/* end section */}
      <section className=" w-full pt-24 pb-4  px-10 lg:px-28 bg-[#101729]">
        <div className=" border-t border-gray-800 pt-4 flex flex-col gap-2 sm:flex-row w-full justify-between">
          <p className=" text-gray-400 text-sm">
            &copy; 2022 Preplaced Education Private Limited
          </p>
          <p className=" flex gap-1 text-gray-400 text-sm">
            <span>A BITSian Startup made with</span>
            <FaHeart size={16} color="red" />
            <span>in Bangalore</span>
          </p>
          <div className=" flex gap-2 text-gray-500">
            <FaInstagram size={24} className=" cursor-pointer" />
            <FaFacebook size={24} className=" cursor-pointer" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
