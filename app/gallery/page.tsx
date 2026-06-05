"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Image
          src="/photos/1000011312.jpg"
          alt="Photography"
          width={600}
          height={400}
          className="rounded-lg cursor-pointer hover:scale-105 transition"
          onClick={() => setSelectedImage("/photos/1000011312.jpg")}
        />
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Full Size"
              width={1600}
              height={1200}
              className="rounded-lg max-h-[90vh] w-auto"
            />

            <button
              className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded"
              onClick={() => setSelectedImage(null)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </main>
  );
}