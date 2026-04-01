import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://thilina-weerasinghe.dev'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Thilina Weerasinghe | Software Engineer',
    template: 'Thilina Weerasinghe | %s'
  },
  description: 'Software Engineer specializing in Java, Spring Boot, .NET, and cloud-native applications. Building scalable backend systems and modern full-stack solutions.',
  keywords: ['Software Engineer', 'Java', 'Spring Boot', 'ASP.NET', 'C#', 'React', 'Angular', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MySQL'],
  authors: [{ name: 'Thilina Weerasinghe' }],
  creator: 'Thilina Weerasinghe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Thilina Weerasinghe - Portfolio',
    title: 'Thilina Weerasinghe | Software Engineer',
    description: 'Software Engineer specializing in Java, Spring Boot, .NET, and cloud-native applications.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thilina Weerasinghe - Software Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thilina Weerasinghe | Software Engineer',
    description: 'Software Engineer specializing in Java, Spring Boot, .NET, and cloud-native applications.',
    images: ['/og-image.jpg'],
    creator: '@thilina_w'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
