import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CallToAction() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 via-white/50 to-gray-100/30 blur-3xl"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-black mb-6"
            variants={itemVariants}
          >
            Ready to Create Something{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Let's collaborate on your next video project and bring your vision
            to life with professional editing and stunning visuals.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={itemVariants}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-lg font-medium"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-4xl aspect-video"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsVideoPlaying(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
