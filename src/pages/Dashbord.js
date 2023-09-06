import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RxCountdownTimer } from "react-icons/rx";
import { BsBatteryHalf, BsFillLockFill } from "react-icons/bs";
import { FaTemperatureHalf } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";
import Map from "../images/map.png";
import Vehicle from "../data/Vehicle";
import Navbar from "../components/Navbar";
import vehicle from "../data/Vehicle";

const Dashbord = () => {
  return (
    <>
      {/* <div className=" w-full "> */}
      <Navbar />
      {/* </div> */}
      <div className="min-h-screen bg-slate-300 flex flex-col justify-start gap-6 p-4">
        <div className="flex mt-20 flex-col justify-evenly gap-6">
          <div className="p-0">
            <img className="w-screen p-0" src={Map} alt="" />
          </div>
          <div className=" flex w-full items-center justify-evenly flex-col ">
            <p className="text-md text-center">{vehicle.name} is</p>
            <p className="italic text-2xl text-center font-semibold  pb-2 border-b-4 border-green-400">
              Locked & Safe
            </p>
          </div>
          <div className="flex w-full items-center justify-evenly flex-wrap">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="bg-slate-300 border border-slate-400 flex justify-center items-center h-12 w-12 shadow-sm rounded-full">
                <p className="text-black text-2xl">
                  <BsBatteryHalf />
                </p>
              </div>
              <p className=" text-sm font-semibold">
                {Vehicle.canBeTravelled} KM
              </p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="bg-slate-300 border border-slate-400 flex justify-center items-center h-20 w-20 shadow-sm rounded-full">
                <p className="text-black text-2xl">
                  <BsFillLockFill />
                </p>
              </div>
              <p className=" text-sm font-semibold">Locked</p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="bg-slate-300 border border-slate-400 flex justify-center items-center h-12 w-12 shadow-sm rounded-full">
                <p className="text-black text-2xl">
                  <CiTempHigh />
                </p>
              </div>
              <p className=" text-sm font-semibold">{vehicle.temperature}° C</p>
            </div>
          </div>
          <div className="flex  text-sm font-semibold items-center justify-center gap-2">
            <p className="text-lg">
              <RxCountdownTimer />
            </p>
            <p className="">Last Updated {vehicle.lastUpdate} ago</p>
          </div>
        </div>
        <div className="flex shadow-md p-4">
          <div className="flex-col flex justify-start items-start gap-4 ">
            <div className="flex flex-col gap-2 ">
              <p className="font-bold">Bluetooth not paired</p>
              <p className="">Connect with Bluetooth to unlock, access</p>
            </div>
            <div className="flex items-center justify-start font-semibold text-green-800">
              <p>Connect now</p>
              <p>
                <AiOutlineArrowRight />
              </p>
            </div>
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
              <p className="font-semibold">{vehicle.distance} km</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <p className="text-sm">Petrol Saved</p>
              <p className="font-semibold">{vehicle.petrolSaved} litres</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <p className="text-sm">CO2 Avoided</p>
              <p className="font-semibold">{vehicle.CO2Avoided} kg</p>
            </div>
          </div>
          <div className="flex items-center justify-start font-semibold text-green-800">
            <p>Share your impact</p>
            <p>
              <AiOutlineArrowRight />
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 p-4 shadow-md">
          <p className="w-5/6 font-bold ">Get Simple Care</p>
          <p className="w-5/6">
            Free Roadside Assistance, home service and more on an yearly
            subscription.
          </p>

          <div className="flex items-center justify-center font-semibold text-green-800">
            <p>Explore Plans</p>
            <p>
              <AiOutlineArrowRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
