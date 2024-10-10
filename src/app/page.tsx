"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useChatContext } from "@/context/ChatContext"
import { Message } from "@/interfaces/chat"

function HomeContent() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { setMessages } = useChatContext()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)

    const userMessage: Message = { role: "user", content: input }

    setMessages([userMessage])

    try {
      // Create a new thread
      const threadResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ai/thread`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        }
      )
      const threadData = await threadResponse.json()
      const threadID = threadData.threadID

      localStorage.setItem("threadID", threadID)

      const messageResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ai/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
          body: JSON.stringify({
            // eslint-disable-next-line camelcase
            thread_id: threadID,
            content: input,
          }),
        }
      )
      const messageData = await messageResponse.json()

      const messageJSON = JSON.parse(messageData)

      const aiMessage: Message = {
        role: "assistant",
        content: messageJSON.response,
      }
      if (messageJSON.analysis) {
        aiMessage.analysis = messageJSON.analysis
      }
      if (messageJSON.data) {
        aiMessage.data = messageJSON.data
      }

      setMessages((prevMessages) => [...prevMessages, aiMessage])

      router.push("/chat")
    } catch (error) {
      console.error("Error al enviar el mensaje:", error)
    } finally {
      setIsLoading(false)
      setInput("")
    }
  }

  return (
    <main className="flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold mb-4">
        ¿Qué análisis quieres hacer hoy?
      </h2>
      <p className="mb-6 text-ed-text">
        Elige o sube los archivos y/o imágenes que contengan la información que
        quieras analizar. Se necesita al menos uno.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-5xl mb-6">
        <div className="flex items-center bg-ed-brown-400 rounded-lg px-4 py-6">
          <input
            className="flex-1 bg-transparent text-ed-white placeholder-ed-gray-500 outline-none"
            type="text"
            placeholder="Escribe lo que necesitas que EDprompt te responda."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          {isLoading ? (
            <div className="bg-ed-red-500 text-ed-white px-4 py-2 rounded-lg ml-4">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-ed-red-500 text-ed-white px-4 py-2 rounded-lg ml-4"
            >
              Enviar y analizar
            </button>
          )}
        </div>
      </form>
    </main>
  )
}

const Home = () => {
  return <HomeContent />
}

export default Home
