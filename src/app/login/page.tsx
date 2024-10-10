"use client"
import { loginUser } from "@/helpers/auth"
import React, { useState } from "react"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await loginUser(username, password)
      window.location.href = "/"
    } catch (error) {
      console.error("Login failed:", error)
      setError("Error al iniciar sesión. Intente de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-ed-text">
            Inicia sesión
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="email"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-ed-brown-400 appearance-none rounded-none relative block w-full px-3 py-4 border border-ed-gray-500 placeholder-ed-gray-500 text-ed-text rounded-t-md focus:outline-none focus:ring-ed-red-500 focus:border-ed-red-500 focus:z-10 sm:text-sm"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-ed-brown-400 appearance-none rounded-none relative block w-full px-3 py-4 border border-ed-gray-500 placeholder-ed-gray-500 text-ed-text rounded-b-md focus:outline-none focus:ring-ed-red-500 focus:border-ed-red-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
          </div>

          {error && <div className="text-ed-red-500 text-sm mt-2">{error}</div>}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-ed-red-500 hover:bg-ed-brown-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                "Ingresar"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
