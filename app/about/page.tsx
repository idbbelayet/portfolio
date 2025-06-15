import { Award, Users } from "lucide-react";
import Image from "next/image";

function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 container mx-auto h-[90vh] w-full">
      <div className="text-gray-600 text-xl">Get To Know More</div>
      <div className="text-3xl font-bold">About Me</div>

      <div className="flex items-start justify-center gap-10 mt-6">
        <Image
          className="dark:invert rounded-md"
          src="/portfolio/belayet.jpeg"
          alt="Next.js logo"
          width={150}
          height={600}
        />

        <div className="flex flex-col items-center justify-between gap-6">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-lg flex flex-col items-center border border-gray-300 p-6 rounded-xl">
              <Award />
              <div>Experience</div>
              <div>10+ years</div>
              <div>Frontend Development</div>
              <div>Frontend Development</div>
              <div>Frontend Development</div>
            </div>
            <div className="min-w-lg flex flex-col items-center border border-gray-300 p-6 rounded-xl">
              <Users />
              <div>Education</div>
              <div>Bachelor of Business Studies</div>
              <div>Advanced Certificate for Management Professionals</div>
              <div>C#.NET Applied OOP</div>
              <div>
                Post Graduate Diploma in Enterprise System Analysis and
                Design-C#
              </div>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor et
            nihil, pariatur ullam temporibus ipsa odit quae esse? Excepturi
            facere ex cumque dolor magnam veniam doloremque optio fuga ipsa
            laudantium!
          </p>
        </div>
      </div>
    </div>
  );
}
export default page;
