import type { Metadata } from "next";
import { Zen_Kaku_Gothic_Antique, Montserrat } from "next/font/google";
import "@/app/globals.css";
import { css } from "@/styled-system/css";

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

const responsiveFontSize = css({
  //fontSize: ["100%", "200%", "200%", "350%", "400%"],
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
    <html lang="en" className={responsiveFontSize}>
      <body className={zen.className}>{children}</body>
    </html>
  );
}
