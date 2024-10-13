import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

// FONT
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "KevMuthangia | Portfolio",
  description: "Portfolio for react front end web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
