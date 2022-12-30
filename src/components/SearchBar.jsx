import React from 'react'
import { BsMic, } from 'react-icons/bs'
import { BiCamera, BiSearch } from 'react-icons/bi'
function SearchBar() {
    return (
        <div className='w-full md:w-[600px] px-5 md:px-0'>
            <form action="" className='flex px-3 md:px-6 flex-row items-center justify-between h-10 md:h-14 w-full rounded-md md:rounded-3xl bg-white'>
                <input className='w-full border-none bg-transparent h-10 outline-none p-0 text-base md:text-lg ' type="text" autoFocus spellCheck='false'/>
                <div className='pl-5 flex flex-row space-x-4'>
                    <div className='text-xl delay-100 hover:text-sky-600 md:text-2xl cursor-pointer text-sky-700'><BsMic /></div>
                    <div className='text-xl md:text-2xl cursor-pointer text-sky-700 hover:text-sky-600'><BiCamera /></div>
                    <div className='text-xl md:text-2xl cursor-pointer text-sky-700 hover:text-sky-600'><BiSearch /></div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar