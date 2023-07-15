import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Crpyto-meeting",
  description: "All your crypto apps at one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative px-4 max-w-screen-xl mx-auto">{children}</body>
    </html>
  );
}
