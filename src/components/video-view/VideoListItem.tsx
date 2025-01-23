import Image from "next/image";

interface Thumbnails {
  default: {
    url: string;
  };
  medium: {
    url: string;
  };
}

interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  publishedAt: string;
  title: string;
  thumbnails: Thumbnails;
}

export interface YtVideo {
  eTag: string;
  id: {
    videoId: string;
  };
  snippet: Snippet;
}

interface VideoListItemProps {
  video: YtVideo;
  setSelectedVideo: (video: YtVideo) => void;
}
export default function VideoListItem({
  video,
  setSelectedVideo,
}: VideoListItemProps) {
  return (
    <li
      onClick={() => setSelectedVideo(video)}
      className="px-4 py-3 bg-gray-900 hover:bg-gray-950 border-gray-200 hover:border-gray-100 border-2 rounded-2xl transition-all ease-in-out hover:scale-105"
    >
      <div className="w-[400px] grid grid-cols-3 gap-4">
        <div className="self-center rounded-lg overflow-hidden">
          <Image
            src={video.snippet.thumbnails.medium.url}
            alt="Video thumbnail"
            width={320}
            height={180}
          />
        </div>

        <div className="col-span-2 h-full flex flex-col">
          <p
            title={video.snippet.title}
            className="text-base font-semibold truncate"
          >
            {video.snippet.title}
          </p>
          <p
            title={video.snippet.description}
            className="h-12 text-sm italic overflow-y-auto"
          >
            {video.snippet.description}
          </p>
        </div>
      </div>
    </li>
  );
}
