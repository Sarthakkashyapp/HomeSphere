'use client';

import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Hamburger from 'react-hamburger-menu';

export default function Header() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(searchParams);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    router.push(`/search?${searchQuery}`);
  };
  
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Home</span>
            <span className='text-slate-700'>Sphere</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form
          className='bg-slate-100 p-3 rounded-lg flex items-center' 
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='hidden md:flex gap-4'>
          <Link href='/'>
            <li className='hidden md:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link href='/about'>
            <li className='hidden md:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link href='/create-listings'>
            <li className='hidden md:inline text-slate-700 hover:underline'>
              Create Listings
            </li>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href='/sign-in'>
              <li className='hidden md:inline text-slate-700 hover:underline'>
                Sign In
              </li>
            </Link>
          </SignedOut>  
        </ul>

        {/* Hamburger Menu */}
        <div className='md:hidden hover:cursor-pointer'>
          <Hamburger
            isOpen={isOpen}
            menuClicked={() => setIsOpen(!isOpen)}
            width={24}
            height={18}
            strokeWidth={2}
            color='black'
            borderRadius={3}
            animationDuration={0.3}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden bg-slate-200 flex flex-col items-center py-4'>
          <Link href='/'>
            <li
              className='text-slate-700 hover:underline py-2'
              onClick={() => setIsOpen(false)}
            >
              Home
            </li>
          </Link>
          <Link href='/about'>
            <li
              className='text-slate-700 hover:underline py-2'
              onClick={() => setIsOpen(false)}
            >
              About
            </li>
          </Link>
          <Link href='/create-listings'>
            <li
              className='text-slate-700 hover:underline py-2'
              onClick={() => setIsOpen(false)}
            >
              Create Listings
            </li>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href='/sign-in'>
              <li
                className='text-slate-700 hover:underline py-2'
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </li>
            </Link>
          </SignedOut>
        </ul>
      )}
    </header>
  );
}
