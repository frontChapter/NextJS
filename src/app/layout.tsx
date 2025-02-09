import "./globals.css";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "فرانت چپتر | محلی صمیمی برای گفت و گو",
  description: "Generated by create next app",
};

const danaVF = localFont({
  src: [
    {
      path: "../../public/fonts/dana/DanaVF.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-dana",
  display: "swap",
  fallback: ["Tahoma", "sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa-IR"
      dir="rtl"
      style={{ colorScheme: "dark" }}
      className={`dark ${danaVF.variable}`}
    >
      <body className="bg-background antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
