import type { ReactNode } from "react";
import Header from "./custom/navigation/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col  w-full border-red-300 border">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
