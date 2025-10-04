import { Urbanist, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import FloatingContactWrapper from "../components/Floating/FloatingContactWrapper"; 

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
        <FloatingContactWrapper /> 
      </body>
    </html>
  );
}
