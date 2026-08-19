import type { Metadata } from "next";
import { Montserrat, Alkatra } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const alkatra = Alkatra({
  variable: "--font-alkatra",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bhoy Bangla | Animated Horror in Bengali",
  description: "Experience the true essence of fear with Bhoy Bangla's animated horror videos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${alkatra.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
