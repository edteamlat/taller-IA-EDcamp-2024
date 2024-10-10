"use client"
import localFont from "next/font/local"
import "./globals.css"
import { ViewTransitions, Link } from "next-view-transitions"
import { ChatProvider } from "@/context/ChatContext"
import { useEffect, useState } from "react"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    // Verifica si el token existe en localStorage
    const token = localStorage.getItem("authToken")
    setIsLoggedIn(!!token)
  }, [])

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
                {!isLoggedIn ? (
                  <Link
                    href="/login"
                    className="mr-4 bg-ed-red-500 px-4 py-2 rounded-md"
                  >
                    Iniciar sesión
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      localStorage.removeItem("authToken")
                      setIsLoggedIn(false)
                    }}
                    className="mr-4 border border-ed-text text-ed-white px-4 py-2 rounded-md"
                  >
                    Cerrar sesión
                  </button>
                )}
              </div>
            </header>
            <ChatProvider>{children}</ChatProvider>
            <footer className="h-16 flex items-center justify-center">
              <p className="text-xs">Hecho en Latam - EDcamp Lima 2024</p>
            </footer>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
