import { Link, useNavigate } from "react-router-dom";
import loginBanner from "../assets/banner.png";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../providers/AuthProvider";

const Register = () => {
  const {
    handleRegister,
    handleLoginWithGoogle,
    handleUpdateProfile,
    setUser,
  } = useContext(AuthenticationContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setError("");
    setSuccess("");

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log({ name, email, photo, password });
    handleRegister(email, password)
      .then((result) => {
        setUser(result.user);
        handleUpdateProfile(name, photo)
          .then((result) => console.log(result.user))
          .catch((error) => console.log(error.message));
        setSuccess("User registratin successfully");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    handleLoginWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setSuccess("User login sucessfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="flex items-center justify-evenly mt-10">
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="uppercase text-2xl flex items-center text-[#ffb507] font-medium">
            <p className="bg-[#ffb507] w-10 h-0.5 mr-2"></p>
            Register
          </h2>
          <div>
            <label>Name</label>
            <br />
            <input
              className="w-full py-2 mt-2 px-4 rounded border border-gray-400 shadow"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>
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
            <label>Photo URL</label>
            <br />
            <input
              className="w-full py-2 mt-2 px-4 rounded border border-gray-400 shadow"
              type="text"
              name="photo"
              placeholder="Your Photo URL"
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
          {success && <p className="text-[#00bcf7]">{success && success}</p>}
          {error && <p className="text-red-500">{error && error}</p>}
          <fieldset className="fieldset">
            <label className="fieldset-label text-lg">
              <div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox mr-2"
                />
                Remember me
                <p className="pl-8 text-sm">
                  Save my register details for next time
                </p>
              </div>
            </label>
          </fieldset>
          <button
            type="submit"
            className="px-8 w-full py-3 cursor-pointer transition rounded-2xl font-medium text-white bg-gradient-to-r from-[#00bcf7] to-[#0076ed]"
          >
            Register
          </button>
          <h5 className="uppercase flex items-center text-[#ffb507] font-medium">
            <p className="bg-[#ffb507] w-full h-0.5 mr-2"></p>
            OR
            <p className="bg-[#ffb507] w-full h-0.5 ml-2"></p>
          </h5>
          <p>
            Allready Have an Account? Please{" "}
            <Link
              to="/login"
              className="text-[#00bcf7] font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="px-8 w-full py-3 cursor-pointer transition rounded-2xl font-medium text-[#00bcf7] border border-[#00bcf7] hover:text-white hover:bg-gradient-to-r from-[#00bcf7] to-[#0076ed]"
        >
          Login With Google
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center">
          Join{" "}
          <a className="text-2xl cursor-pointer font-bold text-[#00bcf7]">
            Dent<span className="text-[#ffb507]">Care</span>
            <span className="text-[#00bcf7]">.</span>
          </a>{" "}
          <br /> – Create Your Account for Better Dental Care
        </h2>
        <img src={loginBanner} alt="" />
      </div>
    </div>
  );
};

export default Register;
