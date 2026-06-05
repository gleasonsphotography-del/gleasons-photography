import Image from "next/image";
export default async function GalleryPage({
  params,
}: {
  params: Promise<{ gallery: string }>;
}) {
  const { gallery } = await params;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        Private Gallery: {gallery}
      </h1>

      <p className="text-xl mb-8">
        Welcome to your private gallery.
      </p>
<Image
  src="/client-galleries/practice/1000011312.jpg"
  alt="Practice Gallery Photo"
  width={800}
  height={600}
  className="rounded-lg mb-6"
/>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-64 bg-zinc-800 rounded-lg"></div>
        <div className="h-64 bg-zinc-800 rounded-lg"></div>
        <div className="h-64 bg-zinc-800 rounded-lg"></div>
      </div>
    </main>
  );
}