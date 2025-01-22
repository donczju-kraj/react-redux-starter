import { YtVideo } from "./VideoListItem";
export default function VideoDetail({ video }: { video: YtVideo }) {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex flex-col space-y-4">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="space-y-4">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}
