import { Button } from "@/components/ui/button";
import { GithubIcon, Linkedin } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-[90vh] w-full gap-12">
      <Image
        className="dark:invert rounded-full"
        src="/portfolio/belayet.jpeg"
        alt="Next.js logo"
        width={300}
        height={300}
      />
      <div className="flex flex-col items-center justify-start gap-4">
        <p className="text-xl font-semibold">Hello, I am</p>
        <h1 className="text-3xl font-bold">Belayet Hossain</h1>
        <div className="text-2xl font-bold text-gray-600">
          Full-Stack .Net Developer
        </div>
        <div className="flex items-center justify-around space-x-3">
          <Button variant={"outline"} className="rounded-full border-gray-600">
            Download CV
          </Button>
          <Button variant={"default"} className="rounded-full">
            Contact Info
          </Button>
        </div>
        <div className="flex items-center justify-around space-x-3">
          <Button
            variant={"default"}
            className="h-10 w-10 rounded-full border-gray-600"
          >
            <Linkedin />
          </Button>
          <Button variant={"default"} className="h-10 w-10 rounded-full">
            <GithubIcon />
          </Button>
        </div>
      </div>
    </main>
  );
}
