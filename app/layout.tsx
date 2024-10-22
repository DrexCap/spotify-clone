import type { Metadata } from "next";
import {Figtree} from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";

const font = Figtree({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Escucha la buena música!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
            {children}
        </Sidebar>
      </body>
    </html>
  );
}
