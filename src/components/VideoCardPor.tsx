import React from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
  type: "youtube" | "local";
  onPlay: (videoUrl: string, type: "youtube" | "local") => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnailUrl,
  videoUrl,
  type,
  onPlay,
  category = "Video",
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative aspect-video">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 transition-colors transform hover:scale-110"
            onClick={() => onPlay(videoUrl, type)}
          >
            <Play className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-sm font-semibold text-purple-500 mb-2">
          {category}{" "}
        </h3>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
