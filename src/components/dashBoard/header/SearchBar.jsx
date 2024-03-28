import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the onSearch callback with the current search term
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="py-2 h-10  px-10  rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <IoSearch className="text-gray-400 " />
      </div>
    </div>
  );
};

export default SearchBar;