import { buttonVariants } from "@/components/ui/button";
import { Download, GithubIcon, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-wrap items-center justify-center h-[90vh] w-full gap-12">
      <Image
        className="rounded-full"
        src="/portfolio/belayet.jpeg"
        alt="Next.js logo"
        width={200}
        height={200}
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-semibold">Hello, I am</p>
        <h1 className="text-3xl font-bold">Mohammad Belayet Hossain</h1>
        <div className="text-2xl font-bold text-gray-600">
          Full-Stack .Net Developer
        </div>
        <div className="flex items-center justify-around space-x-3">
          <a
            href={"/portfolio/ResumeOfBelayetHossain.pdf"}
            className={buttonVariants({ variant: "outline" }) + " rounded-full"}
            download={"download"}
          >
            <Download />
            Download CV
          </a>

          <Link
            href={"/contact"}
            className={`${buttonVariants({ variant: "default" })} rounded-full`}
          >
            <Mail />
            Contact Info
          </Link>
        </div>
        <div className="flex items-center justify-around space-x-3">
          <Link
            href={
              "https://www.linkedin.com/in/mohammad-belayet-hossain-28580158/"
            }
            className={
              buttonVariants({ variant: "default" }) +
              " h-10 w-10 rounded-full border-gray-600"
            }
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link
            href={"https://github.com/idbbelayet"}
            className={
              buttonVariants({ variant: "default" }) +
              " h-10 w-10 rounded-full border-gray-600"
            }
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </main>
  );
}
