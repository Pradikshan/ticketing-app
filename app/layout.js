import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./[components]/Nav";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

//default css is not added for icons
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticketing App",
  description: "Tgis is a ticketing app built with NextJS 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
