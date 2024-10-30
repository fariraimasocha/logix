import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
    return (
        <div className=''>
            <nav className='justify-between flex px-10 py-3'>
                <div id='logo' className='flex space-x-2'>
                    <Image src='/logo/logo.png' width={50} height={50} alt='no logo' />
                    <h2 className='text-2xl mt-2 font-semibold'>Logix</h2>

                </div>
                <div id='navlinks' className='font-semibold text-lg space-x-6'>
                    <Link href='/craft'>Craft</Link>
                    <Link href='/craft'>AI</Link>
                    <Link href='/craft'>More</Link>
                </div>
                <div id='github'>
                    <button className='bg-black text-white rounded px-7 py-3'>
                        Contribute
                    </button>
                </div>

            </nav>
        </div>
    )
}
