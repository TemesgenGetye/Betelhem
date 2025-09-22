import React, { useRef, useEffect, useState } from "react";
import { Play } from "lucide-react";

interface VideoThumbnailProps {
  videoSrc: string;
  thumbnailSrc?: string;
  onClick: () => void;
  className?: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  videoSrc,
  thumbnailSrc,
  onClick,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.play().catch(console.error);
    } else {
      video.pause();
    }
  }, [isHovered]);

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg border-2 border-gray-200 hover:border-red-400 transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          poster={thumbnailSrc}
        />

        {/* Overlay with play button */}
        <div
          className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors shadow-lg">
            <Play className="h-8 w-8 text-white" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
