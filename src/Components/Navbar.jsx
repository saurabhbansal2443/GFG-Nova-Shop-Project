import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 gap-4">
        {/* Logo */}
        <p className="text-2xl font-bold tracking-wide text-gray-900">
          Nova<span className="text-blue-600">Edge</span>
        </p>

        {/* SearchBar */}
        <div className="flex-1 max-w-xl">
          <SearchBar />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-[1px] rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
