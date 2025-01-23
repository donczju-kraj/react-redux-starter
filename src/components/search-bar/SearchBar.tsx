"use client";

import SearchIcon from "../icons/SearchIcon";

interface SearchBarProps {
  // query: string;
  setQuery: (query: string) => void;
}

// export default function SearchBar({ query, setQuery }: SearchBarProps) {
export default function SearchBar({ setQuery }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <SearchIcon />
      </div>
      <input
        className="block w-full p-2.5 ps-8 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search videos..."
        onChange={(e) => setQuery(e.target.value)}
        required
      />
    </div>
  );
}
