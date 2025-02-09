import { FaDollarSign } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { treatment, image, description, cost } = service;
  return (
    <div className="flex items-center space-x-6 mt-10">
      <div className="w-1/2">
        <img className="w-full rounded-2xl" src={image} alt="" />
      </div>
      <div className="w-1/2 space-y-4">
        <h3 className="text-2xl font-medium mt-0">{treatment}</h3>
        <p className="text-gray-700 w-10/12">{description}</p>
        <p className="text-lg font-medium flex items-center">
          <span>Cost:</span> <FaDollarSign className="text-base font-normal" />
          {cost}
        </p>
        <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="px-8 py-3 cursor-pointer rounded-2xl font-medium text-white bg-gradient-to-r from-[#00bcf7] to-[#0076ed] )">
          Make Appointment
        </button>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default ServiceDetails;
