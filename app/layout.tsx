import type { Metadata } from "next";
import { Lato, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700", "900"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fundacja Przyjaźń bez Granic",
  description:
    "Pomorski Hub współpracy międzynarodowej i działań humanitarnych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${lato.variable} ${robotoSlab.variable} antialiased bg-sand text-primary`}
      >
        <div className="min-h-screen">
          <SiteHeader />
          <main className="min-h-[75vh] bg-gradient-to-b from-white via-sand to-sand">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
