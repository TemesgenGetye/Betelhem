import React from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
  type: "youtube" | "local" | "tiktok";
  onPlay: (videoUrl: string, type: "youtube" | "local" | "tiktok") => void;
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
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
          <button
            className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white rounded-full p-4 transition-all transform hover:scale-110 shadow-lg"
            onClick={() => onPlay(videoUrl, type)}
          >
            <Play className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">{category}</h3>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
