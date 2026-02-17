import logoWhite from "@/assets/logo_white.png";
import { FOOTER_NAVIGATION, LINK_NAVIGATION } from "@/data/Navigation";
export default function Footer() {
  return (
    <section className="py-12  bg-slate-950 text-white z-10">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <img
          src={logoWhite}
          alt="Natsu Productions Logo"
          className="mx-auto mb-4 w-32 h-auto"
        />

        {/* Navigation Links */}
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center gap-6 text-lg font-medium mb-6">
            {FOOTER_NAVIGATION.map((item) => (
              <li key={item.tag}>
                <a
                  href={item.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap justify-center gap-6 text-xs font-normal mt-2 opacity-80">
            {LINK_NAVIGATION.map((item) => (
              <li key={item.tag}>
                <a
                  href={item.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Natsu Productions. All rights
          reserved.
        </p>
      </div>
    </section>
  );
}
