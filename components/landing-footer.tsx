import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub  } from 'react-icons/fa';
import Image from 'next/image'

export const LandingFooter = () => {
  return (
    <footer className="py-4 mb-20 mt-20 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <aside className="flex items-center gap-2 justify-center sm:justify-start mb-4 sm:mb-0">
            <Image
              src={'/logo.png'}
              width={40}
              height={40}
              alt="logo"
            />
            <h2 className="text-xl font-bold">MatrixAI</h2>
          </aside>
          <p>Contact us: info@matrixai.com</p>
        </div>
        <div>
          <div className="flex justify-center sm:justify-start space-x-6 py-2">
            <Link href="https://facebook.com"
              className="hover:text-blue-700">
                <FaFacebookF size={22}/>
            </Link>
            <Link href="https://twitter.com"
              className="hover:text-blue-300">
                <FaTwitter size={22}/>
            </Link>
            <Link href="https://instagram.com"
              className="hover:text-pink-500">
                <FaInstagram size={22}/>
            </Link>
            <Link href="https://www.linkedin.com/in/jeffjiang13"
              className="hover:text-blue-500">
              <FaLinkedinIn size={22}/>
            </Link>
            <Link href="https://github.com/jeffjiang13"
              className="hover:text-gray-500">
              <FaGithub size={22}/>
            </Link>
          </div>
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} MatrixAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
