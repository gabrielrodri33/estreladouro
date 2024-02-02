import { Inter } from "next/font/google";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import { Open_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Estrela d'Ouro",
  description: "Generated by gabrielrodri33",
};

const mainFontFamily = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/img/logo_site.png"/>
      <body className={mainFontFamily.className}>
        <Cabecalho />
        {children}
      </body>
    </html>
  );
}
