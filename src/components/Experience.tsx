import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { getYouTubeVideoId } from "../utils/youtube";
import ashara from "../videos/ashara.mp4";
import asharaimg from "../videos/ashara.jpeg";
import { Link } from "react-router-dom";

interface Experience {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  type: "youtube" | "local";
}

const experiences: Experience[] = [
  {
    title: "Vist Oromia",
    description:
      "visit Oromia waterfall and tour the beautiful nature of Oromia",
    videoUrl: "https://youtu.be/_BpPpndsvtM?si=uiiiKWj1-k2HmYIn",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/_BpPpndsvtM?si=uiiiKWj1-k2HmYIn"
    )}/0.jpg`,
    type: "youtube" as const,
  },
  {
    title: "Documentary: 'Urban Explorers'",
    description: "A journey through hidden city landscapes",
    videoUrl: "https://youtu.be/5SIIv26kmPY?si=6O3azW8Q-4ZzO9z4",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/5SIIv26kmPY?si=6O3azW8Q-4ZzO9z4"
    )}/0.jpg`,
    type: "youtube",
  },
  {
    title: "Vist Oromia",
    description: "wenchi lake and tour the beautiful nature of Oromia",
    videoUrl: "https://youtu.be/h6mh8BhPUW4?si=3nbFlOC0eH6ebSHb",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/h6mh8BhPUW4?si=3nbFlOC0eH6ebSHb"
    )}/0.jpg`,
    type: "youtube" as const,
  },
  {
    title: "Ashara",
    description: "A local video file showcasing our work",
    videoUrl: ashara,
    thumbnailUrl: asharaimg,
    type: "local",
  },
];

interface VideoData {
  url: string;
  type: "youtube" | "local";
}

export default function Experience() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(experiences.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (selectedVideo) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedVideo]);

  const openModal = (videoUrl: string, type: "youtube" | "local") => {
    setSelectedVideo({ url: videoUrl, type });
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-16">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transform transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-102 ${
                animatedItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative aspect-video group">
                <img
                  src={exp.thumbnailUrl}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white rounded-full p-4 transition-all transform hover:scale-110 shadow-lg"
                    onClick={() => openModal(exp.videoUrl, exp.type)}
                  >
                    <Play className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
          >
            View All Projects
          </Link>
        </div>
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 z-50 bg-gray-100 hover:bg-red-50 backdrop-blur-sm rounded-full p-2 transition-all duration-200 shadow-lg"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="aspect-w-16 aspect-h-9">
              {selectedVideo.type === "youtube" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                    selectedVideo.url
                  )}?autoplay=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <video
                  src={selectedVideo.url}
                  controls
                  autoPlay
                  className="w-full h-full"
                ></video>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
