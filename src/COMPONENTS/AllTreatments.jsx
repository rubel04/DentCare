import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const AllTreatments = () => {
  const services = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default AllTreatments;
