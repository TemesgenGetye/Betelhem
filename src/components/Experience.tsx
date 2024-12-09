import React, { useState, useEffect } from "react";
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
    title: "Documentary: 'Urban Explorers'",
    description: "A journey through hidden city landscapes",
    videoUrl: "https://youtu.be/5SIIv26kmPY?si=6O3azW8Q-4ZzO9z4",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/5SIIv26kmPY?si=6O3azW8Q-4ZzO9z4"
    )}/0.jpg`,
    type: "youtube",
  },
  {
    title: "Music Video: 'Neon Dreams'",
    description: "Vibrant visuals for an electronic music artist",
    videoUrl: "https://youtu.be/KbjauDphZzs?si=4KcgH6Kxa6pcek5T",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/KbjauDphZzs?si=4KcgH6Kxa6pcek5T"
    )}/0.jpg`,
    type: "youtube",
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
    <section className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-12 animate-fade-in">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 ${
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
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 transition-colors transform hover:scale-110"
                    onClick={() => openModal(exp.videoUrl, exp.type)}
                  >
                    <Play className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute top-4 right-4 text-red-400 hover:text-red-600 z-50"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
