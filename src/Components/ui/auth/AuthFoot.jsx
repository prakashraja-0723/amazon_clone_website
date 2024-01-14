import React from "react";

const AuthFoot = () => {
  return (
    <>
      <footer
        className={`w-screen items-start flex-col login_footer`}
        style={{ padding: "14px 18px", marginTop: "2.6rem" }}
      >
        <ul className={`flex items-center justify-center`} style={{gap:'2rem'}}>
          <li>
            <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940" className={`text-[#0066c0] hover:text-[#c45500] hover:underline`}>Conditions of Use</a>
          </li>
          <li>
            <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380" className={`text-[#0066c0] hover:text-[#c45500] hover:underline`}>Privacy Notice</a>
          </li>
          <li>
            <a href="https://www.amazon.in/help" className={`text-[#0066c0] hover:text-[#c45500] hover:underline`}>Help</a>
          </li>
        </ul>
				<p className={`mt-6 text-center`}>&copy; 2024, Aazoon.in, Inc.</p>
      </footer>
    </>
  );
};
export default AuthFoot;
