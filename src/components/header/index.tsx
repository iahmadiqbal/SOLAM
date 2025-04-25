import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">
            <img
              src="images/logo.png"
              alt="logo"
              className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-36"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="md:flex items-center space-x-8 hidden">
            <Link to="/" className="text-lg text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              Projects
            </Link>
            <Link
              to="/services"
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              to="/ourteam"
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              to="/quote"
              className="text-lg text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 flex items-center gap-2 rounded-md"
            >
              <FaEnvelope size={18} />
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-[105px] w-64 h-[calc(100%-80px)] bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 p-6">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-gray-700 hover:text-blue-600"
          >
            Projects
          </Link>
          <Link
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-gray-700 hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            to="/ourteam"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-gray-700 hover:text-blue-600"
          >
            Our Team
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            to="/quote"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 flex items-center gap-2 rounded-md"
          >
            <FaEnvelope size={18} /> {/* Keep Envelope icon */}
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
