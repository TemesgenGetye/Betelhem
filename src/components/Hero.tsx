import { ArrowRight, Mail, Phone, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import beti from "../img/beti1.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center">
      {/* Subtle background blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 via-white/50 to-gray-100/30 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-20">
            <span className="block bg-gradient-to-r from-orange-900 via-pink-900 to-purple-900 bg-clip-text text-transparent">
              Hi, I'm Betelhem Ashenafi
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors text-lg"
            >
              Watch Reel →
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Left bottom description */}
      <div className="absolute bottom-8 left-8 max-w-md">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Video Editor & Storyteller
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          I transform complex stories into elegant visual narratives using video
          editing, graphics, narration, and subtitles. Working globally to
          deliver compelling content.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
        >
          Know more →
        </Link>
      </div>

      {/* Side elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-px h-24 bg-gray-300"></div>
          <span className="text-gray-500 text-sm transform -rotate-90 whitespace-nowrap">
            Scroll
          </span>
        </div>
      </div>

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
    </div>
  );
}
