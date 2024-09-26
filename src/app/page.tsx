import { Link } from "next-view-transitions"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold mb-4">
        ¿Qué análisis quieres hacer hoy?
      </h2>
      <p className="mb-6 text-ed-text">
        Elige o sube los archivos y/o imágenes que contengan la información que
        quieras analizar. Se necesita al menos uno.
      </p>
      <div className="w-full max-w-5xl flex items-center bg-ed-brown-400 rounded-lg px-4 py-6 mb-6">
        <input
          className="flex-1 bg-transparent text-ed-white placeholder-ed-gray-500 outline-none"
          type="text"
          placeholder="Escribe lo que necesitas que EDprompt te responda."
        />
      </div>
      <Link
        href="/chat"
        className="bg-ed-red-500 text-ed-white px-4 py-2 rounded-lg ml-4"
      >
        Enviar y analizar
      </Link>
    </main>
  )
}
