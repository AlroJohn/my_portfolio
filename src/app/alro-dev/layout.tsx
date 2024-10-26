"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { BottomNav } from "../components/layout/BottomNav";
import { Footer } from "../components/layout/Footer";
import { HeaderNav } from "../components/layout/HeaderNav";

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [eventOpen, setEventOpen] = useState(false);

  const openAddEvent = () => setEventOpen(true);
  const closeAddEvent = () => setEventOpen(false);

  return (
    <html lang="en">
      <body className="w-full bg-pri-0">
        <section className="text-pri-4 flex flex-col md:max-w-[75%] w-full h-full mx-auto">
          <HeaderNav openAddEvent={openAddEvent} />
          {children}
        </section>
        <Footer />
        <BottomNav eventOpen={eventOpen} onClose={closeAddEvent} />
      </body>
    </html>
  );
}
