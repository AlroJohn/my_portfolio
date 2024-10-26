import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alro.dev",
  description: "Portfolio of Alro John",
  icons: {
    icon: {
      url: "/images/fav.png",
      type: "image/png",
      sizes: "32x32",
    },
  },
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full bg-pri-0">{children}</body>
    </html>
  );
}
