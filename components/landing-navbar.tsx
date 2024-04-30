"use client"
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FaBars } from 'react-icons/fa';
import ModeToggle from '@/components/mode-toggle';

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image layout="fill" alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold", font.className)}>
          MatrixAI
        </h1>
      </Link>
      <div className="hidden sm:flex items-center gap-x-4">
        <Link href="/pricing" className=" hover:text-gray-400">Pricing
        </Link>
        <Link href="/documentation" className=" hover:text-gray-400">Documentation
        </Link>
        <Link href="/overview" className=" hover:text-gray-400">Overview
        </Link>
        <Link href="/contact" className=" hover:text-gray-400">Contact
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full hover:bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white">
            Get Started
          </Button>
        </Link>
        <ModeToggle />
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="pt-1 pl-1">
          <FaBars size={24} />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-14 right-0 bg-opacity-75 py-4 px-8 flex flex-col items-start sm:hidden z-50">
        <Link href="/pricing" className="py-2" onClick={() => setIsOpen(false)}>Pricing
          </Link>
          <Link href="/documentation" className="py-2" onClick={() => setIsOpen(false)}>Documentation
          </Link>
          <Link href="/overview" className="py-2" onClick={() => setIsOpen(false)}>Overview
          </Link>
          <Link href="/contact" className="py-2" onClick={() => setIsOpen(false)}>Contact
          </Link>
        </div>
      )}
    </nav>
  );
};
