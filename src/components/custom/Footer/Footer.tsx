import logoWhite from "@/assets/logo_white.png";
export default function Footer() {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <img
          src={logoWhite}
          alt="Natsu Productions Logo"
          className="mx-auto mb-4 w-32 h-auto"
        />

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Natsu Productions. All rights
          reserved.
        </p>
      </div>
    </section>
  );
}
