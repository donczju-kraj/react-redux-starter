"use client";

import { useState } from "react";

import useYoutubeSearch from "@/hooks/useYoutubeSearch";
import SearchBar from "@/components/search-bar/SearchBar";

export default function VideosView() {
  const [query, setQuery] = useState("surfboards");

  const [videos] = useYoutubeSearch({ query: query });

  console.log("videos:", videos);
  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
    </>
  );
}
