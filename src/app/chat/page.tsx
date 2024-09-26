// components/Main.js
export default function Main() {
  return (
    <main className="grid grid-cols-5 h-full bg-black text-ed-white px-8 pt-12 pb-6">
      <div className="col-span-2 flex flex-col justify-end space-y-4 pr-12 border-r border-r-ed-brown-800">
        <div className="flex flex-col h-full justify-end space-y-4">
          <div className="space-y-4">
            <div className="flex justify-start">
              <div className="bg-ed-red-500 text-white p-4 rounded-lg w-fit max-w-lg">
                <p>
                  ¿Qué me puedes aconsejar sobre las ventas de este año? ¿Cómo
                  puedo mejorar mis ventas?
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-ed-brown-400 text-white p-4 rounded-lg w-fit max-w-lg">
                <p>
                  He mirado todas las ventas del año y he hecho un análisis
                  completo que te muestro aquí →
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-ed-red-500 text-white p-4 rounded-lg w-fit max-w-lg">
                <p>Pero ¿cómo puedo aumentar mis ventas?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-ed-brown-400 text-white p-4 rounded-lg w-fit max-w-lg">
                <p>
                  Estoy actualizando mi respuesta en el panel derecho para darte
                  mis consejos.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-ed-brown-400 p-4 rounded-lg flex items-center mt-4">
            <input
              className="bg-transparent flex-1 text-ed-white placeholder-ed-gray-500 outline-none"
              type="text"
              placeholder="Escribe lo que necesitas que EDprompt te responda."
            />
            <button className="bg-ed-red-500 text-white px-4 py-2 ml-4 rounded-lg">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-6 pl-12 col-span-3">
        <div className="flex gap-x-6">
          <p className="text-ed-text mb-4">
            Este gráfico de barras compara el uso de varias herramientas de
            diseño gráfico durante el año 2021. En el eje vertical se mide el
            porcentaje de uso, mientras que en el eje horizontal se presentan
            las herramientas...
          </p>
          <img
            src="/path/to/bar-chart.png"
            alt="Gráfico de barras"
            className="w-full"
          />
        </div>
        <div className="flex gap-x-6">
          <img
            src="/path/to/line-chart.png"
            alt="Gráfico de líneas"
            className="w-full"
          />
          <p className="text-ed-text mb-4">
            El gráfico de líneas muestra una distribución del uso de diferentes
            herramientas de diseño gráfico y edición en el año 2021. En el eje
            vertical se representa el porcentaje de utilización...
          </p>
        </div>
      </div>
    </main>
  )
}
