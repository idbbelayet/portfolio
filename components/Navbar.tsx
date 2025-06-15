import { Menu } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="container px-2 py-4 mx-auto flex flex-wrap items-center justify-between">
      <Link
        href="/"
        className="text-xl font-semibold px-2 rounded bg-gradient-to-r from-teal-950 via-teal-800 to-teal-700"
      >
        <span className="text-gray-200">
          <span className="text-white">B</span>elayet
        </span>
        <span className="text-gray-100"> Hossain</span>
      </Link>
      <ul className="hidden sm:flex flex-wrap items-center justify-around  space-x-4 px-2 divide-x divide-x-white rounded bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 text-white">
        <li>
          <Link
            href="/"
            className="text-base pr-2 hover:pb-1 hover:border-b-2 hover: border-teal-800"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-base pr-2 hover:pb-1 hover:border-b-2 hover: border-teal-800"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/certification"
            className="text-base pr-2 hover:pb-1 hover:border-b-2 hover: border-teal-800"
          >
            Certification
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className="text-base pr-2 hover:pb-1 hover:border-b-2 hover: border-teal-800"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-base pr-2 hover:pb-1 hover:border-b-2 hover: border-teal-800"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-base hover:pb-1 hover:border-b-2 hover: border-teal-800"
          >
            Contact
          </Link>
        </li>
      </ul>
      <Menu className="flex sm:hidden" />
    </div>
  );
}
export default Navbar;
