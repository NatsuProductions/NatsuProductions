import { Link } from "react-router-dom";
import { navigation } from "@/data/navigation";
import logo from "@/assets/logo.png";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  return (
    <header>
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
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 ">
          <div className="flex space-x-6">
            {navigation.map((item) => (
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
          <button
            className="rounded-lg  px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Get A Quote"
          >
            Get a Quote
          </button>
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
