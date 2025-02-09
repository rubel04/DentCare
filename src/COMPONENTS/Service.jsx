import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { service } = props || {};
  const { id, treatment, image, description, cost } = service;
  return (
    <div className="card rounded-none">
      <figure className="h-full">
        <img className="h-full" src={image} alt={`${treatment} 'image`} />
      </figure>
      <div className="card-body hover:shadow-lg shadow transition duration-500">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-xl">{treatment}</h2>
          <p className="flex justify-end items-center font-medium">
            <FaDollarSign />
            {cost}
          </p>
        </div>
        <p className="text-gray-500">{description.slice(0, 80)}...</p>
        <div className="card-actions">
          <Link
            to={`/service/details/${id}`}
            className="px-8 py-3 cursor-pointer transition hover: rounded-2xl font-medium text-[#00bcf7] border border-[#00bcf7] hover:text-white hover:bg-gradient-to-r from-[#00bcf7] to-[#0076ed]"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
