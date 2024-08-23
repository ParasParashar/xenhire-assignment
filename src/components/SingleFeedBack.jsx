const SingleFeedBack = ({ obj }) => {
  const { title, desc, name, pic, company } = obj;

  return (
    <div className=" flex flex-col gap-5 min-w-[370px] min-h-[470px] ">
      <h1 className=" font-semibold text-xl">{title}</h1>
      <p className=" text-gray-700 space-x-2">"{desc}"</p>

      <div className=" flex gap-3 items-center px-5">
        <div className=" w-11 h-11 overflow-hidden">
          <img src={pic} className=" rounded-full object-cover" />
        </div>

        <div className=" flex flex-col">
          <p>{name}</p>
          <p className=" text-blue-800 text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeedBack;
