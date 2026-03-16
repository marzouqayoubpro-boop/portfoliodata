import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Ayoub Marzouq | Data Analyst \u00b7 Data Engineer \u00b7 IA",
  description:
    "Portfolio de Ayoub Marzouq \u2014 Data Analyst, Data Engineer et passionn\u00e9 d\u2019Intelligence Artificielle. D\u00e9couvrez mes projets Data, pipelines et mod\u00e8les ML.",
  keywords: [
    "Data Analyst",
    "Data Engineer",
    "Intelligence Artificielle",
    "Portfolio",
    "Ayoub Marzouq",
    "Python",
    "BigQuery",
    "Airflow",
    "DBT",
    "Power BI",
  ],
  authors: [{ name: "Ayoub Marzouq" }],
  openGraph: {
    title: "Ayoub Marzouq | Data Analyst \u00b7 Data Engineer \u00b7 IA",
    description:
      "D\u00e9couvrez mes projets Data Engineering, Data Science et IA.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
