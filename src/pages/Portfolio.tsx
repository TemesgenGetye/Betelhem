import React, { useState, useEffect } from "react";
import VideoCardPor from "../components/VideoCardPor";
import { getYouTubeVideoId } from "../utils/youtube";
import ashara from "../videos/ashara.mp4";
import ashara2 from "../videos/ashara2.mp4";
import ashara3 from "../videos/ashara3.mp4";
import asharaimg from "../videos/ashara.jpeg";
import asharaimg2 from "../img/asharaImg2.jpg";
import asharaimg3 from "../img/ashara3.jpeg";

const portfolioItems = [
  {
    title: "Nelson Mandela // ኔልሰን ማንዴላ //ሙሉ የህይወት ታሪክ",
    description: "a documentary about Nelson Mandela",
    videoUrl: "https://youtu.be/5SIIv26kmPY?si=6O3azW8Q-4ZzO9z4",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/5SIIv26kmPY?si=6O3azW8Q-4ZzO9z4"
    )}/0.jpg`,
    type: "youtube" as const,
    category: "Documentary",
  },
  {
    title: "Shaka Zulu // ሻካ ዙሉ 1781-1828 //ሻካ ካሴንዛንጋክሆና ",
    description: "አፍሪካ ዶክመንተሪ",
    videoUrl: "https://youtu.be/KbjauDphZzs?si=4KcgH6Kxa6pcek5T",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/KbjauDphZzs?si=4KcgH6Kxa6pcek5T"
    )}/0.jpg`,
    type: "youtube" as const,
    category: "Documentary",
  },
  {
    title: "አሻራ ድራማ",
    description: "አዲሱ የ #አቦልቲቪ ልብ አንጠልጣይ ቴሌኖቬላ",
    videoUrl: ashara,
    thumbnailUrl: asharaimg2,
    type: "local" as const,
    category: "Amharic Movie Series",
  },

  {
    title: "አሻራ ድራማ",
    description: "አዲሱ የ #አቦልቲቪ ልብ አንጠልጣይ ቴሌኖቬላ",
    videoUrl: ashara2,
    thumbnailUrl: asharaimg,
    type: "local" as const,
    category: "Amharic Movie Series",
  },

  {
    title: "አሻራ ድራማ",
    description: "አዲሱ የ #አቦልቲቪ ልብ አንጠልጣይ ቴሌኖቬላ",
    videoUrl: ashara3,
    thumbnailUrl: asharaimg3,
    type: "local" as const,
    category: "Amharic Movie Series",
  },

  {
    title: "ተነስቶ መቀጠል 🏆🏆🏆 FGIC family",
    description: "short video of FGIC",
    videoUrl: "https://youtube.com/shorts/0cBtRmDh-Ag?si=BJDkXVV1ETFI2mMF",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtube.com/shorts/0cBtRmDh-Ag?si=BJDkXVV1ETFI2mMF"
    )}/0.jpg`,
    type: "youtube" as const,
    category: "Youtube Video",
  },

  {
    title: "FGIC family",
    description: "short video of FGIC",
    videoUrl: "https://youtube.com/shorts/xFLbHbHO7mo?si=l8aK2EoYkjK8jAAZ",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtube.com/shorts/xFLbHbHO7mo?si=l8aK2EoYkjK8jAAZ"
    )}/0.jpg`,
    type: "youtube" as const,
    category: "Youtube Video",
  },

  {
    title: "ፍልስፍና እና እብደት ምን አገናኛቸው ",
    description: "PHILOSOPHY WITH SELAMU",
    videoUrl: "https://youtu.be/6gz24z3ZNxY?si=2CFRzAR0nbtiuPqe",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/6gz24z3ZNxY?si=2CFRzAR0nbtiuPqe"
    )}/0.jpg`,
    type: "youtube" as const,
    category: "Youtube Video",
  },

  {
    title: "INTRODCUTION TO PHILOSOPHY",
    description: "PHILOSOPHY WITH SELAMU",
    videoUrl: "https://youtu.be/Z9cXXi2n8N0?si=sSXof3CnxBWeSgN6",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/Z9cXXi2n8N0?si=sSXof3CnxBWeSgN6"
    )}/0.jpg`,
    type: "youtube" as const,
    category: "Youtube Video",
  },

  {
    title: "Shaka Zulu // ሻካ ዙሉ 1781-1828 //ሻካ ካሴንዛንጋክሆና ",
    description: "አፍሪካ ዶክመንተሪ",
    videoUrl: "https://youtu.be/KbjauDphZzs?si=4KcgH6Kxa6pcek5T",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/KbjauDphZzs?si=4KcgH6Kxa6pcek5T"
    )}/0.jpg`,
    type: "youtube" as const,
    category: "Documentary",
  },
];

interface VideoData {
  url: string;
  type: "youtube" | "local";
}

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(portfolioItems.map((_, index) => index));
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

  const openModal = (videoUrl: string, videoType: "youtube" | "local") => {
    setSelectedVideo({ url: videoUrl, type: videoType });
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">My Work</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my favorite projects across different genres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className={`${
                animatedItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } transition-all duration-500 ease-in-out`}
            >
              <VideoCardPor {...item} onPlay={openModal} />
            </div>
          ))}
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
    </div>
  );
}
