import { Award } from "lucide-react";

function CertificationPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 container mx-auto h-[90vh] w-full">
      <div className="text-2xl font-bold text-gray-600">
        Microsoft Certified
      </div>
      <div className="text-3xl font-bold"> Professional Developer</div>

      <div className="flex items-start justify-center gap-10 mt-6">
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="w-full flex flex-col items-center border border-gray-300 gap-2 p-6 rounded-xl">
              <Award />
              <div className="font-bold">
                Microsoft Certification Exams Completed
              </div>
              <div>
                TS: Web Application Development with Microsoft .NET Framework 4
              </div>
              <div>
                TS: Windows Communication Foundation Development with Microsoft
                .NET Framework 4
              </div>
              <div>TS: Accessing Data with Microsoft .NET Framework</div>
              <div>
                Pro: Designing and Developing Web Applications Using Microsoft
                .NET Framework 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CertificationPage;
