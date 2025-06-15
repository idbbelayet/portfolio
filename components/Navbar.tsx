import Link from "next/link";

function Navbar() {
  return (
    <div className="container mx-auto flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold">
        Belayet Hossain
      </Link>
      <ul className="flex items-center justify-around space-x-4">
        <li>
          <Link href="/about" className="text-lg">
            About
          </Link>
        </li>
        <li>
          <Link href="certification" className="text-lg">
            Certification
          </Link>
        </li>
        <li>
          <Link href="experience" className="text-lg">
            Experience
          </Link>
        </li>
        <li>
          <Link href="projects" className="text-lg">
            Projects
          </Link>
        </li>
        <li>
          <Link href="Contact" className="text-lg">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
