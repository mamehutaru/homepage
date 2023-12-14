import type { Metadata } from "next";
import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import "@/app/globals.css";
import "@/app/variable.css";

const zen = Zen_Kaku_Gothic_Antique({
  weight: "900",
  style: "normal",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
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
