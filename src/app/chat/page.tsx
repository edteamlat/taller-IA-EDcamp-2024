"use client"
import Analysis from "@/components/Analysis"
import Chat from "@/components/chat"

export default function ChatPage() {
  return (
    <main className="grid grid-cols-5 h-full bg-black text-ed-white px-8 pt-12 pb-6">
      <Chat />
      <Analysis />
    </main>
  )
}
