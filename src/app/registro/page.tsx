import { Link } from "next-view-transitions"

// pages/index.js
export default function Registro() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Crear cuenta</h2>
      <div className="w-full max-w-md flex flex-col items-center bg-ed-brown-400 rounded-lg px-8 py-6 mb-6">
        <input
          className="w-full bg-transparent text-ed-white placeholder-ed-gray-500 border-b-2 border-ed-white mb-4 py-2 outline-none"
          type="text"
          placeholder="Nombre completo"
        />
        <input
          className="w-full bg-transparent text-ed-white placeholder-ed-gray-500 border-b-2 border-ed-white mb-4 py-2 outline-none"
          type="email"
          placeholder="Correo electrónico"
        />
        <input
          className="w-full bg-transparent text-ed-white placeholder-ed-gray-500 border-b-2 border-ed-white mb-4 py-2 outline-none"
          type="password"
          placeholder="Contraseña"
        />
        <button className="bg-ed-red-500 text-ed-white px-4 py-2 rounded-lg w-full mt-4">
          Crear cuenta
        </button>
      </div>
      <p className="text-ed-text">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="text-ed-red-500">
          Inicia sesión aquí
        </Link>
      </p>
    </main>
  )
}
