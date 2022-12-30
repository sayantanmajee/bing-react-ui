import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import background from '../images/background.jpg'
import { GrNotification, GrSettingsOption } from 'react-icons/gr'
import { BsThreeDots, BsTrophy, BsBell, BsShieldLock, BsPeople } from 'react-icons/bs'
import { AiOutlineHistory, AiFillHome } from 'react-icons/ai'
import { WiMoonAltThirdQuarter } from 'react-icons/wi'
import { MdOutlineFeedback, MdOutlinePrivacyTip } from 'react-icons/md'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'


function SideBar({ open }) {

    const [toggleHomepage, setToggleHomepage] = useState(false)

    return (
        <div className={`${(!open) ? "hidden" : "flex"} bg-white md:bg-gray-100 hover:bg-white drop-shadow-xl md:rounded-md h-screen md:h-fit text-black w-[90%] md:w-[350px] top-0 md:top-14 right-0 select-none md:right-0 fixed md:absolute flex-col p-5 md:p-0 md:py-5 text-xl md:text-sm font-light`}>
            <div className='flex pt-6 md:hidden space-y-6 flex-col items-center justify-center'>
                <img src="" alt="" />
                <img className='h-20 w-20 object-cover cursor-pointer rounded-full' src={background} alt="user-img" />
                <h2>Sayantan</h2>
            </div>
            <div className='flex flex-col space-y-4 md:space-y-0 pt-4 md:pt-0'>
                <span className='flex cursor-pointer md:hidden md:hover:bg-gray-100 md:py-2 items-center px-4 justify-start'><GrNotification className='mr-3' />Notification</span>
                <span className='flex cursor-pointer md:hidden md:hover:bg-gray-100 md:py-2 items-center px-4 justify-start'><BsTrophy className='mr-3' />Rewards</span>
                <span className='flex cursor-pointer md:hover:bg-gray-100 md:py-2 items-center px-4 justify-start'><GrSettingsOption className='mr-3' />Settings</span>
                <span className='flex cursor-pointer md:hover:bg-gray-100 md:py-2 items-center px-4 justify-between'>
                    <div className='flex items-center'>
                        <BsShieldLock className='mr-3' />SafeSearch
                    </div>
                    <span className='text-base'>Moderate</span>
                </span>
                <span className='flex cursor-pointer md:hover:bg-gray-100 md:py-2 items-center px-4 justify-start'><AiOutlineHistory className='mr-3' />Search history</span>
                <span className='flex cursor-pointer md:hover:bg-gray-100 md:py-2 items-center px-4 justify-start'><BsPeople className='mr-3' />My Bing</span>
                <span className='flex cursor-pointer md:hidden md:hover:bg-gray-100 md:py-2 items-center px-4 justify-start'><WiMoonAltThirdQuarter className='mr-3' />Theme</span>
                <span className='flex cursor-pointer md:hover:bg-gray-100 md:py-2 items-center px-4 justify-start'><MdOutlinePrivacyTip className='mr-3' />Privacy</span>
                <span className='flex cursor-pointer md:hover:bg-gray-100 md:py-2 items-center px-4 justify-start'><MdOutlineFeedback className='mr-3' />Feedback</span>
                <div className='hidden md:flex flex-col'>

                    <span className='flex cursor-pointer md:hover:bg-gray-100 md:py-2 items-center px-4 justify-between' onClick={() => setToggleHomepage(!toggleHomepage)}>
                        <div className='flex items-center'>
                            <AiFillHome className='mr-3' />Customize your homepage
                        </div>
                        <span className='text-base'>{!toggleHomepage ?<IoIosArrowDown /> :<IoIosArrowUp /> }</span>
                    </span>
                    <div className={`${!toggleHomepage ? "hidden" : "flex"} flex-col`}>
                        <div className='w-full flex cursor-pointer md:hover:bg-gray-100 justify-between items-center py-2 pl-11 pr-5'>
                            <span>Show menu bar</span>
                            <label htmlFor="toggle-menu" className='cursor-pointer relative w-11 h-5 rounded-full bg-slate-300'>
                                <input type="checkbox" id="toggle-menu" className='sr-only peer' />
                                <span className='w-3 h-3 bg-gray-600 absolute rounded-full left-1 top-1 peer-checked:bg-blue-600 peer-checked:left-7 transition-all duration-200'></span>
                            </label>
                        </div>
                        <div className='w-full flex cursor-pointer md:hover:bg-gray-100 justify-between items-center py-2 pl-11 pr-5'>
                            <span>Show news and interests</span>
                            <label htmlFor="toggle-news" className='cursor-pointer relative w-11 h-5 rounded-full bg-slate-300'>
                                <input type="checkbox" id="toggle-news" className='sr-only peer' />
                                <span className='w-3 h-3 bg-gray-600 absolute rounded-full left-1 top-1 peer-checked:bg-blue-600 peer-checked:left-7 transition-all duration-200'></span>
                            </label>
                        </div>
                        <div className='w-full flex cursor-pointer md:hover:bg-gray-100 justify-between items-center py-2 pl-11 pr-5'>
                            <span>Show homepage image</span>
                            <label htmlFor="toggle-homepage" className='cursor-pointer relative w-11 h-5 rounded-full bg-slate-300'>
                                <input type="checkbox" id="toggle-homepage" className='sr-only peer' />
                                <span className='w-3 h-3 bg-gray-600 absolute rounded-full left-1 top-1 peer-checked:bg-blue-600 peer-checked:left-7 transition-all duration-200'></span>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideBar