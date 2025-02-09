import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="col-span-1 rounded py-24 bg-[#ccf3ff]">
            <div className="flex justify-center ">
            <div className="border-2 border-[#00bcf7] rounded-full p-4">
            <IoIosPerson  className="text-7xl" />
            </div>
            </div>
            <h3 className="text-2xl text-[#ffb507] font-medium text-center">Rubel islam</h3>
            <p className="text-base font-medium text-gray-600 text-center">Rubelislam@gmail.com</p>
            <p className="text-base font-medium text-gray-600 text-center">+8801745681645</p>
            <div className="m-4 space-y-4">
            <Link to="/myAppointments" className="btn w-full rounded-r-full">My Appointments</Link>
            <Link to="/allTreatments" className="btn w-full rounded-r-full">Explore Treatments</Link>
            <Link to="" className="btn w-full rounded-r-full">History</Link>
            </div>
            </div>
            <div className="col-span-3 rounded bg-[#d6f2fbb1]"></div>
        </div>
    );
};

export default Profile;