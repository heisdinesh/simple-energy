import React, { useState, useEffect } from "react";
import axios from "axios";

import { AiOutlineArrowRight } from "react-icons/ai";
import { RxCountdownTimer } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BsBatteryHalf,
  BsFillLockFill,
  BsFillUnlockFill,
} from "react-icons/bs";
import { FaTemperatureHalf } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";
import Map from "../images/map.png";
// import Vehicle from "../data/Vehicle";
import Navbar from "../components/Navbar";
import vehicle from "../data/Vehicle";

const Dashbord = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/vehicleInfo"
      );
      setData(response.data);
      if (response.data.temperature > 30) {
        toast("your vehicle is heating up");
      }
      if (response.data.charge < 20) {
        toast("You dont have enough charge");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 10000); // Replace 60000 with your desired interval in milliseconds (e.g., 60000ms = 1 minute)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);
  return (
    <>
      {/* <div className=" w-full "> */}
      <Navbar />
      <ToastContainer />
      {/* </div> */}
      <div className="min-h-screen bg-slate-300 flex flex-col justify-start gap-6 p-4">
        <div className="flex  flex-col justify-evenly gap-6">
          <div className="p-0">
            <img className="w-screen p-0" src={Map} alt="" />
          </div>
          <div className=" flex w-full items-center justify-evenly flex-col ">
            <p className="text-md text-center">{data.name} is</p>
            <p className="italic text-2xl text-center font-semibold  pb-2 border-b-4 border-green-400">
              {data.locked ? "Locked & Safe" : "Ready  to Ride"}
            </p>
          </div>
          <div className="flex w-full items-center justify-evenly flex-wrap">
            <div className="flex flex-col items-center justify-center gap-2">
              <div
                className={`${
                  data.canBeTravelled < 4 ? "bg-red-300" : "bg-slate-300"
                } border border-slate-400 flex justify-center items-center h-12 w-12 shadow-sm rounded-full`}
              >
                <p className="text-black text-2xl">
                  <BsBatteryHalf />
                </p>
              </div>
              <p className=" text-sm font-semibold">{data.canBeTravelled} KM</p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="bg-slate-300 border border-slate-400 flex justify-center items-center h-20 w-20 shadow-sm rounded-full">
                {data.locked ? (
                  <button
                    onClick={() => setData({ ...data, locked: !data.locked })}
                    className="text-black text-2xl"
                  >
                    <BsFillLockFill />
                  </button>
                ) : (
                  <button
                    onClick={() => setData({ ...data, locked: !data.locked })}
                    className="text-black text-2xl"
                  >
                    <BsFillUnlockFill />
                  </button>
                )}
              </div>
              <p className=" text-sm font-semibold">
                {data.locked ? "locked" : "unlocked"}
              </p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center gap-2">
              <div
                className={`${
                  data.temperature > 30 ? "bg-red-300" : "bg-slate-300"
                } border border-slate-400 flex justify-center items-center h-12 w-12 shadow-sm rounded-full`}
              >
                <p className="text-black text-2xl">
                  <CiTempHigh />
                </p>
              </div>
              <p className=" text-sm font-semibold">{data.temperature}° C</p>
            </div>
          </div>
          <div className="flex  text-sm font-semibold items-center justify-center gap-2">
            <p className="text-lg">
              <RxCountdownTimer />
            </p>
            <p className="">Last Updated {data.lastUpdate} ago</p>
          </div>
        </div>
        <div className="flex shadow-md p-4">
          <div className="flex-col flex justify-start items-start gap-4 ">
            <div className="flex flex-col gap-2 ">
              <p className="font-bold">Bluetooth not paired</p>
              <p className="">Connect with Bluetooth to unlock, access</p>
            </div>
            <button className="flex items-center justify-start font-semibold text-green-800">
              <p>Connect now</p>
              <p>
                <AiOutlineArrowRight />
              </p>
            </button>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="  flex flex-col  shadow-md items-start gap-4 p-4">
          <p className="w-5/6 font-bold ">
            You are revolutionary! Saving{" "}
            <span className="text-green-800">₹ 9.91</span> on your journey to
            #EndIceAge
          </p>
          <div className="flex items-center justify-between gap-8 sm:gap-16 ">
            <div className="flex flex-col justify-start items-start gap-1">
              <p className="text-sm">Distance</p>
              <p className="font-semibold">{data.distance} km</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <p className="text-sm">Petrol Saved</p>
              <p className="font-semibold">{data.petrolSaved} litres</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <p className="text-sm">CO2 Avoided</p>
              <p className="font-semibold">{data.CO2Avoided} kg</p>
            </div>
          </div>
          <button className="flex items-center justify-start font-semibold text-green-800">
            <p>Share your impact</p>
            <p>
              <AiOutlineArrowRight />
            </p>
          </button>
        </div>
        <div className="flex flex-col items-start gap-4 p-4 shadow-md">
          <p className="w-5/6 font-bold ">Get Simple Care</p>
          <p className="w-5/6">
            Free Roadside Assistance, home service and more on an yearly
            subscription.
          </p>

          <button className="flex items-center justify-center font-semibold text-green-800">
            <p>Explore Plans</p>
            <p>
              <AiOutlineArrowRight />
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
