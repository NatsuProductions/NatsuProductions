import { Link } from "react-router-dom";
import { NAVIGATION } from "@/data/Navigation";
import logo from "@/assets/logo.png";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 z-50 bg-white w-full">
      <nav className="w-full h-20 flex items-center justify-between px-4 lg:px-40  ">
        {/* Logo */}
        <Link
          to="/"
          className="hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img
            src={logo}
            alt="Natsu Productions Logo - Navigate to Homepage"
            className="h-8 w-auto"
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-8">
          <div className="flex space-x-6 items-center">
            {NAVIGATION.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.tag}
                  href={item.href}
                  onClick={handleHashClick}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.tag}
                  to={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.title}
                </Link>
              ),
            )}

            {/* Desktop Action Buttons */}
            <button
              className="rounded-md py-2 px-4  bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer"
              aria-label="Get A Quote"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileNavigation />
      </nav>
    </header>
  );
}
