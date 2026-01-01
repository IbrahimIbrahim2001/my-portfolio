import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Merriweather, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { Footer } from "@/components/footer";
import { AnimatedLayout } from "@/components/shared/animated-layout";
import { Toaster } from "sonner";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const jetBrains_Mono = JetBrains_Mono({
  variable: "--font-jetbrains_mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Ibrahim Ibrahim - Frontend Developer & React Specialist',
    template: '%s | Ibrahim Ibrahim'
  },
  description: 'Passionate Frontend Developer specializing in React, Next.js, TypeScript, and modern web development. Creating fast, accessible, and visually stunning web applications with clean, maintainable code.',

  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Web Development',
    'Portfolio',
    'UI Developer',
    'JavaScript Developer'
  ],

  openGraph: {
    title: 'Ibrahim Ibrahim - Frontend Developer',
    description: 'Specializing in React, Next.js, and modern web technologies',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ibrahim Ibrahim Portfolio',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className='scroll-smooth hide-scrollbar '>
      <body
        className={` ${merriweather.variable} ${jetBrains_Mono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative  min-h-screen px-4 md:px-8 w-full md:max-w-4xl mx-auto">
            <StripedPattern className="opacity-20 z-0" />
            <div className="relative bg-background min-h-screen z-10 border border-y-0 border-border/50">
              <Header />
              <AnimatedLayout>
                {children}
              </AnimatedLayout>
            </div>
          </div>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
