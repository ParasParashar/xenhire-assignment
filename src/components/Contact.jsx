import { FaChevronCircleDown, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ title, desc }) => {
  return (
    <div className=" w-64 h-24 px-4  flex items-center gap-4  rounded-md border border-[#ebeff5]  hover:border-gray-900">
      {title === "Send us an email" ? (
        <FaChevronCircleDown size={24} className="group-hover:text-gray-900" />
      ) : (
        <FaPhoneAlt size={24} className="group-hover:text-gray-900" />
      )}

      <div className=" flex w-full flex-col gap-1.5">
        <p className=" text-gray-700 group-hover:text-gray-900">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Contact;
