import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
  type?: "youtube" | "tiktok" | "local";
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoSrc,
  title = "Video",
  type = "local",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    );
    return videoId
      ? `https://www.youtube.com/embed/${videoId[1]}?autoplay=1&modestbranding=1&rel=0`
      : url;
  };

  // Function to get TikTok embed URL
  const getTikTokEmbedUrl = (url: string) => {
    const videoId = url.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);
    return videoId ? `https://www.tiktok.com/embed/${videoId[1]}` : url;
  };

  useEffect(() => {
    if (isOpen && videoRef.current && type === "local") {
      videoRef.current.play().catch(console.error);
    }
  }, [isOpen, type]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-sm mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <X className="h-8 w-8" />
        </button>

        {/* Video container - portrait orientation */}
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] max-h-[90vh]">
          {type === "youtube" ? (
            <iframe
              src={getYouTubeEmbedUrl(videoSrc)}
              title={title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : type === "tiktok" ? (
            <iframe
              src={getTikTokEmbedUrl(videoSrc)}
              title={title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          {/* Video title overlay */}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">{title}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
