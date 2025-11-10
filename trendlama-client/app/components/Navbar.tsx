import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200">
      {/* left */}
      <Link href={"/"} className="flex items-center ">
        <Image src="/logo.png" alt="logo" width={36} height={35} />
        <p className="text-md font-medium tracking-wider hidden md:block">
          Trendlama
        </p>
      </Link>
      {/* right */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href={"/"}>
          <Home className="size-4 text-gray-600" />
        </Link>
        <Bell className="size-4 text-gray-600" />
        <ShoppingCart className="size-4 text-gray-600" />
        <Link href={"/login"}>Signin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
