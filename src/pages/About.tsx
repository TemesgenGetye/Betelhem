import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import beti from "../img/beti.jpg";

export default function About() {
  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={beti}
              alt="Sarah Anderson - Video Editor"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
            <p className="text-gray-300 mb-6">
              Hey there! I'm Betelhem Ashenafi, a skilled video and graphics
              editor with over 3 years of experience in crafting engaging visual
              content. Based in Addis Ababa, Ethiopia, I’ve worked with
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
              <h2 className="text-2xl font-semibold text-white mb-4">
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
                    className="bg-gray-800 px-4 py-2 rounded-md text-gray-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Let's Connect
              </h2>
              <div className="space-y-3">
                <a
                  href="mailto:sarah@example.com"
                  className="flex items-center text-gray-300 hover:text-purple-400"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Betelehema49@gmail.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-300 hover:text-purple-400"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +251 953 94 60 99
                </a>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/betelehem_ehsa
"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="http://linkedin.com/in/betelehem-ashenafi-8b3720308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400"
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
