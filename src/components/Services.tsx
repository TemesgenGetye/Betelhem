import { motion } from "framer-motion";
import { Book, Camera, Mic, Subtitles, Video, Newspaper } from "lucide-react";

const services = [
  {
    title: "Content Creation",
    description: "Creating content for social media and other platforms",
    icon: Newspaper,
  },
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
    <section className="bg-gradient-to-br from-white to-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            My Expertise
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Comprehensive video editing solutions tailored to your vision
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group bg-white p-8 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 to-gray-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
              <div className="relative z-10">
                <span className="rounded-2xl inline-flex p-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-300 ease-in-out shadow-lg">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 ease-in-out">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 ease-in-out leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 group-hover:text-gray-900 font-medium transition-colors duration-300 ease-in-out"
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
