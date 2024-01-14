import React from "react";
import amazon_logo from "../assets/svg/amazon.svg";

const Footer = () => {
  return (
    <>
      <footer className={`h-[768px] grid grid-flow-row w-screen`}>
        <div
          className={`h-[49px] bg-[#37475A] hover:bg-[#485769] transition-all flex items-center justify-center text-white text-[13px] leading-[19px] w-full`}
        >
          <a href={`#header`}>Back to top</a>
        </div>
        <div className={`h-[486px] bg-[#232f3e] w-full text-white`}>
          <div
            className={`max-w-[1000px] mx-auto py-[44px] px-4 grid grid-flow-col gap-[10%]`}
          >
            <div className={`col-span-1 flex flex-col gap-3`}>
              <h1 className={`text-base leading-[17px] font-bold`}>
                Get to Know Us
              </h1>
              <div
                className={`grid grid-flow-row text-[14px] leading-[17px] gap-2.5 text-gray-300`}
              >
                <span>About Us</span>
                <span>Careers</span>
                <span>Press Releases</span>
                <span>Amazon Science</span>
              </div>
            </div>
            <div className={`col-span-1 flex flex-col gap-3`}>
              <h1 className={`text-base leading-[17px] font-bold`}>
                Connect with Us
              </h1>
              <div
                className={`grid grid-flow-row text-[14px] leading-[17px] gap-2.5 text-gray-300`}
              >
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Instagram</span>
              </div>
            </div>
            <div className={`col-span-1 flex flex-col gap-3`}>
              <h1 className={`text-base leading-[17px] font-bold`}>
                Make Money with Us
              </h1>
              <div
                className={`grid grid-flow-row text-[14px] leading-[17px] gap-2.5 text-gray-300`}
              >
                <span>Sell on Amazon</span>
                <span>Sell under Amazon Accelerator</span>
                <span>Protect and Build Your Brand</span>
                <span>Amazon Global Selling</span>
                <span>Become an Affiliate</span>
                <span>Fulfilment by Amazon</span>
                <span>Advertise Your Products</span>
                <span>Amazon Pay on Merchants</span>
              </div>
            </div>
            <div className={`col-span-1 flex flex-col gap-3`}>
              <h1 className={`text-base leading-[17px] font-bold`}>
                Let Us Help You
              </h1>
              <div
                className={`grid grid-flow-row text-[14px] leading-[17px] gap-2.5 text-gray-300`}
              >
                <span>COVID-19 and Amazon</span>
                <span>Your Account</span>
                <span>Returns Centre</span>
                <span>100% Purchase Protection</span>
                <span>Amazon App Download</span>
                <span>Help</span>
              </div>
            </div>
          </div>
          <div className={` w-screen border-t border-gray-600`}>
            <div
              className={`max-w-[1000px] mx-auto p-8 flex flex-col items-center justify-center gap-6`}
            >
              <div className={`flex gap-8 items-center justify-center`}>
                <img src={amazon_logo} alt="" className={`w-16`} />
                <span className={`border-gray-400 px-5  py-1 border`}>
                  English
                </span>
              </div>
              <div className={`flex gap-4 gap-y-2 max-w-[900px] flex-wrap items-center justify-center text-xs leading-[18px] text-gray-300`}>
                <span>Australia</span>
                <span>Brazil</span>
                <span>Canada</span>
                <span>China</span>
                <span>France</span>
                <span>Germany</span>
                <span>Italy</span>
                <span>Japan</span>
                <span>Mexico</span>
                <span>Netherlands</span>
                <span>Poland</span>
                <span>Singapore</span>
                <span>Spain</span>
                <span>Turkey</span>
                <span>United Arab Emirates</span>
                <span>United Kingdom</span>
                <span>United States</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`h-[233px] bg-[#131a22] `}>
					<div className={`  grid grid-cols-4 mx-auto max-w-[1000px] px-4 py-14 pb-0 gap-[40px]`}>
						<div className={`*:hover:underline *:cursor-pointer flex gap-1 flex-col max-w-[70%]`}><p className={`text-[14px] text-white leading-[14px] `}>AbeBooks</p><p className={`text-gray-300 text-[12px] leading-[13px]`}>Books, art
							& collectibles</p></div>
						<div className={`*:hover:underline *:cursor-pointer flex gap-1 flex-col max-w-[70%]`}><p className={`text-[14px] text-white leading-[14px] `}>Shopbop</p><p className={`text-gray-300 text-[12px] leading-[13px]`}>Designer
							Fashion Brands</p></div>
						<div className={`*:hover:underline *:cursor-pointer flex gap-1 flex-col max-w-[70%]`}><p className={`text-[14px] text-white leading-[14px] `}>Amazon Web Services</p><p className={`text-gray-300 text-[12px] leading-[13px]`}>Scalable Cloud
							Computing Services</p></div>
						<div className={`*:hover:underline *:cursor-pointer flex gap-1 flex-col max-w-[70%]`}><p className={`text-[14px] text-white leading-[14px] `}>Audible</p><p className={`text-gray-300 text-[12px] leading-[13px]`}>Download
							Audio Books</p></div>
						<div className={`*:hover:underline *:cursor-pointer flex gap-1 flex-col max-w-[70%]`}><p className={`text-[14px] text-white leading-[14px] `}>IMDb</p><p className={`text-gray-300 text-[12px] leading-[13px]`}>Movies, TV
							& Celebrities</p></div>
						<div className={`*:hover:underline *:cursor-pointer flex gap-1 flex-col max-w-[70%]`}><p className={`text-[14px] text-white leading-[14px] `}>Amazon Business</p><p className={`text-gray-300 text-[12px] leading-[13px]`}>Everything For
							Your Business</p></div>
						<div className={`*:hover:underline *:cursor-pointer flex gap-1 flex-col max-w-[70%]`}><p className={`text-[14px] text-white leading-[14px] `}>Prime Now</p><p className={`text-gray-300 text-[12px] leading-[13px]`}>2-Hour Delivery
							on Everyday Items</p></div>
						<div className={`*:hover:underline *:cursor-pointer flex gap-1 flex-col max-w-[70%]`}><p className={`text-[14px] text-white leading-[14px] `}>Amazon Prime Music</p><p className={`text-gray-300 text-[12px] leading-[13px]`}>100 million songs, ad-free
							Over 15 million podcast episodes</p></div>
					</div>
					<div></div>
				</div>
      </footer>
    </>
  );
};
export default Footer;
