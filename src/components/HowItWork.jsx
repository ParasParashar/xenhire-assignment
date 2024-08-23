import { howItWorks } from "../utils/dummy-data";

const HowItWorks = () => {
  return (
    <section className="bg-[#f7f5ff] py-16 px-6 w-full  rounded-lg  ">
      <h2 className="text-2xl md:text-4xl font-bold">How it Works</h2>
      <ul className="flex flex-col gap-10  md:flex-row justify-center  items-center w-full mt-8">
        {howItWorks.map((item) => {
          const Icon = item.icons;
          return (
            <li
              key={item.title}
              className="flex flex-col  items-start justify-start w-full gap-2"
            >
              <Icon size={30} className="text-gray-500" />
              <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-400 font-medium">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HowItWorks;
