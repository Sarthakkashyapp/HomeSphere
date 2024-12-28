'use client';

import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link href='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Home</span>
            <span className='text-slate-700'>Sphere</span>
          </h1>
        </Link>
        <form
          className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
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
            <Link href='/sign-in'>
              <li className='hidden md:inline text-slate-700 hover:underline'>
                Sign In
              </li>
            </Link>
        </ul>
      </div>
    </header>
  );
}
