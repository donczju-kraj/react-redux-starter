"use client";

import { useEffect, useState } from "react";

import useYoutubeSearch from "@/hooks/useYoutubeSearch";
import SearchBar from "@/components/search-bar/SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { YtVideo } from "./VideoListItem";

export default function VideosView() {
  const [query, setQuery] = useState("surfboards");
  const [selectedVideo, setSelectedVideo] = useState<YtVideo | undefined>(
    undefined
  );
  const [videos] = useYoutubeSearch({ query: query });

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="border border-white px-4 py-3 rounded-2xl flex flex-col space-y-10">
      <SearchBar query={query} setQuery={setQuery} />
      <div className="flex space-x-10">
        {selectedVideo && <VideoDetail video={selectedVideo} />}
        <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
      </div>
    </div>
  );
}
