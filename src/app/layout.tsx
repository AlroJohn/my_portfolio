import type { Metadata } from "next";
import "./globals.css";
import { HeaderNav } from "./components/layout/HeaderNav";
import { Footer } from "./components/layout/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Alro.dev",
  description: "Portfolio of Alro John",
  icons: {
    icon: {
      url: "/images/fav.png",

    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full">
        <section className="bg-pri-0 text-pri-4 flex flex-col md:max-w-[75%] w-full h-full mx-auto">
          <HeaderNav />
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
