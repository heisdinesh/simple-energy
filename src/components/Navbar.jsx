import React from "react";
import { MdNotifications } from "react-icons/md";
import Logo from "../images/simple_energy_logo.svg";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <div className="fixed top-0 z-10 bg-green-400  border-b-2 flex justify-between items-center p-4 w-full ">
=======
    <div className="fixed  z-10 bg-green-400  border-b-2 flex justify-between items-center p-4 w-full ">
>>>>>>> b9f1be80fb4d8a39bacfbd31a77a814650ea6d3e
      <div>
        <img className="" src={Logo} alt="Logo" />
      </div>
      <div className="p-2 border-2 rounded-md">
        <p className="text-lg">
          <MdNotifications />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
