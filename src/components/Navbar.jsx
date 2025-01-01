import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import saylani from "../images/saylani.png";
import LoginModal from "./LoginModal";
import { Tooltip as ReactTooltip } from "react-tooltip";

function Navbar() {
  return (

    <nav className="p-2 bg-navbarColor flex justify-between items-center ">

      {/* for Logo/ image */}
      <div className="flex sm:mx-4 md:mx-8 lg:mx-10">
        <span>
        <Link
          to="/"
          className="text-headingColor text-shadow-white font-semibold text-sm md:text-base lg:text-lg hover:text-white "
        >
          <img
            src={logo}
            alt="SMIT"
            className="w-10 h-10 lg:w-16 lg:h-16 rounded-full"
            data-tooltip-id="logo-tooltip"
          />
          <ReactTooltip id="logo-tooltip" place="bottom" content="Home"/>
          </Link>
        </span>
        <span className="hidden lg:flex md:flex lg:mx-8 md:mx-2 lg:my-4 md:my-1 ">
          <p className="md:text-md lg:text-2xl text-headingColor pacifico-regular text-shadow-white ">
            Empowering Innovation Through I.T Excellence
          </p>
        </span>
      </div>

      {/*--------------------- for navigation links -------------------------------*/}

      <div className="flex items-center justify-center gap-8 sm:mx-4 md:mx-8 lg:mx-10">
        
        <LoginModal/>
        
        {/* <Link
          to="/"
          className="text-headingColor text-shadow-white font-semibold text-sm md:text-base lg:text-lg hover:text-white "
        >
          Home
        </Link> */}

        {/* <Link
          to="/About"
          className="text-headingColor text-shadow-white font-semibold text-sm md:text-base lg:text-lg  hover:text-white "
        >
          About
        </Link> */}

        {/* Saylani welfare website link */}
        <Link
          className=" w-28 h-8 lg:w-32 lg:h-10"
          to={"https://www.saylaniwelfare.com/"}
          target="_blank"
        >
          <img
            src={saylani}
            alt="MS"
            data-tooltip-id="saylani-tooltip"
          />
          <ReactTooltip id="saylani-tooltip" place="bottom" content="About Saylani"/>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
