import React from "react"
import { useChatContext } from "@/context/ChatContext"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const YourComponent: React.FC = () => {
  const { messages } = useChatContext()

  // Filtrar solo los mensajes del asistente
  const assistantMessages = messages.filter(
    (message) => message.role === "assistant"
  )

  return (
    <div className="col-span-3 px-12">
      {assistantMessages.map((message, index) => (
        <div key={index}>
          {message.analysis && (
            <div className="mb-6">
              <p>{message.analysis}</p>
            </div>
          )}
          {message.data && (
            <div>
              <h3 className="text-2xl font-bold mb-4">{message.data.name}</h3>
              <Bar
                data={{
                  labels: message.data.values.map(
                    (value) => `${value.month} - ${value.product}`
                  ),
                  datasets: [
                    {
                      label: "Unidades Vendidas",
                      data: message.data.values.map(
                        (value) => value.units_sold
                      ),
                      backgroundColor: "rgba(75, 192, 192, 0.6)",
                    },
                    {
                      label: "Ingresos Totales",
                      data: message.data.values.map(
                        (value) => value.total_revenue
                      ),
                      backgroundColor: "rgba(153, 102, 255, 0.6)",
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  scales: {
                    x: {
                      stacked: true,
                    },
                    y: {
                      stacked: true,
                    },
                  },
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default YourComponent
