import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Service from "./Service";
import Feedback from "./Review";
import Footer from "./Footer";

function Home() {
  const services = useLoaderData();
  // console.log(services);
  return (
    <>
      <Banner></Banner>
      <div>
        <div className="mt-20 mb-10">
          <h4 className="uppercase flex items-center justify-center text-[#ffb507] font-medium">
            <p className="bg-[#ffb507] w-10 h-0.5 mr-2"></p>
            service
          </h4>
          <h2 className="text-4xl font-bold text-center">
            Best Services of DentCare
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(0, 4).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        <button className="px-8 block my-10 m-auto py-3 cursor-pointer rounded-2xl font-medium text-white bg-gradient-to-r from-[#00bcf7] to-[#0076ed] )">
          <Link to='/allTreatments'>Show More</Link>
        </button>
      </div>
      <Feedback></Feedback>
      <Footer></Footer>
    </>
  );
}

export default Home;
