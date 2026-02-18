import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Providers } from "../components/providers";
import WhatsAppButton from "@/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaion - Comércio e Serviços ",
  description: "Zaion é uma empresa de tecnologia especializada em soluções de inteligência artificial e automação para empresas. Oferecemos uma ampla gama de serviços, incluindo desenvolvimento de chatbots, análise de dados, automação de processos e consultoria em IA. Nossa missão é ajudar as empresas a aproveitar o poder da inteligência artificial para melhorar a eficiência, aumentar a produtividade e impulsionar o crescimento. Com uma equipe de especialistas em IA e uma abordagem centrada no cliente, estamos comprometidos em fornecer soluções inovadoras e personalizadas que atendam às necessidades específicas de cada cliente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <TopBar/>
          <Navbar/>
          {children}
           <WhatsAppButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
