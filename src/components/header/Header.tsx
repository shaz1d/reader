"use client";
import { cn } from "@/lib/utils";
import { User } from "next-auth";
import { signOut } from "next-auth/react";

import { IconEdit, IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = ({ user }: { user: User | undefined }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="h-16 w-full border-b border-gray-200">
      <div className="container flex justify-between mx-auto items-center h-full relative">
        <IconMenu2
          stroke={2}
          onClick={() => setMenuOpen(true)}
          className="sm:hidden"
        />
        <div
          className={cn(
            "min-h-screen w-full max-w-xs  fixed transition-all duration-500 top-0 bg-white shadow-[0_35px_35px_rgba(0,0,0,0.25)] z-50 p-8",
            menuOpen ? "left-0" : "-left-[100%]"
          )}
        >
          <div className="flex flex-col gap-8 ">
            <IconX
              stroke={2}
              className="self-end cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
            <Link
              className="text-2xl font-medium text-gray-900 hover:text-gray-900"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-2xl font-medium text-gray-900 hover:text-gray-900"
              href="/"
            >
              About
            </Link>
            <Link
              className="text-2xl font-medium text-gray-900 hover:text-gray-900"
              href="/"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="items-center gap-8 hidden sm:flex">
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
            href="/"
          >
            Contact
          </Link>
        </div>
        <Link
          href="/"
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
        >
          <Image
            src="/Reader-logo-dark.svg"
            height={20}
            width={70}
            alt="Reader-Logo"
          />
        </Link>
        <div className="flex ">
          <div className="flex items-center gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user.image as string} />
                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" alignOffset={-4}>
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={user.image as string}
                          alt={user.name as string}
                        />
                        <AvatarFallback className="rounded-lg">
                          {user.name?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {user.name}
                        </span>
                        <span className="truncate text-xs">{user.email}</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button
                      onClick={() => signOut()}
                      className="flex items-center gap-1 w-full justify-center cursor-pointer font-semibold font-[family-name:var(--font-geist-sans)] px-6 py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-950 hover:text-white transition-colors"
                    >
                      <span>Log Out</span>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                {" "}
                <button className="flex items-center gap-1 cursor-pointer font-semibold font-[family-name:var(--font-geist-sans)] px-6 py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-950 hover:text-white transition-colors">
                  <span>Log In</span>
                </button>
              </Link>
            )}
          </div>

          <Link href="/write" className="ml-2 hidden sm:block">
            <button className="flex items-center gap-1 cursor-pointer font-semibold font-[family-name:var(--font-geist-sans)] px-6 py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-950 hover:text-white transition-colors">
              <IconEdit stroke={2} size={20} /> <span>Write</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
