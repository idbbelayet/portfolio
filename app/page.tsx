import JsonCrudExample from "@/app/JsonCrudExample";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/portfolio/belayet.jpeg"
          alt="Next.js logo"
          width={180}
          height={38}
        />

        <h1 className="text-3xl font-bold">Mohammad Belayet Hossain</h1>
        <JsonCrudExample />
      </main>
    </div>
  );
}
