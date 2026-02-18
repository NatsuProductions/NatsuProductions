import type { ReactNode } from "react";
import Header from "@/components/custom/navigation/Header";
import BackgroundOrbs from "@/components/custom/backgroundorbs/BackgroundOrbs";
import Closing from "@/components/custom/closing/Closing";
import Footer from "@/components/custom/footer/Footer";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col w-full ">
      <Header />
      <BackgroundOrbs />
      <main className="relative z-10 flex-1">{children}</main>
      <Closing />
      <Footer />
    </div>
  );
}
