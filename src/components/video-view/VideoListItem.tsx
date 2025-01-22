import Image from "next/image";

interface Thumbnails {
  default: {
    url: string;
  };
  medium: {
    url: string;
  };
}

export interface YtVideo {
  eTag: string;
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    title: string;
    thumbnails: Thumbnails;
  };
}

interface VideoListItemProps {
  video: YtVideo;
}
export default function VideoListItem({ video }: VideoListItemProps) {
  return (
    <li className="p-4 border-slate-200 border-2 rounded-lg">
      <div className="w-[600px] flex gap-4">
        <div>
          <Image
            src={video.snippet.thumbnails.medium.url}
            alt="Video thumbnail"
            width={320}
            height={180}
          />
        </div>

        <div>
          <p className="text-xl font-semibold">{video.snippet.title}</p>
          <p className="italic">{video.snippet.description}</p>
        </div>
      </div>
    </li>
  );
}
