/* eslint-disable camelcase */
"use client"
import { useEffect, useState, useRef } from "react"
import { Message } from "@/interfaces/chat"
import { useChatContext } from "@/context/ChatContext"

const Chat = () => {
  const { messages, setMessages } = useChatContext()
  const [input, setInput] = useState("")
  const [last, setLast] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log("Respuesta recibida")
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLast(input)
    setInput("")
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }

    setMessages((prevMessages) => [...prevMessages, userMessage])

    try {
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
            thread_id: localStorage.getItem("threadID"),
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

      setInput("")
      setLast("")
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="col-span-2 flex flex-col h-screen max-h-[48rem] pr-12 border-r border-r-ed-brown-800">
      <div className="flex flex-col h-full">
        <div
          className="flex-grow overflow-y-auto space-y-4 pr-6"
          style={{
            scrollbarColor: "#454545 transparent",
            scrollbarWidth: "thin",
          }}
        >
          {messages.map((message: Message, index: number) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  message.role === "user" ? "bg-ed-brown-400" : "bg-ed-red-500"
                } text-white p-4 rounded-lg w-fit max-w-lg`}
              >
                <p>{message.content}</p>
              </div>
            </div>
          ))}
          {last !== "" && (
            <div className="flex justify-start">
              <div className="bg-ed-red-500 text-white p-4 rounded-lg w-fit max-w-lg">
                <p className="animate-bounce">...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="bg-ed-brown-400 p-4 rounded-lg flex items-center">
            <input
              className="bg-transparent flex-1 text-ed-white placeholder-ed-gray-500 outline-none"
              type="text"
              placeholder="Escribe lo que necesitas que EDprompt te responda."
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-ed-red-500 text-white px-4 py-2 ml-4 rounded-lg"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat
