import { FaChevronCircleDown, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ title, desc }) => {
  return (
    <div className=" transition-all ease-in group cursor-pointer flex items-center gap-4 border border-[#ebeff5] rounded-md pl-6 pr-20 py-4 hover:border-gray-900">
      {title === "Send us an email" ? (
        <FaChevronCircleDown size={24} className="group-hover:text-gray-900" />
      ) : (
        <FaPhoneAlt size={24} className="group-hover:text-gray-900" />
      )}

      <div className="flex flex-col gap-1.5">
        <p className="text-gray-700 group-hover:text-gray-900">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Contact;
