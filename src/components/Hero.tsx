import { ArrowRight, Mail, Phone, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import beti from "../img/beti1.png";
import VideoThumbnail from "./VideoThumbnail";
import VideoModal from "./VideoModal";
import vid1 from "../videos/vid1.mp4";
import elbv from "../videos/elbv.mp4";
import vid3 from "../videos/vid3.mp4";
import ashara from "../videos/ashara.mp4";

export default function Hero() {
  const [selectedVideo, setSelectedVideo] = useState<{
    src: string;
    title: string;
    type: "youtube" | "tiktok" | "local";
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videos = [
    {
      src: vid1,
      title: "Visit Oromia land of wonders",
      type: "local" as const,
    },
    {
      src: elbv,
      title: "Belmont Bistro food and drinks",
      type: "local" as const,
    },
    {
      src: vid3,
      title: "Land of wonders of Oromia",
      type: "local" as const,
    },
    {
      src: ashara,
      title: "Ashara movie series",
      type: "local" as const,
    },
  ];

  const handleVideoClick = (video: {
    src: string;
    title: string;
    type: "youtube" | "tiktok" | "local";
  }) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="relative min-h-screen bg-white flex items-center">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[20rem] text-gray-100 font-bold opacity-20 select-none">
          &
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ">
          {/* Left side - Text content - Hidden on mobile */}
          <div className="flex-1 text-center lg:text-left max-w-2xl hidden lg:block ">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Call For Creativity
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-900 via-pink-900 to-purple-900 bg-clip-text text-transparent">
                Hi, I'm Betelhem Ashenafi
              </span>
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Video Editor & Content Creator
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 hidden lg:block">
                I transform complex stories into elegant visual narratives using
                video editing, graphics, narration, and subtitles. Working
                globally to deliver compelling content that resonates with
                audiences and drives meaningful engagement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium shadow-lg"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right side - Video grid */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            {/* Mobile: Text + 2 videos + button */}
            <div className="flex flex-col items-center gap-6 w-full max-w-sm lg:hidden">
              {/* Mobile text content */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Call For Creativity
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-orange-900 via-pink-900 to-purple-900 bg-clip-text text-transparent">
                    Hi, I'm Betelhem Ashenafi
                  </span>
                </h1>
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Video Editor & Storyteller
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 w-full">
                <VideoThumbnail
                  videoSrc={videos[0].src}
                  onClick={() => handleVideoClick(videos[0])}
                  className="w-full h-48 aspect-video"
                />
                <VideoThumbnail
                  videoSrc={videos[1].src}
                  onClick={() => handleVideoClick(videos[1])}
                  className="w-full h-48 aspect-video"
                />
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium shadow-lg w-full justify-center"
              >
                <span>View All Works</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              {/* Description text for mobile */}
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                I transform complex stories into elegant visual narratives using
                video editing, graphics, narration, and subtitles. Working
                globally to deliver compelling content that resonates with
                audiences and drives meaningful engagement.
              </p>
            </div>

            {/* Desktop: 2x2 grid */}
            <div className="hidden lg:grid grid-cols-2 gap-5 w-full max-w-2xl">
              {/* Top right - horizontal video */}
              <VideoThumbnail
                videoSrc={videos[0].src}
                onClick={() => handleVideoClick(videos[0])}
                className="w-96 h-64 aspect-video col-start-2"
              />

              {/* Middle left - rectangular video */}
              <VideoThumbnail
                videoSrc={videos[1].src}
                onClick={() => handleVideoClick(videos[1])}
                className="w-72 h-64 aspect-video row-start-2"
              />

              {/* Middle right - vertical video */}
              <VideoThumbnail
                videoSrc={videos[2].src}
                onClick={() => handleVideoClick(videos[2])}
                className="w-96 h-64 aspect-[3/4] row-start-2 col-start-2"
              />

              {/* Bottom right - horizontal video */}
              <VideoThumbnail
                videoSrc={videos[3].src}
                onClick={() => handleVideoClick(videos[3])}
                className="w-96 h-64 aspect-video row-start-3 col-start-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Left side scroll indicator */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-px h-24 bg-gray-300"></div>
          <span className="text-gray-500 text-sm transform -rotate-90 whitespace-nowrap">
            Scroll
          </span>
        </div>
      </div>

      {/* Right side contact */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center space-y-8">
          <span className="text-gray-500 text-sm transform rotate-90 whitespace-nowrap">
            Contact
          </span>
          <div className="flex flex-col space-y-4">
            <a
              href="mailto:Betelehema49@gmail.com"
              className="hover:text-gray-900 transition-colors group"
            >
              <Mail className="h-5 w-5 text-gray-600 group-hover:text-gray-900" />
            </a>
            <a
              href="tel:+251953946099"
              className="hover:text-gray-900 transition-colors group"
            >
              <Phone className="h-5 w-5 text-gray-600 group-hover:text-gray-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/betelehem-ashenafi-8b3720308"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors group"
            >
              <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-gray-900" />
            </a>
            <a
              href="https://t.me/ur_bitsy1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors group"
            >
              <MessageCircle className="h-5 w-5 text-gray-600 group-hover:text-gray-900" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom right profile element */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
            <img
              src={beti}
              alt="Betelhem Ashenafi"
              className="w-full h-full object-cover
               rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={selectedVideo?.src || ""}
        title={selectedVideo?.title || ""}
        type={selectedVideo?.type || "local"}
      />
    </div>
  );
}
