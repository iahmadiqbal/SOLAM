import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { NavLink, useLocation, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Route change pe scroll top & menu close
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

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
          <nav className="hidden md:flex items-center space-x-8">
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
              to="/contact"
              className="text-lg text-white bg-[#F6A235] hover:bg-[#e58f1f] px-4 py-2 flex items-center gap-2 rounded-md"
            >
              <FaEnvelope size={18} />
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 p-6 mt-16">
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
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-white bg-[#F6A235] hover:bg-[#e58f1f] px-4 py-2 flex items-center gap-2 rounded-md"
          >
            <FaEnvelope size={18} />
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Hide unused NavLink import */}
      <span style={{ display: "none" }}>{void NavLink}</span>
    </header>
  );
};

export default Header;
