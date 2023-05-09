import React from "react";
import { AiFillStar } from "react-icons/ai";
import Review from "./Review";

const MapPopup = ({ name, imgUrl, latitude, longitude, onClose, id }) => {
  let targetUrl = "https://www.digistore24.com/product/489108/?aff=melania21";
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen
    bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center"
    >
      <div
        className="relative bg-white rounded-lg p-6 mx-4 md:mx-4
      "
      >
        <button
          className="absolute -top-4 -right-4 px-4 py-2 bg-gray-300 rounded-full text-gray-600
          text-xl font-black
          hover:bg-gray-400 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          X
        </button>
        <div className="text-2xl font-bold mb-2">{name}</div>
        <div className="flex mb-4">
          <AiFillStar className="text-yellow-300 text-3xl" />
          <AiFillStar className="text-yellow-300 text-3xl" />
          <AiFillStar className="text-yellow-300 text-3xl" />
          <AiFillStar className="text-yellow-300 text-3xl" />
          <AiFillStar className="text-yellow-300 text-3xl" />
          <span className="text-xl text-slate-600"> (43)</span>
        </div>
        <img className="h-72 rounded-xl  mx-auto" src={imgUrl} />
        <div className="grid justify-items-center items-center mb-4">
          <div>
            <a href={targetUrl} target="_blank">
              <button
                className="bg-green-500 hover:bg-white
              hover:text-green-500 border-[0.5px] border-black
              transition duration-300 ease-in-out
              mt-4 text-white font-bold py-2 px-10
              text-xl uppercase
              rounded"
              >
                Cash out now
              </button>
            </a>
          </div>
        </div>
        <div>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default MapPopup;
