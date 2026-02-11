import { Link } from "react-router-dom";
import { NAVIGATION } from "@/data/Navigation";
import logo from "@/assets/logo.png";
import MobileNavigation from "./MobileNavigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white ">
      <nav className="w-full h-20 bg-white flex items-center justify-between px-4 lg:px-40 ">
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
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 ">
          <div className="flex space-x-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.tag}
                to={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="default"
            className="rounded-lg px-4 py-2 bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer"
            aria-label="Get A Quote"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileNavigation />
      </nav>
    </header>
  );
}
{
  /* <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
            <Link to="/" className=" text-gray-800">
            <img
            src="/logo.png"
            alt="Natsu Productions Logo"
            className="h-8 w-auto"
            loading="lazy"
            />
            </Link>
            <div className="flex gap-6">
            <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            >
            Home
            </Link>
            <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            >
            Contact
            </Link>
            </div>
            </div>
        </nav> */
}
