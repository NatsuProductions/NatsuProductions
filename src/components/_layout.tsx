import type { ReactNode } from "react";
import Header from "./custom/navigation/Header";
import BackgroundOrbs from "./custom/backgroundorbs/BackgroundOrbs";
import Footer from "./custom/Footer/Footer";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col w-full ">
      <Header />
      <BackgroundOrbs />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
