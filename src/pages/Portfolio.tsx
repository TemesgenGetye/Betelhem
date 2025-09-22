import { useState, useEffect } from "react";
import VideoCardPor from "../components/VideoCardPor";
import { getYouTubeVideoId } from "../utils/youtube";
import { getTikTokEmbedUrl } from "../utils/tiktok";
import ashara from "../videos/ashara.mp4";
import ashara2 from "../videos/ashara2.mp4";
import ashara3 from "../videos/ashara3.mp4";
import asharaimg from "../videos/ashara.jpeg";
import asharaimg2 from "../img/asharaImg2.jpg";
import asharaimg3 from "../img/ashara3.jpeg";
import elb1 from "../img/elb1.png";
import elb2 from "../img/elb2.png";
import elb3 from "../img/elb3.png";
import oro from "../img/oro.png";
import oro2 from "../img/oro2.png";
import elb4 from "../img/elb4.png";
import ersho from "../img/ersho.jpg";

const portfolioItems = [
  {
    title: "Vist Oromia",
    description:
      "visit Oromia waterfall and tour the beautiful nature of Oromia",
    videoUrl: "https://youtu.be/_BpPpndsvtM?si=uiiiKWj1-k2HmYIn",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/_BpPpndsvtM?si=uiiiKWj1-k2HmYIn"
    )}/0.jpg`,
    type: "youtube" as const,
    category: "Tourism",
  },
  {
    title: "Vist Oromia",
    description: "wenchi lake and tour the beautiful nature of Oromia",
    videoUrl: "https://youtu.be/Bk2QWxWWv7w?si=fzksJoMS3UnoOJGv",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/Bk2QWxWWv7w?si=fzksJoMS3UnoOJGv"
    )}/0.jpg`,
    type: "youtube" as const,
    category: "Tourism",
  },
  {
    title: "Vist Oromia",
    description: "wenchi lake and tour the beautiful nature of Oromia",
    videoUrl: "https://youtu.be/h6mh8BhPUW4?si=3nbFlOC0eH6ebSHb",
    thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId(
      "https://youtu.be/h6mh8BhPUW4?si=3nbFlOC0eH6ebSHb"
    )}/0.jpg`,
    type: "youtube" as const,
    category: "Tourism",
  },
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
    title: "Visit Oromia",
    description: "visit Oromia and tour the beautiful nature of Oromia",
    videoUrl:
      "https://www.tiktok.com/@visit_oromia/video/7507185184932908293?is_from_webapp=1&sender_device=pc&web_id=7433510390597977607",
    thumbnailUrl: oro,
    type: "tiktok" as const,
    category: "Tourism",
  },
  {
    title: "Visit Oromia",
    description: "visit Oromia and tour the beautiful nature of Oromia",
    videoUrl:
      "https://www.tiktok.com/@visit_oromia/video/7513850026230091014?is_from_webapp=1&sender_device=pc&web_id=7433510390597977607",
    thumbnailUrl: oro2,
    type: "tiktok" as const,
    category: "Tourism",
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
    title: "Ersho Events",
    description: "event planners and event organizers",
    videoUrl: "https://vm.tiktok.com/ZMHtpCY1Emu5B-YBzDe/",
    thumbnailUrl: ersho,
    type: "tiktok" as const,
    category: "TikTok Video",
  },

  {
    title: "The PS Market",
    description: "A place to buy and sell playstation games",
    videoUrl: "https://www.tiktok.com/@the_ps_market/video/7477177001212759302",
    thumbnailUrl: elb1,
    type: "tiktok" as const,
    category: "TikTok Video",
  },

  {
    title: "The PS Market",
    description: "A place to buy and sell playstation games",
    videoUrl:
      "https://www.tiktok.com/@the_ps_market/video/7541148483928083717?is_from_webapp=1&sender_device=pc&web_id=7433510390597977607",
    thumbnailUrl: elb2,
    type: "tiktok" as const,
    category: "TikTok Video",
  },
  {
    title: "The PS Market",
    description: "A place to buy and sell playstation games",
    videoUrl:
      "https://www.tiktok.com/@the_ps_market/video/7544409724809219384?is_from_webapp=1&sender_device=pc&web_id=7433510390597977607",
    thumbnailUrl: elb3,
    type: "tiktok" as const,
    category: "TikTok Video",
  },

  {
    title: "Belmont Bistro",
    description: "A place to eat and drink the best food and drinks",
    videoUrl: "https://www.tiktok.com/@belmontbistro/video/7516943186619616518",
    thumbnailUrl: elb4,
    type: "tiktok" as const,
    category: "TikTok Video",
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
  type: "youtube" | "local" | "tiktok";
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

  const openModal = (
    videoUrl: string,
    videoType: "youtube" | "local" | "tiktok"
  ) => {
    setSelectedVideo({ url: videoUrl, type: videoType });
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            My Work
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A curated selection of my favorite projects across different genres,
            showcasing creativity and storytelling through video.
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
        <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div
            className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200 animate-in zoom-in-95 duration-300 ${
              selectedVideo.type === "tiktok"
                ? "w-full max-w-md mx-auto"
                : "w-full max-w-5xl"
            }`}
          >
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

            {/* TikTok specific styling */}
            {selectedVideo.type === "tiktok" ? (
              <div className="flex flex-col items-center">
                <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 p-1 rounded-t-2xl">
                  <div className="bg-white rounded-t-xl">
                    <div className="aspect-[9/16] max-h-[85vh] min-h-[600px] flex items-center justify-center">
                      <iframe
                        src={getTikTokEmbedUrl(selectedVideo.url)}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full border-0 rounded-t-xl"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-6 py-4 w-full rounded-b-2xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">TikTok Video</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Tap to interact with the video
                  </p>
                </div>
              </div>
            ) : (
              /* YouTube and Local video styling */
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
            )}
          </div>
        </div>
      )}
    </div>
  );
}
