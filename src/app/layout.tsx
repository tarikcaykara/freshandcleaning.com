import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./global.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fresh & Cleaning | Profesyonel Temizlik Hizmetleri",
  description:
    "Istanbul'da ev, ofis ve inşaat sonrası profesyonel temizlik hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
