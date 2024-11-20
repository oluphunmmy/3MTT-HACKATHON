import React, { useState } from "react";

export default function Marketplace() {
  const [products] = useState([
    { id: 1, name: "Organic Tomatoes", price: 2.99, seller: "Green Farms" },
    { id: 2, name: "Free-range Eggs", price: 3.99, seller: "Happy Hens" },
    { id: 3, name: "Grass-fed Beef", price: 9.99, seller: "Meadow Meats" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mb-2">Price: ${product.price}</p>
            <p className="mb-4">Seller: {product.seller}</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
