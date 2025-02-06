import "./globals.css";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "فرانت چپتر | محلی صمیمی برای گفت و گو",
  description: "Generated by create next app",
};

const danaVF = localFont({
  src: "../../public/fonts/dana/DanaVF.woff2",
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
      className={`dark ${danaVF.className}`}
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
