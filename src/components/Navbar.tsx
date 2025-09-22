import { Menu, Video, Home, Newspaper, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import fav from "../img/fav.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 fixed w-full z-50 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={fav}
                alt="Betelhem Ashenafi"
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-gray-900 font-bold text-xl">
                Betelhem Ashenafi
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/" icon={<Home className="h-4 w-4" />} text="Home" />
              <NavLink
                to="/portfolio"
                icon={<Video className="h-4 w-4" />}
                text="Videos"
              />
              <NavLink
                to="/blog"
                icon={<Newspaper className="h-4 w-4" />}
                text="Textbook"
              />
              <NavLink
                to="/about"
                icon={<User className="h-4 w-4" />}
                text="About"
              />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" text="Home" />
            <MobileNavLink to="/portfolio" text="Work" />
            <MobileNavLink to="/blog" text="Blog" />
            <MobileNavLink to="/about" text="About" />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  to,
  icon,
  text,
}: {
  to: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Link
      to={to}
      className="text-gray-600 hover:text-gray-900 flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-colors"
    >
      {text}
    </Link>
  );
}
