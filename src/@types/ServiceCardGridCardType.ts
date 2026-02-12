import type { ReactNode } from "react";
export interface ServiceCardGridCard {
  icon?: ReactNode;
  image?: ReactNode;
  title: string;
  price?: string;
  description?: string;
  highlights?: string[];
  button?: ReactNode;
  extra?: ReactNode;
}
