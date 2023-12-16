import type { Metadata } from "next";
import { Zen_Kaku_Gothic_Antique, Montserrat } from "next/font/google";
import "@/app/globals.css";

const zen = Zen_Kaku_Gothic_Antique({
  weight: "900",
  style: "normal",
  subsets: ["latin-ext"],
});

const montserratItalic = Montserrat({
  weight: "900",
  style: "italic",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "冥界.net",
  description: "まめふたるの個人サイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={zen.className}>{children}</body>
    </html>
  );
}
