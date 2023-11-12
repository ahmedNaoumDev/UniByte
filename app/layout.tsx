import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "UniByte | Computer science Club",
    template: "%s | UniByte",
  },
  description: "Empowering the next generation of tech enthusiasts. Join UniByte for coding, innovation, and collaboration. Explore opportunities, events, and projects with us.",
  openGraph: {
    title: "UniByte_Club",
    description: "Empowering the next generation of tech enthusiasts. Join UniByte for coding, innovation, and collaboration. Explore opportunities, events, and projects with us.",
    url: "",
    siteName: "UniByte | Club",
    images: [
      {
        url: "/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Unibyte_Club",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/uniByte.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
