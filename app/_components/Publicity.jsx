import React from "react";
import Image from "next/image";

function Publicity() {
  const localVideoPath = "/video/descuento.mp4";
  return (
    <>
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 md:mb-10">
            Publicidad
          </h2> */}

          <div className="flex flex-col md:flex-row gap-6">
            {/* flex-col en móvil, flex-row en md+ */}
            {/* ******************************************************************* */}
            {/* ******************************************************************* */}
            {/* Publicidad 2: Imagen */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200">
                {/* Usamos Next.js Image para optimización */}
                <Image
                  src="/image/publicidad.jpeg" // **Reemplaza con la ruta de tu imagen real**
                  alt="Publicidad 2 - Imagen"
                  fill // Hace que la imagen llene el contenedor
                  className="object-cover" // Recorta la imagen para que cubra el área
                  sizes="(max-width: 768px) 100vw, 50vw" // Optimización para Next/Image
                />
              </div>
            </div>
            {/* ******************************************************************* */}
            {/* ******************************************************************* */}
            {/* Publicidad 1: Video */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200">
                {/* Contenedor responsivo para el video (16:9) */}
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover" // object-cover para que llene el espacio sin distorsión
                  autoPlay // Para que empiece a reproducirse automáticamente
                  loop // ¡Este atributo hace que se repita!
                  muted // Es buena práctica silenciar videos de reproducción automática
                  playsInline // Recomendado para reproducción en dispositivos móviles
                  preload="auto" // Sugiere al navegador precargar el video
                  controls={false} // Puedes poner true si quieres mostrar los controles por defecto del navegador
                >
                  <source src={localVideoPath} type="video/mp4" />
                  {/* Puedes añadir más fuentes para diferentes formatos de video (WebM, Ogg) */}
                  {/* <source src="/videos/mi-publicidad.webm" type="video/webm" /> */}
                </video>
              </div>
            </div>
            {/* ******************************************************************* */}
            {/* ******************************************************************* */}
            {/* Publicidad 3: Imagen */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200">
                {/* Usamos Next.js Image para optimización */}
                <Image
                  src="/image/publicidad-2.jpeg" // **Reemplaza con la ruta de tu imagen real**
                  alt="Publicidad 2 - Imagen"
                  fill // Hace que la imagen llene el contenedor
                  className="object-cover" // Recorta la imagen para que cubra el área
                  sizes="(max-width: 768px) 100vw, 50vw" // Optimización para Next/Image
                />
              </div>
            </div>
            {/* ******************************************************************* */}
            {/* ******************************************************************* */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Publicity;
