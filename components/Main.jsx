import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Main() {

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center pt-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
                    Find Your Next Micro SaaS Idea
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Generate validated ideas and start building your business today!
                </p>
                <Link href='/create'>
                    <div className="flex justify-center items-center">
                        <Button className="bg-blue-600 w-64 h-14 font-bold text-white hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105">
                            Generate Ideas
                        </Button>
                    </div>
                </Link>
                <div className='flex items-center justify-center mt-8'>
                    <Image
                        src='/hero.jpg'
                        width={900}
                        height={700}
                        alt='Hero'
                        className='rounded-lg shadow-lg'
                        priority
                    />
                </div>
            </div>
        </div>
    )
}