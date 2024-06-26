import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { UserButton, SignedIn } from '@clerk/nextjs'

const Navbar = () => {
  return (
     <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-3">
        <Image 
          src='/icons/logo.svg'
          width={32}
          height={32}
          alt='ZoomSphere'
          className='max-sm:size-10 '
        />
        <p className='text-[26px] font-bold text-white max-sm:hidden tracking-wide'>ZoomSphere</p>
      </Link>

      <div className="flex-between gap-5">
        {/* CLerk user management */} 
        <SignedIn>
              <UserButton />
        </SignedIn>
        
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar