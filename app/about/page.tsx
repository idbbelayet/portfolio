import { Award, GraduationCap } from "lucide-react";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 container mx-auto h-[90vh] w-full">
      <div className="text-2xl font-bold text-gray-600">Get To Know More</div>
      <div className="text-3xl font-bold">About Me</div>

      <div className="flex items-start justify-center gap-10 mt-6">
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="w-1/2 flex flex-col items-center border border-gray-300 gap-2 p-6 rounded-xl">
              <Award />
              <div className="font-bold">Experience</div>
              <div>10+ years</div>
              <div>Frontend Development</div>
              <div>Backend Development</div>
              <div>API Development</div>
            </div>
            <div className="w-1/2 flex flex-col items-center border border-gray-300 gap-2 p-6 rounded-xl">
              <GraduationCap />
              <div className="font-bold">Education</div>

              <div>Advanced Certificate for Management Professionals</div>
              <div>C#.NET Applied OOP</div>
              <div>
                Post Graduate Diploma in Enterprise System Analysis and
                Design-C#
              </div>
              <div>Bachelor of Business Studies</div>
            </div>
          </div>
          <div
            className="flex flex-col gap-2  border border-gray-300  p-6 rounded-xl"
          >
            <p>
              I am a Microsoft Certified ASP.NET Core & C# Developer with a
              strong background in web development and software architecture. I
              have experience in building scalable applications and specialize
              in designing robust, high-performance solutions using a wide range
              of modern technologies.
            </p>
            <p>
              I am passionate about clean code, scalable architectures, and
              software quality. I actively work with CQRS to build efficient and
              maintainable applications. Additionally, I have hands-on
              experience in test automation, ensuring smooth and reliable
              software delivery.
            </p>
            <p>
              I am always eager to learn, collaborate, and innovate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
