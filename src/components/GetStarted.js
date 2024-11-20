import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/collaborate", { state: { userType } });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Get Started</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="block mb-2">Select your role:</span>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">--Please choose an option--</option>
            <option value="investor">Investor</option>
            <option value="landowner">Land Owner</option>
            <option value="farmer">Farmer</option>
            <option value="agritech">Agritech Expert</option>
            <option value="graduate">Unemployed Agric Graduate</option>
            <option value="buyer">Buyer</option>
          </select>
        </label>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Continue
        </button>
      </form>
    </div>
  );
}
