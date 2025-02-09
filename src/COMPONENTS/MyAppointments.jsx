import { IoIosCloseCircleOutline } from "react-icons/io";

const MyAppointments = () => {
  return (
    <div className="flex items-center gap-4 mt-8">
      <div className="flex w-full justify-between items-center bg-gray-100 p-4 rounded-lg">
        <div className="flex gap-4">
          <img className="w-20 h-20 object-cover bg-white" src="" alt="" />
          <div>
            <h3 className="text-xl font-bold mb-1">Name</h3>
            <p className="text-[#09080F99] font-medium">description</p>
            <p className="text-lg text-[#09080FCC] font-medium">Price:</p>
          </div>
        </div>
        <div>
          <button className=" text-red-300 cursor-pointer">
            <IoIosCloseCircleOutline className="text-3xl"></IoIosCloseCircleOutline>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between items-center bg-gray-100 p-4 rounded-lg">
        <div className="flex gap-4">
          <img className="w-20 h-20 object-cover bg-white" src="" alt="" />
          <div>
            <h3 className="text-xl font-bold mb-1">Name</h3>
            <p className="text-[#09080F99] font-medium">description</p>
            <p className="text-lg text-[#09080FCC] font-medium">Price:</p>
          </div>
        </div>
        <div>
          <button className=" text-red-300 cursor-pointer">
            <IoIosCloseCircleOutline className="text-3xl"></IoIosCloseCircleOutline>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
