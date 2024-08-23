import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex items-center p-3  w-full justify-between">
      <h3 className="text-[#323232] font-bold text-lg">Preplaced</h3>
      <div className="flex items-center gap-x-5">
        <a href="/" className="text-md font-medium hover:underline">
          Login/Signup
        </a>
        <button className=" text-lg font-bold text-white flex items-center justify-between gap-x-2 p-2 rounded-full bg-[#111828] hover:bg-opacity-65">
          Book Trial
          <MdArrowOutward />
        </button>
      </div>
    </header>
  );
};

export default Header;
