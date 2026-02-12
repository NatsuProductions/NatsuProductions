import type { ReactNode } from "react";
import Header from "./custom/navigation/Header";
import BackgroundOrbs from "./custom/backgroundorbs/BackgroundOrbs";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-hidden">
      <Header />
      <BackgroundOrbs />
      <main className="relative z-10 flex-1 ">{children}</main>
    </div>
  );
}
