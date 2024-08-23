import TextEffect from "./TextEffect";

const Hero = () => {
  return (
    <section className="flex flex-col py-10 px-2 w-full  md:flex-row gap-3 items-center  justify-between">
      {/* left part of the hero section details part */}
      <div className="flex flex-col gap-5 w-full md:w-1/2 ">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1c2739]">
          Prepare for the interviews with a <TextEffect /> mentor
        </h2>
        <p className="text-[#a0a6be]  w-[80%]">
          Get interview-ready through 1:1 mentoring programs with real-life
          interviewrs from the world &apos;s best companies
        </p>
        <div className=" gap-4  flex items-center  justify-start ">
          <button className=" transition-all ease-in-out duration-300 hover:bg-black hover:text-white  border-[#101729]   p-2 px-2 md:p-2 md:px-4 border-2 bg-transparent  text-sm  md:text-md font-medium rounded-md">
            Explore Programs
          </button>
          <button className="  transition-all ease-in-out duration-300 hover:text-black hover:bg-transparent hover:shadow-lg p-2 px-2 md:p-2 md:px-4 text-white bg-[#101729] hover:border-[#101729] hover:border-2 text-sm  md:text-md font-medium rounded-md">
            Start Trial @ Rs199/-
          </button>
        </div>
        <div className="flex items-center  justify-between md:justify-start w-full md:w-3/4 ">
          <div className="flex flex-col gap-3 w-1/4">
            <p className="font-bold text-black">100%</p>
            <span className="text-sm  text-gray-400">Money-back Guarantee</span>
          </div>
          <div className="flex flex-col gap-3 w-1/4">
            <p className="font-bold text-black ">2000+</p>
            <span className="text-gray-400">Candidates Placed</span>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start w-1/4">
            <p className="font-bold text-black">1:1</p>
            <span className="text-gray-400">Personalised Preparation</span>
          </div>
        </div>
      </div>
      {/* right part of the hero section images part */}
    </section>
  );
};

export default Hero;
