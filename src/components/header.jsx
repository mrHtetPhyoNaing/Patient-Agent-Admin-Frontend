import React from "react";
import logo from "../assets/logo.svg";
import AvatarBox from "./avatarBox";

const Header = () => {
  return (
    <div className="bg-indigo-500">
      <div className="container mx-auto p-5 sm:p-8">
        {/* header */}
        <div className="flex align-middle py-5 sm:py-0 relative">
          {/* logo */}
          <div className="flex-grow flex flex-row items-center p-0">
            <img
              className="w-12 sm:w-16 inline mr-2"
              src={logo}
              alt="Leaf logo"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white uppercase tracking-wider">
                Administrator
              </h1>
              <hr className="w-auto hidden sm:inline" />
              <h3 className="text-sm italic text-gray-300">
                Patient Booking System
              </h3>
            </div>
          </div>
          {/* end logo */}

          <AvatarBox />
        </div>
        {/* end header  */}
      </div>
      {/* end container  */}
    </div>
  );
};

export default Header;
