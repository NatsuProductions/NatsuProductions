import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/features/studio/content";
import logo from "@/assets/logo.png";
import whiteLogo from "@/assets/logo_white.png";

export default function StudioLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  function close() {
    setOpen(false);
  }
  return (
    <div className="studio-app">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header
        className="studio-header"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            close();
            toggle.current?.focus();
          }
        }}
      >
        <div className="shell header-row">
          <Link
            className="brand"
            to="/"
            onClick={close}
            aria-label="Natsu Productions home"
          >
            <img src={logo} alt="Natsu Productions" />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.label} to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            className="studio-button header-cta"
            to="/#inquiry"
            onClick={close}
          >
            Let's talk <ArrowUpRight size={17} />
          </Link>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            className="mobile-nav shell"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link key={item.label} to={item.href} onClick={close}>
                {item.label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
            <Link to="/#inquiry" onClick={close}>
              Start a project
              <ArrowUpRight size={18} />
            </Link>
          </nav>
        )}
      </header>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="studio-footer">
        <div className="shell footer-top">
          <Link to="/" aria-label="Natsu Productions home">
            <img src={whiteLogo} alt="Natsu Productions" />
          </Link>
          <p>
            Made for music.
            <br />
            Built around your story.
          </p>
          <a href="#main-content" className="text-link">
            Back to top ↑
          </a>
        </div>
        <div className="shell footer-bottom">
          <p className="mono">© {new Date().getFullYear()} Natsu Productions</p>
          <div>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-of-service">Terms</Link>
            <Link to="/work-with-us">Collaborate</Link>
          </div>
          <p className="mono">Philippines ↗ Worldwide</p>
        </div>
      </footer>
    </div>
  );
}
