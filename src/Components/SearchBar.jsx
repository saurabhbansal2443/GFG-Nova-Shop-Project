import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search products, brands and more..."
        className="
            w-full
            pl-10 pr-4 py-2
            rounded-full
            border border-gray-300
            bg-gray-50
            text-sm
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:bg-white
            transition
        "
      />
    </div>
  );
};

export default SearchBar;
