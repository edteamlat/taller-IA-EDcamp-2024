import { Link } from "next-view-transitions"

// pages/index.js
export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Iniciar sesión</h2>
      <div className="w-full max-w-md flex flex-col items-center bg-ed-brown-400 rounded-lg px-8 py-6 mb-6">
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
          Iniciar sesión
        </button>
      </div>
      <p className="text-ed-text">
        ¿No tienes cuenta?{" "}
        <Link href="/registro" className="text-ed-red-500">
          Regístrate aquí
        </Link>
      </p>
    </main>
  )
}
