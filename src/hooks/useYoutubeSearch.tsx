"use client";

import { useState, useEffect } from "react";

import youtube from "@/apis/youtube";

export default function useYoutubeSearch({ query = "" }: { query?: string }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(query);
  }, [query]);

  const search = async (query: string) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: query,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error searching YouTube:", error);
    }
  };

  return [videos];
}
