"use client";

import { useState } from "react";
import SearchIcon from "../icons/SearchIcon";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="relative w-[360px]">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <SearchIcon />
      </div>
      <input
        className="block w-full p-2.5 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search videos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <button
        type="submit"
        className="text-white absolute end-2 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  );
}
