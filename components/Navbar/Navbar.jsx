import Link from "next/link";
import SignInOut from "../SignInOut/SignInOut";


export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <button className="w-full">Swift Events</button>
          </Link>
        </div>
        <ul className="flex gap-4 text-[#9C9C9C]">
          <li><SignInOut /></li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  )
}
