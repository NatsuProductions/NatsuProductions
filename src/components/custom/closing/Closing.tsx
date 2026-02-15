import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
export default function Closing() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8">
          Ready to bring your vision to life?
        </h1>

        <Button
          className="rounded-lg py-4 px-8 md:py-6 md:px-12 bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl text-xl  font-bold cursor-pointer"
          aria-label="Request A Quote"
        >
          Request A Quote
          <Send className="w-6 h-6 ml-3" />
        </Button>
      </div>
    </section>
  );
}
