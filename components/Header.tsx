// components/Header.tsx
"use client";

import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-indigo-500 p-4 pr-8 pl-16 text-white">
      <nav className="flex space-x-4">
        <a href="#" className="font-bold">
          Stan
        </a>
        <a href="#" className="text-white hover:text-white mr-4">
          Home
        </a>
        <a href="#" className="text-indigo-300 hover:text-white">
          Our Mission
        </a>
      </nav>
      <div className="flex space-x-4">
        <button className="text-white text-semibold bg-indigo-500 px-1 py-2 rounded text-base font-medium">
          Log in
        </button>
        <button className="bg-white text-black font-semibold px-3 py-2 rounded-lg text-sm">
          Sign Up
        </button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
