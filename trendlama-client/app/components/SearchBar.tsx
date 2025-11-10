import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap--2 rounded-md shadow-md px-2 py-1 ring-1 ring-gray-200">
      <Search />
      <input
        placeholder="Search..."
        className="text-sm outline-0"
        id="search"
      />
    </div>
  );
};

export default SearchBar;
