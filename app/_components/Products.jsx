import React from "react";
import Image from "next/image";

function Products() {
  const products = [
    {
      id: 1,
      name: "Biotalol",
      imageUrl: "/image/producto.jpeg", // Asegúrate de que estas rutas sean correctas
      imageAlt: "Descripción del Producto 1",
      price: "$4.99",
    },
    {
      id: 2,
      name: "Neuromix",
      imageUrl: "/image/producto-2.jpeg",
      imageAlt: "Descripción del Producto 2",
      price: "$2.99",
    },
    {
      id: 3,
      name: "Vitamina C",
      imageUrl: "/image/producto-3.jpeg", // Asegúrate de que estas rutas sean correctas
      imageAlt: "Descripción del Producto 1",
      price: "$5.99",
    },
    {
      id: 4,
      name: "Acetaminofen",
      imageUrl: "/image/producto-4.jpeg",
      imageAlt: "Descripción del Producto 2",
      price: "$3.99",
    },
  ];
  return (
    <>
      <section className="w-full py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 md:mb-10">
            Nuestros Productos Destacados
          </h2>

          <div className="flex flex-wrap -mx-2">
            {products.map((product) => (
              <div key={product.id} className="w-1/2 md:w-1/4 px-2 mb-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div href={`/products/${product.id}`} className="block">
                    <div className="relative w-full aspect-square">
                      {" "}
                      {/* Contenedor para imagen cuadrada */}
                      <Image
                        src={product.imageUrl}
                        alt={product.imageAlt}
                        fill // Permite que la imagen llene el contenedor
                        className="object-cover" // Recorta la imagen para que cubra el área
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw" // Optimización para Next/Image
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.price}
                    </p>
                    {/* Puedes añadir un botón "Añadir al carrito" o "Ver detalles" aquí */}
                    <button
                      className="mt-4 w-full bg-[#367F8D] text-white py-2 px-4 rounded-md text-sm font-medium
                               hover:bg-[#18727D] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
