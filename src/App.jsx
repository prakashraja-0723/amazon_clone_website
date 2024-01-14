import React from "react";
import './App.css'
import Login from "./pages/Login.jsx";

const App = () => {
  const box = {
    width: "500px",
    height: "200px",
    backgroundColor: "white",
    boxShadow: "0 0 4px rgba(0,0,0,0.5)",
  };
  return (
    <>
      {/*<div*/}
      {/*  style={box}*/}
      {/*  className={`flex items-center justify-center flex-col font-bold text-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-md`}*/}
      {/*>*/}
      {/*  <img src="/src/assets/Setting.gif" alt="" width={76} />*/}
      {/*  <div className={`hidden`}>*/}
      {/*    <a*/}
      {/*      href="https://iconscout.com/lottie-animations/setting"*/}
      {/*      className=" text-underline font-size-sm"*/}
      {/*      target="_blank"*/}
      {/*    >*/}
      {/*      Setting*/}
      {/*    </a>{" "}*/}
      {/*    by{" "}*/}
      {/*    <a*/}
      {/*      href="https://iconscout.com/contributors/iconscout"*/}
      {/*      className="text-underline font-size-sm"*/}
      {/*    >*/}
      {/*      IconScout Store*/}
      {/*    </a>{" "}*/}
      {/*    on{" "}*/}
      {/*    <a*/}
      {/*      href="https://iconscout.com"*/}
      {/*      className="text-underline font-size-sm"*/}
      {/*    >*/}
      {/*      IconScout*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  ⚒️ The Website is under Maintenance ⚒️*/}
      {/*</div>*/}
      <Login/>
    </>
  );
};
export default App;
