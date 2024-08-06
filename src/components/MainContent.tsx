import Image from 'next/image'
import React from 'react'
import Dropdown from './ui/Dropdown'
import { Updock } from 'next/font/google'
import Upvote from './ui/Upvote'

function MainContent() {
    return (
        <div className='mx-auto w-[90%] md:w-full max-w-screen-lg  md:px-20'>
            <div>
                <Image src={'/logo.jpeg'} alt='logo' width={100} height={100} className='w-[60px] h-[60px] md:w-[100px] md:h-[100px]' />
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
                <div>
                    <h1 className='font-bold text-3xl'>VideoDubber - Fast Video Translator
                    </h1>
                    <p className='text-xl font-thin text-slate-500'>Translate videos in your own voice, globalize in a click!</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Dropdown />
                    <Upvote />
                </div>
            </div>
        </div>
    )
}

export default MainContent