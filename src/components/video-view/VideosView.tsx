"use client";

import { useState } from "react";

import useYoutubeSearch from "@/hooks/useYoutubeSearch";
import SearchBar from "@/components/search-bar/SearchBar";
import VideoList from "./VideoList";

export default function VideosView() {
  const [query, setQuery] = useState("surfboards");
  const [videos] = useYoutubeSearch({ query: query });

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <VideoList videos={videos} />
    </>
  );
}
