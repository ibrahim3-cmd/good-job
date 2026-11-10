import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cat Clapping",
  description: "A cat clapping GIF from Tenor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
