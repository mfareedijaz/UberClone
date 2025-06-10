import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div className="px-5 py-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-4 w-full px-4 py-2 text-base rounded border placeholder:text-sm"
            required
            type="email"
            id="email"
            placeholder="email@example.com"
            ref={emailRef}
          />

          <h3 className="text-base font-medium mb-2">Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-6 w-full px-4 py-2 text-base rounded border placeholder:text-sm"
            required
            type="password"
            id="password"
            placeholder="password"
            ref={passwordRef}
          />

          <button className="bg-[#111] mb-2 text-base text-white font-semibold w-full px-4 py-2 rounded">
            Login
          </button>
        </form>

        <p className="text-center text-sm">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-[#10b461] flex items-center justify-center mb-5 text-base text-white font-semibold w-full px-4 py-2 rounded"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
