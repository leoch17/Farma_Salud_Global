"use client";
import React, { useState } from "react";

function Available() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null); // null, 'available', 'not-available'

  // Datos de ejemplo para simular la búsqueda y disponibilidad
  // En un caso real, esto vendría de una API o base de datos
  const availableItems = [
    { id: 1, name: "Paracetamol 500mg", available: true },
    { id: 2, name: "Ibuprofeno 400mg", available: false },
    { id: 3, name: "Amoxicilina 250mg", available: false },
    { id: 4, name: "Omeprazol 20mg", available: true },
    { id: 5, name: "Vitamina C 1000mg", available: true },
    { id: 6, name: "Losartán 50mg", available: false },
    { id: 7, name: "Metformina 850mg", available: true },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Opcional: Si quieres que el resultado se "limpie" al escribir algo nuevo
    setSearchResult(null);
  };

  const handleCheckAvailability = () => {
    if (searchTerm.trim() === "") {
      alert("Por favor, ingrese un producto para verificar.");
      setSearchResult(null);
      return;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    // Busca si algún elemento coincide con el término de búsqueda
    // En un caso real, esto podría ser una búsqueda más sofisticada (API, base de datos)
    const foundItem = availableItems.find((item) =>
      item.name.toLowerCase().includes(lowerCaseSearchTerm)
    );

    if (foundItem) {
      if (foundItem.available) {
        setSearchResult("available");
      } else {
        setSearchResult("not-available");
      }
    } else {
      // Si no se encuentra el item, también se considera "no disponible" o "no encontrado"
      setSearchResult("not-found");
    }
  };

  const getResultClasses = () => {
    switch (searchResult) {
      case "available":
        return "text-green-700 bg-green-100 border-green-400";
      case "not-available":
        return "text-red-700 bg-red-100 border-red-400";
      case "not-found":
        return "text-yellow-700 bg-yellow-100 border-yellow-400";
      default:
        return "text-gray-700 bg-gray-100 border-gray-300";
    }
  };

  const getResultMessage = () => {
    switch (searchResult) {
      case "available":
        return `"${searchTerm}" está disponible.`;
      case "not-available":
        return `"${searchTerm}" no está disponible actualmente.`;
      case "not-found":
        return `"${searchTerm}" no encontrado en nuestro catálogo.`;
      default:
        return "Ingrese un producto para verificar su disponibilidad.";
    }
  };

  return (
    <section className="w-full py-6 md:py-8 bg-white shadow-sm border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
        {/* Contenedor del Input de Búsqueda */}
        <div className="flex-grow w-full md:w-auto">
          <div className="relative flex items-center border border-gray-400 p-2 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
            {/* Ícono de búsqueda (opcional, requiere una librería de iconos) */}
            {/* Si usas Headless UI Icons: */}
            {/* <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" aria-hidden="true" /> */}
            <span className="text-gray-500 text-xl pr-2">🔍</span>{" "}
            {/* Ícono de lupa unicode */}
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Verifica Disponibilidad"
              className="w-full text-lg md:text-xl lg:text-2xl font-mono text-gray-800 bg-white placeholder-gray-500 focus:outline-none"
              aria-label="Campo de búsqueda de disponibilidad"
            />
          </div>
        </div>

        {/* Botón de "Verificar Disponibilidad" */}
        <div className="w-full md:w-auto">
          <button
            type="button"
            onClick={handleCheckAvailability}
            className="w-full py-3 px-6 text-lg md:text-xl lg:text-2xl font-semibold text-white bg-[#367F8D] rounded-md
                       hover:bg-[#18727D] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
            aria-label="Botón para verificar la disponibilidad"
          >
            Verificar
          </button>
        </div>
      </div>

      {/* Área de Resultado de Disponibilidad */}
      {searchResult && ( // Solo muestra este div si hay un resultado (searchResult no es null)
        <div
          className={`mt-6 mx-auto px-4 py-3 border rounded-md text-center max-w-xl transition-all duration-300 ease-in-out
                        ${getResultClasses()}`}
        >
          <p className="text-lg font-medium">{getResultMessage()}</p>
        </div>
      )}
    </section>
  );
}

export default Available;
