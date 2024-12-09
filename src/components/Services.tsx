import { motion } from "framer-motion";
import { Book, Camera, Mic, Subtitles, Video } from "lucide-react";

const services = [
  {
    title: "Social Media Management",
    description:
      "Strategic planning and management to grow and engage your audience",
    icon: Camera,
  },
  {
    title: "Video and Graphics Editing",
    description:
      "Professional video editing and custom graphics to create engaging content",
    icon: Video,
  },
  {
    title: "Voice and Narration Editing",
    description: "Refined audio editing for voiceovers and narration projects",
    icon: Mic,
  },
  {
    title: "Book Typing and Formatting",
    description:
      "Accurate transcription and formatting for manuscripts and documents",
    icon: Book,
  },
  {
    title: "Subtitle Editing for DSTV",
    description:
      "Precise subtitle creation and synchronization for professional broadcasting",
    icon: Subtitles,
  },
];

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            My Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive video editing solutions tailored to your vision
          </p>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gray-800 p-6 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
              <div className="relative z-10">
                <span className="rounded-lg inline-flex p-3 bg-purple-500 text-white ring-4 ring-purple-900 group-hover:bg-white group-hover:text-purple-500 transition-all duration-300 ease-in-out">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 ease-in-out">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-400 group-hover:text-white transition-colors duration-300 ease-in-out">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-purple-400 group-hover:text-white font-medium transition-colors duration-300 ease-in-out"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
