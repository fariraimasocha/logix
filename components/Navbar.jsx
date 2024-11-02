"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`w-full py-4 px-6 md:px-10 flex justify-between items-center bg-white/70 text-blue-900 backdrop-blur-md shadow-md transition-colors duration-300 z-40 sticky top-0 font-semibold`}
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo/logo.png"
          alt="logo"
          loading="lazy"
          width={50}
          height={30}
          className="w-10 h-10"
        />
        <span className="text-lg font-semibold select-none">Logix</span>
      </Link>

      <nav className="hidden lg:flex items-center gap-6">
        {[
          { href: "/about", label: "About Us" },
          { href: "/free-tools", label: "Free Tools" },
          { href: "/blog", label: "Blogs" },
          { href: "/community", label: "Community" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative pb-1 transition duration-300 after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 font-semibold ${
              pathName === item.href
                ? "text-blue-600 after:bg-blue-600"
                : "hover:text-blue-600 hover:after:bg-blue-600"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Button
          asChild
          className="bg-blue-600 text-white rounded-2xl px-6 py-2 hover:bg-blue-500 font-semibold"
        >
          <Link href="/dashboard">Contribute</Link>
        </Button>
      </nav>

      <button
        className="bg-blue-600 text-white p-2 rounded-md lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <IoClose className="text-2xl" />
        ) : (
          <TbMenuDeep className="text-2xl" />
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/70 text-blue-900 backdrop-blur-md shadow-md flex flex-col items-center gap-6 py-6 lg:hidden animate-slide-down">
          {[
            { href: "/about", label: "About Us" },
            { href: "/free-tools", label: "Free Tools" },
            { href: "/blog", label: "Blogs" },
            { href: "/community", label: "Community" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg ${
                pathName === item.href ? "text-blue-600" : "hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-blue-600 text-white rounded-2xl px-6 py-2 mt-4 hover:bg-blue-500 w-[90%]"
          >
            <Link href="/dashboard">Contribute</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
