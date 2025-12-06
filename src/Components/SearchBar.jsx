import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  let timerId = useRef(null);

  async function getApiData() {
    if (searchQuery.trim().length == 0) {
      return;
    }
    console.log("Api called", searchQuery);
    const apiData = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    const jsonData = await apiData.json();
    setSearchResults(jsonData?.products || []);
  }

  useEffect(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(() => {
      getApiData();
    }, 500);
  }, [searchQuery]);

  return (
    <div className="relative w-full">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search products, brands and more..."
        className="
          w-full pl-4 pr-4 py-2
          rounded-full bg-gray-50
          border border-gray-300
          text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white
          transition
        "
      />

      {/* Suggestions Dropdown */}
      {searchQuery.trim().length !== 0 && searchResults.length > 0 && (
        <div
          className="
            absolute left-0 right-0 mt-2
            bg-white shadow-lg rounded-xl
            border border-gray-200
            max-h-64 overflow-y-auto
            z-50
          "
        >
          {searchResults.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="
                flex items-center gap-3 px-4 py-2
                cursor-pointer hover:bg-gray-100 transition
              "
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-10 h-10 rounded object-cover"
              />
              <p className="text-sm text-gray-700">{product.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
