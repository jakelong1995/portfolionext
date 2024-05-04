import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoang Long | Personal Portfolio",
  description:
    "Hoang Long - UX Designer/FE Developer with 4 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header></Header>
          <div className="fixed right-16 bottom-16">
            <ModeToggle></ModeToggle>
          </div>
          {children}{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
