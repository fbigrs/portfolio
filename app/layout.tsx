import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3 } from "next/font/google"
import "./globals.css"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Fabian Gross - System Administrator & Integration Specialist",
  description:
    "Expert in seamless system integrations and administration, committed to optimizing performance and reliability.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} antialiased`}>
      <body className="font-sans bg-gray-900 text-gray-100">{children}</body>
    </html>
  )
}
