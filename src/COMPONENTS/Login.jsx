import { Link } from "react-router-dom";
import loginBanner from "../assets/banner.png";

const Login = () => {
  return (
    <div className="flex items-center justify-evenly mt-10">
      <div>
        <h2 className="text-2xl font-bold text-center">
          Welcome to{" "}
          <a className="text-2xl cursor-pointer font-bold text-[#00bcf7]">
            Dent<span className="text-[#ffb507]">Care</span>
            <span className="text-[#00bcf7]">.</span>
          </a>{" "}
          <br /> – Secure Login for Your Dental Care
        </h2>
        <img src={loginBanner} alt="" />
      </div>
      <form className="space-y-4">
        <h2 className="uppercase text-2xl flex items-center text-[#ffb507] font-medium">
          <p className="bg-[#ffb507] w-10 h-0.5 mr-2"></p>
          Login
        </h2>
        <div>
          <label>Email</label>
          <br />
          <input
            className="w-full py-2 mt-2 px-4 rounded border border-gray-400 shadow"
            type="email"
            name="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            className="w-full mt-2 py-2 px-4 rounded border border-gray-400 shadow"
            type="password"
            name="password"
            placeholder="******"
          />
        </div>
        <fieldset className="fieldset">
          <label className="fieldset-label text-lg">
            <div>
              <input type="checkbox" defaultChecked className="checkbox mr-2" />
              Remember me
              <p className="pl-8 text-sm">
                Save my login details for next time
              </p>
            </div>
          </label>
        </fieldset>
        <button className="px-8 w-full py-3 cursor-pointer transition rounded-2xl font-medium text-white bg-gradient-to-r from-[#00bcf7] to-[#0076ed]">
          Login
        </button>
        <h5 className="uppercase flex items-center text-[#ffb507] font-medium">
          <p className="bg-[#ffb507] w-full h-0.5 mr-2"></p>
          OR
          <p className="bg-[#ffb507] w-full h-0.5 ml-2"></p>
        </h5>
        <p>
          Dont Have an Account? Please{" "}
          <Link
            to="/register"
            className="text-[#00bcf7] font-medium hover:underline"
          >
            Register
          </Link>
        </p>
        <button className="px-8 w-full py-3 cursor-pointer transition rounded-2xl font-medium text-[#00bcf7] border border-[#00bcf7] hover:text-white hover:bg-gradient-to-r from-[#00bcf7] to-[#0076ed]">
          Login With Google
        </button>
      </form>
    </div>
  );
};

export default Login;
