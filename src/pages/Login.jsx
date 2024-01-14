import React, { useState } from "react";
import AuthFoot from "../Components/ui/auth/AuthFoot.jsx";
import AuthHead from "../Components/ui/auth/AuthHead.jsx";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState("");
  const [checkAuth, setCheckAuth] = useState(false);

  const phone_regEx =
    /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  const email_regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const handleChangeInput = (e,phone_regEx,email_regEx) => {
    setInput(e.target.value);
    if (input.match(phone_regEx) || input.match(email_regEx)) {
      setCheckAuth(true);
      console.log(checkAuth)
    } else {
      setCheckAuth(false);
      console.log(checkAuth)
    }
  };

  const handleCheckInput = (e,phone_regEx,email_regEx) => {
    e.preventDefault();
    if (input.match(phone_regEx) || input.match(email_regEx)) {
      setCheckAuth(true);
      console.log(checkAuth)
    } else {
      alert("Please enter a valid email or phone number.");
      setCheckAuth(false);
      console.log(checkAuth)
    }
  };

  return (
    <div
      className={`w-screen h-screen px-[18px] py-[14px] bg-white flex items-center flex-col text-[13px] leading-[19px] text-[#111]`}
    >
      <AuthHead />
      <div
        className={`w-[350px] mx-auto border rounded-lg	px-[26px] py-5 h-[360px] `}
      >
        <h1 className={`text-[28px] mb-[10px]`}>Sign in</h1>

        <form className={`mt-[22px] w-full`}>
          <div>
            <label
              htmlFor={`email_phone`}
              className={`font-bold text-[13px] leading-[19px] pb-0.5 pl-0.5`}
            >
              Email & Mobile phone number
            </label>
            <input
              type="text"
              className={`py-[3px] px-[7px] border border-[#a6a6a6] w-full h-[31px] leading-normal bg-white rounded-[3px] outline-none focus:bg-[#f7feff] shadow-input-sh focus:shadow-focus-sh transition`}
              onChange={(e)=>{handleChangeInput(e,phone_regEx,email_regEx) }}
              onKeyUp={(e)=>{handleChangeInput(e,phone_regEx,email_regEx) }}
              id={`email_phone`}
              value={input}
            />
          </div>
          <div className={`my-[22px]`}>
            <button
              className={` transition bg-[#FFD814] border border-[#FCD200] rounded-[8px] shadow w-full hover:bg-[#F7CA00]  h-[29px] mb-[18px]`}
              onClick={(e)=>{ handleCheckInput(e,phone_regEx,email_regEx) }}
            >
              <Link
                to={checkAuth ? "/home" : "/"}
                className={`w-full px-[120px] `}
              >
                Continue
              </Link>
            </button>
            <span className={`text-[12px]`}>
              By continuing, you agree to Amazon's{" "}
              <span
                className={`text-[#0066c0] hover:text-[#c45500] hover:underline`}
              >
                Conditions of Use
              </span>{" "}
              and{" "}
              <span
                className={`text-[#0066c0] hover:text-[#c45500] hover:underline`}
              >
                Privacy Notice.
              </span>
            </span>
          </div>
          <p
            className={`text-[#0066c0] hover:text-[#c45500] hover:underline pb-[22px] border-b w-full `}
          >
            Need help?
          </p>
        </form>
        <div className={`pt-4`}>
          <p>Buying for work?</p>
          <p className={`text-[#0066c0] hover:text-[#c45500] hover:underline`}>
            Shop on Amazon Business
          </p>
        </div>
      </div>
      <div
        className={`h-[1px] bg-slate-300 left-0 relative w-[350px] text-center mt-[32px] md:mb-14`}
      >
        <p
          className={`bg-white px-2 absolute -top-2 left-1/2 -translate-x-1/2 w-fit mx-auto text-[#767676]`}
        >
          New to Amazon?
        </p>
        <button
          className={`h-[29px]  w-full mt-6 rounded-[8px] border-[#D5D9D9] border hover:bg-[#F7FAFA]`}
          style={{
            boxShadow: "0 2px 5px 0 rgba(213,217,217,.5)",
          }}
        >
          Create your Amazon account
        </button>
      </div>
      <AuthFoot />
    </div>
  );
};
export default Login;
