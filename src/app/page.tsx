"use client";

import useYoutubeSearch from "@/hooks/useYoutubeSearch";
import Hello from "@/components/hello/Hello";
import SearchBar from "@/components/search-bar/SearchBar";

export default function Home() {
  const [videos] = useYoutubeSearch({ query: "react js custom hooks" });

  console.log("videos:", videos);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hello />
        <SearchBar />
      </main>
    </div>
  );
}
