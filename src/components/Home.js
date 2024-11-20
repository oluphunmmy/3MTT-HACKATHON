import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to BitFarm</h2>
      <p className="mb-6">Connecting agricultural stakeholders for a sustainable future.</p>
      <Link to="/get-started" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Get Started
      </Link>
    </div>
  );
}
