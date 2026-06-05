"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PrivateAccess() {
  const [code, setCode] = useState("");
  const router = useRouter();

const validCodes = [
  "PJ-GRAD-2026",
  "PRACTICE",
];

const handleAccess = () => {
  const enteredCode = code.trim().toUpperCase();

  if (validCodes.includes(enteredCode)) {
    router.push(`/private-galleries/${enteredCode.toLowerCase()}`);
  } else {
    alert("Invalid Access Code");
  }
};

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">
        Private Gallery Access
      </h1>

      <input
        type="text"
        placeholder="Enter Access Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-80 px-4 py-3 rounded-lg bg-white text-black border border-gray-400 mb-4"
      />

      <button
        onClick={handleAccess}
        className="mt-4 px-6 py-3 bg-white text-black rounded-lg"
      >
        Access Gallery
      </button>
    </main>
  );
}