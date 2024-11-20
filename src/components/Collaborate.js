import React from "react";

export default function Collaborate() {
  const userTypes = ["Investor", "Land Owner", "Farmer", "Agritech Expert", "Unemployed Agric Graduate", "Buyer"];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Collaborate</h2>
      <p className="mb-6">Connect with other agricultural stakeholders:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userTypes.map((type, index) => (
          <div key={index} className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-semibold">{type}</h3>
            <p className="mb-4">Connect with {type}s</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              View Profiles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
