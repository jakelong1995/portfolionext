import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Headerv2 } from "@/components/headerv2";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import ActiveSectionContextProvider, {
  ActiveSectionContext,
} from "@/components/ui/active-section-context";

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
      <body className={`${inter.className} relative pt-28 sm:pt-36`}>
        {" "}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            <Header />
            {/* <Headerv2 /> */}
            {/* <ModeToggle /> */}
            {children}{" "}
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
