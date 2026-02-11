import { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "@/data/navigation";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu}
                  className="p-2 text-gray-600 hover:text-gray-900"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Action Button */}
              <div className="px-6 py-4 ">
                <button
                  onClick={closeMenu}
                  className="w-full rounded-lg px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                  aria-label="Get A Quote"
                >
                  Get a Quote
                </button>
              </div>
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4 px-6 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.tag}
                    to={item.href}
                    onClick={closeMenu}
                    className="text-lg text-gray-600 hover:text-gray-900 transition-colors py-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
