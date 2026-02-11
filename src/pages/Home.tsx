import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Natsu Productions
        </h1>
        <p className="text-xl mb-8">Your funnel starts here</p>
        <Link
          to="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
