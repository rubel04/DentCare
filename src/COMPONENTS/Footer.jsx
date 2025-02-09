import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-100 p-10 mt-10">
      <aside>
        <a className="text-2xl cursor-pointer font-bold text-[#00bcf7]">
          Dent<span className="text-[#ffb507]">Care</span>
          <span className="text-[#00bcf7]">.</span>
        </a>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
          elit.Pellentesque sed eu mauris <br /> adipiscing viverra eget
          facilisi fames.
        </p>
        <div className="flex gap-3 text-2xl">
            <p className="text-[#00bcf7]"><CiFacebook /></p>
            <p className="text-[#00bcf7]"><FaInstagram /></p>
            <p className="text-[#00bcf7]"><CiTwitter /></p>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
