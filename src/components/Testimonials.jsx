import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonialsData } from "../utils/dummy-data";
import SingleFeedBack from "./SingleFeedBack";

const Testimonials = () => {
  return (
    <section className="flex py-16 px-6  gap-10 flex-col justify-start    w-full">
      <div className=" flex flex-col gap-1.5">
        <h1 className=" text-2xl md:text-4xl font-bold space-x-2">
          What do our customers say?
        </h1>
        <p className=" text-blue-600 text-xs">
          We're the highest rated mock interview platform out there
        </p>
      </div>
      <div className=" w-full flex items-center">
        <IoIosArrowBack
          size={28}
          className=" bg-blue-500 text-white rounded-full cursor-pointer"
        />
        <div className=" w-full flex gap-10 overflow-x-scroll main-scrollbar">
          {testimonialsData.map((obj, i) => (
            <SingleFeedBack obj={obj} />
          ))}
        </div>
        <IoIosArrowForward
          size={28}
          className=" bg-blue-500 text-white rounded-full cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Testimonials;
