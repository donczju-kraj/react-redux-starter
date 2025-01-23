import { YtVideo } from "./VideoListItem";
export default function VideoDetail({ video }: { video: YtVideo }) {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex flex-col space-y-4">
      <div className="aspect-video border border-gray-200 rounded-2xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="space-y-4 border-t border-gray-200 pt-2">
        <div className="font-semibold text-lg">{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}
