import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Cormac McCann | Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${robotoCondensed.className}`}>
        <Nav/>
        <div>
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
