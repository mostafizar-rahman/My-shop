import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FaArrowRight, FaStar } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'

const Sidebar = ({ mainProductList, setProductList }) => {

    const [departmentName, setDepartmentName] = useState([])
    const [brandsName, setBrandsName] = useState([])
    const [colorName, setColorName] = useState([])
    const [ratingValue, setRatingValue] = useState([])
    const [inputPrice, setInputPrice] = useState({ min: 0, max: 0 })


    useEffect(() => {

        if (departmentName.length || brandsName.length || colorName.length || ratingValue.length) {
            const filterProducts = mainProductList.filter(({ department, brands, color, rating }) => {

                const newRating = Math.floor(rating)

                if (departmentName.length && brandsName.length && colorName.length && ratingValue.length) {
                    return (
                        departmentName.some((val) => department === val) &&
                        brandsName.some((val) => brands === val) &&
                        colorName.some((val) => color[0] === val)&&
                        ratingValue.some((val) => newRating === val)
                    )
                }
                else if (departmentName.length && brandsName.length &&  ratingValue.length) {
                    return (
                        departmentName.some((val) => department === val) &&
                        brandsName.some((val) => brands === val) &&
                        ratingValue.some((val) => newRating === val)
                    )
                }
                else if (departmentName.length && brandsName.length &&  colorName.length) {
                    return (
                        departmentName.some((val) => department === val) &&
                        brandsName.some((val) => brands === val) &&
                        colorName.some((val) => color[0] === val)
                    )
                }
                else if (departmentName.length && ratingValue.length &&  colorName.length) {
                    return (
                        departmentName.some((val) => department === val) &&
                        ratingValue.some((val) => newRating === val) &&
                        colorName.some((val) => color[0] === val)
                    )
                }
                else if (brandsName.length && ratingValue.length &&  colorName.length) {
                    return (
                        brandsName.some((val) => brands === val) &&
                        ratingValue.some((val) => newRating === val) &&
                        colorName.some((val) => color[0] === val)
                    )
                }
                else if (departmentName.length && brandsName.length) {
                    return (
                        departmentName.some((val) => department === val) &&
                        brandsName.some((val) => brands === val)
                    )
                }
                else if (departmentName.length && colorName.length) {
                    return (
                        departmentName.some((val) => department === val) &&
                        colorName.some((val) => color[0] === val)
                    )
                }
                else if (brandsName.length && colorName.length) {
                    return (
                        brandsName.some((val) => brands === val) &&
                        colorName.some((val) => color[0] === val)
                    )
                }
                else if (brandsName.length && ratingValue.length) {
                    return (
                        brandsName.some((val) => brands === val) &&
                        ratingValue.some((val) => newRating === val)
                    )
                }
                else if (departmentName.length && ratingValue.length) {
                    return (
                        departmentName.some((val) => department === val) &&
                        ratingValue.some((val) => newRating === val)
                    )
                }
                else if (colorName.length && ratingValue.length) {
                    return (
                        colorName.some((val) => color[0] === val) &&
                        ratingValue.some((val) => newRating === val)
                    )
                }


                return (
                    departmentName.some((val) => department === val) ||
                    brandsName.some((val) => brands === val) ||
                    colorName.some((val) => color[0] === val) ||
                    ratingValue.some((val) => newRating === val)

                )
            })

            setProductList(filterProducts)
        }
        // if have not filter value then load by default all product
        else {
            setProductList(mainProductList)

        }


    }, [departmentName, brandsName, colorName, ratingValue])



    let uniqueCategory = '';
    let uniqueDepartment = []
    let uniqueBrands = []
    let uniqueColors = []
    if (mainProductList.length) {
        // --- Find Category
        mainProductList?.filter(element => {
            const isDuplicate = mainProductList?.includes(element.subCategory);
            if (!isDuplicate) {
                uniqueCategory = element.subCategory;
                return true;
            }
            return false;
        });

        // --- Find all unique Department, Breands, Colors from product list for filtring product
        mainProductList.forEach((element) => {
            if (!uniqueDepartment.includes(element.department)) {
                uniqueDepartment.push(element.department);
            }
            if (!uniqueBrands.includes(element.brands)) {
                uniqueBrands.push(element.brands)
            }
            if (!uniqueBrands.includes(element.color)) {
                uniqueColors.push(element.color[0])
            }
        });
    }

    // ---- Filtering products by Department
    const handleDeparmentFilter = (department) => {
        if (departmentName.includes(department)) {
            setDepartmentName(departmentName.filter((val) => val !== department));
        } else {
            setDepartmentName([...departmentName, department]);
        }
    }

    // ------- Filtering products by Brand
    const handleBrandFilter = (brand) => {
        if (brandsName.includes(brand)) {
            setBrandsName(brandsName.filter((val) => val !== brand));
        } else {
            setBrandsName([...brandsName, brand]);
        }
    }

    // ----- Filtering products by Color
    const handleColorFilter = (color) => {
        if (colorName.includes(color)) {
            setColorName(colorName.filter((val) => val !== color));
        } else {
            setColorName([...colorName, color]);
        }
    }


    // --- Filtering product by rating
    const handleRating = (star) => {
        if (ratingValue.includes(star)) {
            setRatingValue(ratingValue.filter((val) => val !== star));
        } else {
            setRatingValue([...ratingValue, star]);
        }
    }


    // --- Filtering product by Price
    const handlePriceInput = (event) => {
        setInputPrice({ ...inputPrice, [event.target.name]: Number(event.target.value) })
    }
    const handlePriceSubmit = () => {

        const filterProducts = mainProductList.filter(({ price }) => (price >= inputPrice.min && price <= inputPrice.max))
        setProductList(filterProducts)
    }
    return (
        <div className=''>
            {/* ----- Deperment */}
            <div className='mt-0'>
                <b className='text-black/90 '>{uniqueCategory}</b>
                <ul className='flex flex-col'>
                    {
                        uniqueDepartment.map((department, id) => {
                            return (
                                <label className='inline-block' key={id} onChange={() => handleDeparmentFilter(department)} htmlFor={`deperment${id}`}>
                                    <input type="checkbox" id={`deperment${id}`} />
                                    {department}
                                </label>

                            )
                        })
                    }
                </ul>
            </div>
            {/* ----- Price */}
            {/* <div className='mt-3'>
                <b className='text-black/90 '>Price</b>
                <div className='flex gap-1'>
                    <input onChange={handlePriceInput} type="number" name="min" id="" placeholder='Min' className='px-2 py-1 max-w-[80px]' />
                    <input onChange={handlePriceInput} type="number" name="max" id="" placeholder='Max' className='px-2 py-1 max-w-[80px]' />
                    <button onClick={handlePriceSubmit} className='bg-orange-500 px-2'>
                        <FaArrowRight className='text-white ' />
                    </button>
                </div>
            </div> */}
            {/* ----- Brands */}
            <div className='mt-3'>
                <b className='text-black/90 '>Brands</b>
                <ul className='flex flex-col'>
                    {
                        uniqueBrands.map((brand, id) => {
                            return (

                                <label className='inline-block' key={id} onChange={() => handleBrandFilter(brand)} htmlFor={`brands${id}`}>
                                    <input type="checkbox" id={`brands${id}`} />
                                    {brand}
                                </label>

                            )
                        })
                    }
                </ul>
            </div>
            {/* ----- Rating */}
            <div className='mt-3'>
                <b className='text-black/90 '>Rating</b>
                <ul>
                    <li className='flex mb-1'>
                        <label className='inline-block' onClick={() => handleRating(5)} htmlFor={`rating5`}>
                            <input type="checkbox" id={`rating5`} />
                        </label>
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <FaStar className="text-orange-500 cursor-pointer" />
                    </li>
                    <li className='flex mb-1' >
                        <label className='inline-block' onClick={() => handleRating(4)} htmlFor={`rating4`}>
                            <input type="checkbox" id={`rating4`} />
                        </label>
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <AiOutlineStar className="text-orange-500 cursor-pointer" />
                    </li>
                    <li className='flex mb-1' >
                        <label className='inline-block' onClick={() => handleRating(3)} htmlFor={`rating3`}>
                            <input type="checkbox" id={`rating3`} />
                        </label>
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <AiOutlineStar className="text-orange-500 cursor-pointer" />
                        <AiOutlineStar className="text-orange-500 cursor-pointer" />
                    </li>
                    <li className='flex mb-1'>
                        <label className='inline-block' onClick={() => handleRating(2)} htmlFor={`rating2`}>
                            <input type="checkbox" id={`rating2`} />
                        </label>
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <AiOutlineStar className="text-orange-500 cursor-pointer" />
                        <AiOutlineStar className="text-orange-500 cursor-pointer" />
                        <AiOutlineStar className="text-orange-500 cursor-pointer" />
                    </li>
                    <li className='flex'>
                        <label className='inline-block' onClick={() => handleRating(1)} htmlFor={`rating1`}>
                            <input type="checkbox" id={`rating1`} />
                        </label>
                        <FaStar className="text-orange-500 cursor-pointer" />
                        <AiOutlineStar className="text-orange-500 cursor-pointer" />
                        <AiOutlineStar className="text-orange-500 cursor-pointer" />
                        <AiOutlineStar className="text-orange-500 cursor-pointer" />
                        <AiOutlineStar className="text-orange-500 cursor-pointer" />
                    </li>
                </ul>
            </div>
            {/* ---- Colors */}
            <div className='mt-3'>
                <b className='text-black/90 '>Colors</b>
                <ul className='flex flex-col'>
                    {
                        uniqueColors.map((color, id) => {
                            return (

                                <label className='inline-block' onChange={() => handleColorFilter(color)} key={id} htmlFor={`colors${id}`}>
                                    <input type="checkbox" id={`colors${id}`} />
                                    {color}
                                </label>

                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default Sidebar