import { categoryListData } from '@/utlits/categoryListData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeCategoryCard = () => {
    return (
        <div className='mx-auto max-w-7xl px-3 mt-14'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                {
                    categoryListData.slice(0, 3).map(({ id, category, subCategory }) => {
                        return (
                            <div className=" rounded-md bg-white p-5">
                                <h3 className="font-semibold text-xl">{category}</h3>
                                <div className="grid md:grid-cols-3 grid-cols-2 gap-5 mt-3 ">
                                    {subCategory.slice(0, 6).map(({ id, name, image, path }) => {
                                        return (
                                            <Link
                                                key={id}
                                                href={`/category-product/${path}`}
                                                className="border border-slate-200 rounded-md py-1 px-2  "
                                            >
                                                <Image
                                                    alt="image"
                                                    src={image}
                                                    width={150}
                                                    height={100}
                                                    className="w-[120px] h-[100px] object-contain"
                                                />
                                                <small>{name}</small>
                                            </Link>
                                        );
                                    })}
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeCategoryCard