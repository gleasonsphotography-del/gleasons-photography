export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="h-[80vh] flex flex-col justify-center items-center text-center">
        <div className="w-96 h-56 bg-zinc-800 rounded-lg mb-8 flex items-center justify-center">
          Large Photo Coming Soon
        </div>

        <h2 className="text-7xl font-bold">
          Capture the Moment
        </h2>

        <p className="mt-4 text-xl">
          
        </p>

        <a
          href="/gallery"
          className="mt-8 px-8 py-4 bg-white text-black rounded-lg inline-block"
        >
          View Gallery
        </a>
      </section>

      <section className="p-10">
        <h2 className="text-4xl font-bold mb-6">
          Featured Photos
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <div className="h-64 bg-zinc-800 rounded-lg"></div>
          <div className="h-64 bg-zinc-800 rounded-lg"></div>
          <div className="h-64 bg-zinc-800 rounded-lg"></div>
        </div>
      </section>
    </main>
  );
}