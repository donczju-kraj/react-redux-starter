import Spinner from "../icons/Spinner";
import VideoListItem, { YtVideo } from "./VideoListItem";

interface VideoListProps {
  videos: YtVideo[];
}

export default function VideoList({ videos }: VideoListProps) {
  console.log("Videos:", videos);

  if (videos.length === 0) return <Spinner />;

  return (
    <ul className="space-y-4">
      {videos.map((video: YtVideo) => (
        <VideoListItem key={video.id.videoId} video={video} />
      ))}
    </ul>
  );
}
