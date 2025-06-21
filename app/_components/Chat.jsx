"use client";
import React, { useState } from "react";
import Image from "next/image";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón Flotante del Chat */}
      <button
        type="button"
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#367F8D] text-white shadow-lg 
        hover:bg-[#18727D] transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 
        flex items-center justify-center 
        w-16 h-16 md:w-20 md:h-20 cursor-pointer" //Tamaño responsivo
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        {/* Icono de chat */}
        {/* Puedes usar un icono de librería o un SVG/carácter Unicode */}
        {isOpen ? (
          <span className="text-4xl">✖</span> // Icono de cerrar
        ) : (
          <div className="relative w-full h-full flex items-center justify-center rounded-full overflow-hidden">
            <Image
              src="/image/asistente.jpeg" // <-- ¡IMPORTANTE! Reemplaza con la ruta de tu imagen
              alt="Icono de chat"
              fill
              className="object-cover" // object-contain para que la imagen quepa sin recortarse en el círculo
              sizes="200px" // Ayuda a Next.js a optimizar el tamaño de la imagen para el botón
            />
          </div>
        )}
      </button>

      {isOpen && (
        <div
          className="fixed bottom-32 right-6 z-40 bg-white rounded-lg shadow-xl border border-gray-200
                        w-[calc(100vw-3rem)] max-w-sm h-96 flex flex-col"
        >
          {/* Encabezado del Chat */}
          <div className="bg-[#367F8D] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              {/* Imagen del Asistente */}
              {/* <div className="mr-2 relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/image/asistente.jpeg" // Reemplaza con la ruta de tu imagen
                  alt="Avatar de Sofia"
                  fill
                  className="object-cover"
                />
              </div> */}
              <h3 className="text-lg font-semibold">Sofia Asistente Virtual</h3>
            </div>
            {/* Botón de cerrar (opcional aquí) */}
            {/* <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none">
              <span className="sr-only">Cerrar chat</span>
              <XMarkIcon className="h-6 w-6" />
            </button> */}
          </div>

          {/* Cuerpo del Chat */}
          <div className="flex-1 p-4 overflow-y-auto text-gray-800 text-sm custom-scrollbar">
            <div className="mb-2 p-2 bg-gray-100 rounded-lg self-start max-w-[85%]">
              <p>Hola, soy tu asistente virtual. ¿En qué puedo ayudarte hoy?</p>
            </div>
            <div className="mb-2 p-2 bg-blue-100 rounded-lg self-end text-right max-w-[85%] ml-auto">
              <p>Necesito ayuda con un producto.</p>
            </div>
            <div className="mb-2 p-2 bg-gray-100 rounded-lg self-start max-w-[85%]">
              <p>
                Claro, ¿podrías darme más detalles sobre el producto o tu
                consulta?
              </p>
            </div>
          </div>

          {/* Área de entrada de texto del Chat */}
          <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Podrías añadir un botón de enviar aquí */}
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
