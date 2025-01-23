import Spinner from "../icons/Spinner";
import VideoListItem, { YtVideo } from "./VideoListItem";

interface VideoListProps {
  videos: YtVideo[];
  setSelectedVideo: (video: YtVideo) => void;
}

export default function VideoList({
  videos,
  setSelectedVideo,
}: VideoListProps) {
  if (videos.length === 0) return <Spinner />;

  return (
    <ul className="space-y-2">
      {videos.map((video: YtVideo) => (
        <VideoListItem
          key={video.id.videoId}
          video={video}
          setSelectedVideo={setSelectedVideo}
        />
      ))}
    </ul>
  );
}
