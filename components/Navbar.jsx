"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className=''>
            <nav className='justify-between flex px-5 py-3 items-center'>
                <Link href="/" id='logo' className='flex space-x-2'>
                    <Image src='/logo/logo.png' width={50} height={50} alt='no logo' />
                    <h2 className='text-2xl mt-2 font-semibold'>Logix</h2>

                </Link>
                {/**hide the nav links on mobile, display bars/ menu button */}
                <div id='navlinks' className='font-semibold text-lg space-x-6 hidden lg:flex'>
                    <Link href='/craft' className={`${pathname == "/craft" && "border-b-4 border-black"} hover:border-b-8 transition-all`}>Craft</Link>
                    <Link href='/craft' className='hover:border-b-8 transition-all'>AI</Link>
                    <Link href='/craft' className='hover:border-b-8 transition-all'>More</Link>
                </div>
                {/**call to action button must take the user to the most important feature of the app...
                 * In any page except /craft, show the "Get started" button, in the /craft page show the "Contribute"
                 */}
                {pathname == "/craft"? 
                    <div id='github'>
                        <button className='bg-black text-white rounded px-7 py-3'>
                            Contribute
                        </button>
                    </div>:
                        <Link href="/craft" className='bg-black text-white rounded px-7 py-3'>
                            Get Started
                        </Link>
                }
                
                
                

            </nav>
        </div>
    )
}
