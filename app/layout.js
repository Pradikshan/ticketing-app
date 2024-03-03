import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./[components]/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticketing App",
  description: "Tgis is a ticketing app built with NextJS 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
