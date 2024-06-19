import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/header";

const cinzel = Cinzel({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Criado para apresentação dos meus projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cinzel.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
