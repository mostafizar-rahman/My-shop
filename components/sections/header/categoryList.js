
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'
import { categoryListData } from '@/utlits/categoryListData'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


const CategoryList = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(null)

    return (
        <div className=' bg-[#101f32] text-white'>
            <ul>
                {
                    categoryListData.map(({ id, label, subCategory }) => {
                        return (
                            <li key={id} onClick={() => setIsDropdownOpen(isDropdownOpen === null ? id : null)} className=' mb-1 px-3 md:hover:bg-white transition-all duration-500 md:hover:text-black relative group/firstDropdown '>
                                <p className='flex justify-between items-center gap-4'>
                                    <Link href={"#"} className='w-full block py-2' >{label}</Link>
                                    <AiOutlinePlus className='block md:hidden text-white cursor-pointer' />
                                    <MdOutlineKeyboardArrowRight className='md:block hidden text-white transition-all duration-500 md:group-hover/firstDropdown:text-black' />
                                </p>
                                <ul className={`${isDropdownOpen === id ? "max-h-[400px] visible md:invisible opacity-100" : "invisible max-h-0  md:max-h-full"} opacity-0 md:group-hover/firstDropdown:visible md:group-hover/firstDropdown:opacity-100 md:group-hover/firstDropdown:translate-x-0 translate-x-5 transition-all duration-500 ease-in-out static md:absolute md:left-full md:top-0 top-full left-0 text-white min-w-[150px]`}>

                                    {
                                        subCategory.map(({ id, name, path }) => {
                                            return (
                                                <li key={id} className='px-3  hover:bg-white hover:text-black bg-[#101f32]'>
                                                    <Link href={`/category-product/${path}`} className='w-full block py-2'>{name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}



export default CategoryList