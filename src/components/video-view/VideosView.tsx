"use client";

import { useEffect, useState } from "react";
import _ from "lodash";

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

  const videoSearch = _.debounce((query: string) => {
    setQuery(query);
  }, 300);

  return (
    <div className="border border-white px-4 py-3 rounded-2xl flex flex-col space-y-8 bg-gray-950">
      <div className="mt-3 flex flex-col space-y-2">
        <p className="font-bold text-xl">Search videos by:</p>
        <SearchBar setQuery={videoSearch} />
      </div>
      <hr />
      <div className="flex space-x-10">
        {selectedVideo && <VideoDetail video={selectedVideo} />}
        <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
      </div>
    </div>
  );
}
