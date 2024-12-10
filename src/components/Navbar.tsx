import { Menu, Video, Home, Newspaper, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Video className="h-8 w-8 text-purple-500" />
              <span className="text-white font-bold text-xl">
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
              className="text-gray-400 hover:text-white p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
      className="text-gray-300 hover:text-white flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
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
      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
    >
      {text}
    </Link>
  );
}
