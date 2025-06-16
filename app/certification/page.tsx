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
              <Award size={48} className="text-yellow-500" />
              <div className="text-lg font-bold mb-4">
                Microsoft Certification Exams Completed
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  TS: Web Application Development with Microsoft .NET Framework
                  4
                </p>
                <p>
                  TS: Windows Communication Foundation Development with
                  Microsoft .NET Framework 4
                </p>
                <p>TS: Accessing Data with Microsoft .NET Framework</p>
                <p>
                  Pro: Designing and Developing Web Applications Using Microsoft
                  .NET Framework 4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CertificationPage;
