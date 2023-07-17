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
      <body className="scrollbar-none">{children}</body>
    </html>
  );
}
