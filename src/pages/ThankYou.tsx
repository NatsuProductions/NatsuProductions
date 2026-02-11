import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl mb-8">We'll be in touch soon.</p>
        <Link to="/" className="text-blue-500 hover:text-blue-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
