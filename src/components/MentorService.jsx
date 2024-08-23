import React from "react";
import { mentorHelp } from "../utils/dummy-data";

const MentorService = () => {
  return (
    <section className="py-16 px-6 w-full flex-col flex gap-y-2">
      <div className="container mx-auto ">
        <h2 className="text-2xl md:text-4xl font-bold">
          How can the mentors help you?
        </h2>
        <p className="text-xs md:text-sm text-gray-400">
          Prepare with top mentors to ace your interview
        </p>
        <div className="flex flex-col md:flex-row justify-center w-full items-start mt-8 gap-5 rounded-sm">
          {mentorHelp.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col w-full transition-colors gap-5 p-5 pb-16 hover:border-2 rounded-sm  ease-in hover:border-[#8ce2d1] hover:bg-transparent  ${
                index % 2 ? "bg-[#fff7ec]" : "bg-[#f0f9fe] "
              }`}
            >
              {" "}
              <h6 className="text-xl md:text-2xl font-bold">{item.title}</h6>
              <p className="text-[#737373] text-xs md:text-sm">
                {item.description}
              </p>
              <div className="flex flex-col gap-8 w-full mt-2">
                {item.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.name}
                      className="flex items-center justify-between w-full text-[#3a4043]"
                    >
                      <p className="text-sm font-semibold">{service.name}</p>
                      <Icon size={15} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorService;
