import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto bg-black m-0 p-0">
      <div>
        <h1 className="bg-black text-white text-4xl text-center uppercase py-4">
          Website coming soon
        </h1>
        <Image
          className="relative w-full h-screen object-contain"
          src="/images/coming_soon.jpg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
