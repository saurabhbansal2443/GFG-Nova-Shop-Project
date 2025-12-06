import React from "react";
import SearchBar from "./SearchBar";
import CartIcon from "../Icons/CartIcon";

const Navbar = () => {
  return (
    <div className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 gap-6">
        {/* Logo */}
        <p className="text-2xl font-bold tracking-wide text-gray-900 whitespace-nowrap">
          Nova<span className="text-blue-600">Edge</span>
        </p>

        {/* Search */}
        <div className="flex-1 max-w-xl">
          <SearchBar />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <CartIcon />
            <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-xs px-1.5 py-[1px] rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
