import React, { useEffect, useRef, useState } from 'react'
import mslogo from '../images/mslogo.png'
import { BsThreeDots, BsTrophy, BsBell } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { GoThreeBars } from 'react-icons/go'
import background from '../images/background.jpg'
import SideBar from './SideBar'
function Header() {

    const [open, setOpen] = useState(false)
    let sideBarRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if(!sideBarRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);

        //cleanup
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });

    return (
        <div className='sticky top-0 text-white flex items-center justify-between min-w-full h-14'
        ref={sideBarRef}>
            {/* left side of the header */}
            <div className='flex flex-row items-center justify-center space-x-14'>
                <div className='flex flex-row items-center justify-center space-x-1'>
                    <img src={mslogo} className="w-6 h-6 md:w-8 md:h-8" alt="ms-logo" />
                    <h2 className='capitalize flex flex-col md:flex-row font-medium md:font-semibold text-xs md:text-lg'>microsoft&nbsp;<span className=''>bing</span></h2>
                </div>
                <div className='hidden md:flex flex-row flex-shrink justify-center items-center space-x-10 text-xs font-medium'>
                    <a className='opacity-90 hover:opacity-100' href='https://www.google.com/' target="_blank" rel='noreferrer'>Work</a>
                    <a className='opacity-90 hover:opacity-100' href='https://www.google.com/' target="_blank" rel='noreferrer'>Images</a>
                    <a className='opacity-90 hover:opacity-100' href='https://www.google.com/' target="_blank" rel='noreferrer'>Vides</a>
                    <a className='opacity-90 hover:opacity-100' href='https://www.google.com/' target="_blank" rel='noreferrer'>Maps</a>
                    <span className='text-base pr-10 cursor-pointer'><BsThreeDots /></span>
                </div>
            </div>

            {/* Right side of the header */}
            <div className='flex flex-row space-x-4 justify-center items-center text-xs font-medium'>
                <div className='hidden md:flex flex-row space-x-4 justify-center items-center '>

                    <div className='flex flex-row space-x-2 justify-center items-center '>
                        <span className='cursor-pointer'>Sayantan</span>
                        <img className='h-8 w-8 object-cover cursor-pointer rounded-full' src={background} alt="user-img" />
                    </div>

                    <div className='flex flex-row items-center justify-center space-x-2'>
                        <span className='cursor-pointer'>Rewards</span>
                        <span className='text-lg cursor-pointer rounded-full border-2 border-gray-400 p-1'><BsTrophy /></span>
                    </div>
                    <span className='text-xl cursor-pointer'><BsBell /></span>
                </div>
                <span className='text-2xl pr-4 md:p-0 pt-5 cursor-pointer md:text-white z-20' onClick={() => setOpen(!open)}>{open ?<MdClose className='text-black md:text-white'/> : <GoThreeBars/>}</span>
                <SideBar open={open}/>
            </div>
        </div>
    )
}

export default Header