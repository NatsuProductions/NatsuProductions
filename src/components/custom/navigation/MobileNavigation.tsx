import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION } from "@/data/Navigation";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <div className="lg:hidden bg-white">
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
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
                ease: "easeInOut",
              }}
              className="fixed top-0 right-0 w-2/3 sm:w-3/4 md:w-2/3 lg:w-1/2 h-full bg-white shadow-lg z-50"
            >
              <div className="flex flex-col h-full ">
                {/* Close Button */}
                <div className="flex justify-evenly p-4 space-x-12">
                  <div className="flex items-center gap-2">
                    <img
                      src={logo}
                      alt="Natsu Productions Logo"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="flex justify-end">
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
                </div>
                {/* Action Button */}
                <div className="px-6 py-4 ">
                  <Button
                    onClick={closeMenu}
                    className="rounded-md py-2 px-4  bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer w-full"
                    aria-label="Get A Quote"
                  >
                    <Link to="/quote-form">Get a Quote</Link>
                  </Button>
                </div>
                {/* Navigation Links */}
                <nav className="flex flex-col space-y-4 px-6 py-4">
                  {NAVIGATION.map((item, index) => (
                    <motion.div
                      key={item.tag}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      {item.href.startsWith("#") ? (
                        <a
                          href={item.href}
                          onClick={handleHashClick}
                          className="text-lg text-gray-600 hover:text-gray-900 transition-colors py-2"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={closeMenu}
                          className="text-lg text-gray-600 hover:text-gray-900 transition-colors py-2"
                        >
                          {item.title}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
