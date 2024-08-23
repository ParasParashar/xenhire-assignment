import { problems } from "../utils/dummy-data";

const Problems = () => {
  return (
    <section className=" flex flex-col gap-4 items-center   justify-center py-16 px-6 w-full">
      <h6 className="text-md text-[#e44d3e]  w-full text-start font-medium">
        Problems
      </h6>
      <h2 className="text-2xl md:text-4xl font-bold w-full text-start">
        Things every aspiring candidate gets stuck with
      </h2>
      <div className="container grid grid-cols-1 mt-8 md:grid-cols-2 gap-8  justify-center  content-center  items-center ">
        {problems.map((item, index) => {
          const Icon = item.icons;
          return (
            <div
              key={index}
              className="flex items-center justify-start gap-x-3  px-2 p-2 "
            >
              <Icon size={25} className="text-[#737373]" />
              <p className="text-lg md:text-[20px] text-gray-700 text-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Problems;
