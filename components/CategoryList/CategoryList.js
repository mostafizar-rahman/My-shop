
import { categoryListData } from '@/utlits/categoryListData'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


const CategoryList = () => {
    const [categorys, setCategorys] = useState([])
    const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(null)
    const [isSmallDevice, setIsSmallDevice] = useState(false);


    useEffect(() => {
        setCategorys(categoryListData)

        const checkScreenSize = () => {
            setIsSmallDevice(window.innerWidth < 768);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);


        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [])


    //  dropdown menu show small divice
    const handleFirstDropdown = (id) => {
        if (isSmallDevice) {
            if (isFirstDropdownOpen === null) {

                setIsFirstDropdownOpen(id)
            }
            else {
                setIsFirstDropdownOpen(null)
            }
        }

    }


    return (
        <div className=' bg-[#101f32] text-white'>
            <ul>
                {
                    categorys.map(({ id, category, subCategory }) => {
                        return (
                            <li key={id} onClick={() => handleFirstDropdown(id)} className=' mb-1 px-3 py-2  md:hover:bg-white md:hover:text-black relative group/firstDropdown '>
                                <div className='flex justify-between items-center gap-4'>
                                    <Link href={"#"} className='w-full block ' >{category}</Link>
                                    <AiOutlinePlus className='block md:hidden text-white ' />
                                    <MdOutlineKeyboardArrowRight className='md:block hidden text-white md:group-hover/firstDropdown:text-black'/>
                                </div>
                                <ul className={`${isFirstDropdownOpen === id ? "h-auto visible " : "invisible h-0"}  md:group-hover/firstDropdown:visible static md:absolute md:left-full md:top-0 top-full left-0  bg-[#101f32] text-white min-w-[150px] md:h-auto`}>

                                    {
                                        subCategory.map(({ id, name }) => {
                                            return (
                                                <li key={id} className='px-3 py-2 mb-1 hover:bg-white hover:text-black'>
                                                    <Link href={`/categoryProduct/${category}-${name}`} className='w-full block'>{name}</Link>
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