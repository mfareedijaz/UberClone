import React, { useRef } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const otp = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h5
        className="text-center"
        onClick={() => props.setRidePopupPanel(false)}
      >
        <i className="text-xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-bold mb-2">Confirm this ride to Start</h3>

      <div className="flex items-center justify-between mt-4 p-3 rounded-lg bg-yellow-300">
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
            alt=""
          />
          <h2 className="text-lg font-medium">Ritika Mitchell</h2>
        </div>

        <h5 className="font-semibold text-lg">2.2 KM</h5>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex gap-5 items-center p-2 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-center p-2 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-center p-2 border-b-2">
            <i className="text-lg ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">Rs. 193.20</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
            </div>
          </div>

          <div className="mt-6">
            <form onSubmit={(e) => submitHandler(e)}>
              <input
                ref={otp}
                type="text"
                placeholder="Enter OTP"
                className="font-mono bg-[#eee] px-6 py-3 rounded-lg text-lg w-full"
              />

              <Link
                to="/captain-riding"
                className="w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg"
              >
                Confirm
              </Link>

              <button
                onClick={() => {
                  props.setConfirmRidePopupPanel(false);
                  props.setRidePopupPanel(false);
                }}
                className="w-full mt-2 bg-red-600 text-white font-semibold p-3 rounded-lg"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
