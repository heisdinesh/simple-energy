import React from "react";
import Logo from "../images/simple_energy_logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      <div>
        <img className="h-80 w-80" src={Logo} alt="Logo" />
      </div>
      <div>
        <button
          className="px-6 py-2 bg-green-400 text-white font-semibold text-sm rounded-md"
          onClick={() => navigate("/dashbord")}
        >
          Dashbord
        </button>
      </div>
    </div>
  );
};

export default Home;
