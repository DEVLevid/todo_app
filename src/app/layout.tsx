import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legaplan | todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Inter Tight', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
