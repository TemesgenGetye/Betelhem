import { useState, useEffect } from "react";
import VideoCardPor from "../components/VideoCardPor";
import VideoModal from "../components/VideoModal";
import { getYouTubeVideoId } from "../utils/youtube";
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
import vid1 from "../videos/vid1.mp4";
import vid2 from "../videos/vid2.mp4";
import vid3 from "../videos/vid3.mp4";
import vid1p from "../img/vid1.png";
import vid2p from "../img/vid2.png";
import vid3p from "../img/vid3.png";

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
    description: "beautiful nature of Oromia",
    videoUrl: vid1,
    thumbnailUrl: vid1p,
    type: "local" as const,
    category: "Tourism",
  },
  {
    title: "Vist Oromia",
    description: "beautiful nature of Oromia",
    videoUrl: vid2,
    thumbnailUrl: vid2p,
    type: "local" as const,
    category: "Tourism",
  },
  {
    title: "Vist Oromia",
    description: "beautiful nature of Oromia",
    videoUrl: vid3,
    thumbnailUrl: vid3p,
    type: "local" as const,
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
    title: "The PS Market",
    description: "A place to buy and sell playstation games",
    videoUrl:
      "https://www.tiktok.com/@the_ps_market/video/7529183889944792326?is_from_webapp=1&sender_device=pc&web_id=743351039059797760",
    thumbnailUrl: elb2,
    type: "tiktok" as const,
    category: "TikTok Video",
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
  src: string;
  title: string;
  type: "youtube" | "local" | "tiktok";
}

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(portfolioItems.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (
    videoUrl: string,
    videoType: "youtube" | "local" | "tiktok"
  ) => {
    // Find the portfolio item to get the title
    const portfolioItem = portfolioItems.find(
      (item) => item && item.videoUrl === videoUrl
    );
    if (portfolioItem) {
      setSelectedVideo({
        src: videoUrl,
        title: portfolioItem.title,
        type: videoType,
      });
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          {portfolioItems.map((item, index) => {
            if (!item) return null;
            return (
              <div
                key={item.title}
                className={`${
                  animatedItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } transition-all duration-500 ease-in-out`}
              >
                <VideoCardPor
                  title={item.title}
                  description={item.description}
                  thumbnailUrl={item.thumbnailUrl}
                  videoUrl={item.videoUrl}
                  category={item.category}
                  type={item.type}
                  onPlay={openModal}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc={selectedVideo?.src || ""}
        title={selectedVideo?.title || ""}
        type={selectedVideo?.type || "local"}
      />
    </div>
  );
}
