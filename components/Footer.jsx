import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center text-center space-y-4">
        <Link href="https://github.com" target="_blank">
          <FaGithub className="text-3xl hover:text-white transition duration-300" />
        </Link>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Logix. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
          Built to support the growth of startup founders worldwide.
        </p>
      </div>
    </footer>
  );
}
