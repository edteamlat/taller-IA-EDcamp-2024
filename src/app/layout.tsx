import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ViewTransitions, Link } from "next-view-transitions"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "EDprompt",
  description: "Analiza las finanzas de tu negocio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-black text-ed-white">
            <header className="h-16 flex items-center justify-between px-4">
              <Link href="/">
                <h1 className="text-2xl font-bold">
                  ED<span className="text-ed-gray-500">prompt</span>
                </h1>
              </Link>
              <div>
                <Link
                  href="/login"
                  className="mr-4 bg-ed-red-500 px-4 py-2 rounded-md"
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/registro"
                  className="border border-ed-white px-4 py-2 rounded-md"
                >
                  Crear cuenta
                </Link>
              </div>
            </header>
            {children}
            <footer className="h-16 flex items-center justify-center">
              <p className="text-xs">Hecho en Latam - EDcamp Lima 2024</p>
            </footer>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
