import React from "react";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Crpyto-meeting",
  description: "All your crypto apps at one place",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="scrollbar-none">
        <div className="px-4 max-w-screen-lg m-auto w-full h-full">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
