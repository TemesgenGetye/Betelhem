import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import beti from "../img/beti.png";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={beti}
              alt="Betelhem Ashenafi - Video Editor"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              About Me
            </h1>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Hey there! I'm Betelhem Ashenafi, a skilled video and graphics
              editor with over 3 years of experience in crafting engaging visual
              content. Based in Addis Ababa, Ethiopia, I've worked with
              prominent organizations like Energy Film Production and Keza
              Afriqa Production, specializing in video editing, graphics
              creation, and social media management. My expertise spans across
              documentary editing, theater set organization, sound editing, and
              subtitle editing for platforms like DSTV. With proficiency in
              tools like Premiere Pro, Photoshop, and DaVinci Resolve, I bring a
              creative touch and organizational skills to every project I
              undertake.
            </p>

            <div className="space-y-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                My Toolkit
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Adobe Premiere Pro",
                  "After Effects",
                  "DaVinci Resolve",
                  "Final Cut Pro",
                  "Photoshop",
                  "Premier pro",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white px-4 py-2 rounded-lg text-gray-700 border border-gray-200 shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Let's Connect
              </h2>
              <div className="space-y-3">
                <a
                  href="mailto:Betelehema49@gmail.com"
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Betelehema49@gmail.com
                </a>
                <a
                  href="tel:+251953946099"
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +251 953 94 60 99
                </a>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/ur_bitsy1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/betelehem-ashenafi-8b3720308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
