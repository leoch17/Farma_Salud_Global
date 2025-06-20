"use client";
import React, { useState } from "react";

function Client_Code() {
  const [clientCode, setClientCode] = useState("");

  const handleInputChange = (event) => {
    setClientCode(event.target.value);
  };

  const handleClientCodeClick = () => {
    alert("!Código de Cliente Aceptado!");

    setClientCode("");
  };
  return (
    <>
      <section className="w-full py-6 md:py-8 bg-white shadow-sm border-t border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Contenedor del "Código Cliente" */}
          <div className="mb-4 md:mb-0 md:mr-6 flex items-center">
            <button
              type="button"
              onClick={handleClientCodeClick}
              className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800  border border-gray-400 p-2 rounded-md cursor-pointer"
              aria-label="Botón para ver o interactuar con el código de cliente"
            >
              Código Cliente
            </button>
          </div>

          {/* Contenedor del campo con ásteriscos */}
          <div className="flex items-center flex-grow">
            {/* Usando un input deshabilitado para simular el campo */}
            <input
              type="text"
              value={clientCode}
              onChange={handleInputChange}
              className="w-full max-w-xs md:max-w-md lg:max-w-lg text-lg md:text-xl lg:text-2xl font-mono text-gray-600 bg-gray-100 border border-gray-300 p-2 rounded-md text-center focus:outline-none"
              aria-label="Código del cliente"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Client_Code;
