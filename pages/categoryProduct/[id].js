import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { productsData } from '@/utlits/productsData'
import MainCard from '@/components/Card/MainCard/MainCard'
import { FaAlignRight, FaArrowRight, FaStar } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import Head from 'next/head'

const Product = () => {
    const [productList, setProductList] = useState([])
    const [mainProductList, setMainProductList] = useState([])
    const [departmentName, setDepartmentName] = useState([])
    const [brandsName, setBrandsName] = useState([])
    const [inputPrice, setInputPrice] = useState({ min: 0, max: 0 })
    const { query } = useRouter()

    useEffect(() => {
        const router = query.id
        const queryPrams = router.split("-")
        // --- Filtring main category like Men's Fashon 
        const categoriesProduct = productsData.filter(({ category }) => category === queryPrams[0])
        // --- Filtring product by sub category like Clothing 
        const product = categoriesProduct.filter(({ subCategory }) => subCategory === queryPrams[1])
        setProductList(product)
        setMainProductList(product)




        if (departmentName.length || brandsName.length) {
            // --- Filter product my Department name

            const filterProducts = mainProductList.filter(({ department, brands }) => {
                return (

                    departmentName.some((val) => department === val) ||
                    brandsName.some((brand) => brands === brand)

                )
            })
            setProductList(filterProducts)
        }



    }, [query, departmentName, brandsName])


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
                uniqueColors.push(element.color)
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

    const handleBrandFilter = (brand) => {
        if (brandsName.includes(brand)) {
            setBrandsName(brandsName.filter((val) => val !== brand));
        } else {
            setBrandsName([...brandsName, brand]);
        }
    }


    // --- Filtering product by rating star
    const handleRating = (star) => {
        const filterProducts = mainProductList.filter(({ rating }) => rating === star)
        setProductList(filterProducts)
    }


    // --- Filtering product by Price
    const handlePriceInput = (event) => {
        setInputPrice({ ...inputPrice, [event.target.name]: Number(event.target.value), [event.target.name]: Number(event.target.value) })
    }
    const handlePriceSubmit = () => {
        console.log(inputPrice)
        const filterProducts = mainProductList.filter(({ price }) => (price >= inputPrice.min && price <= inputPrice.max))
        setProductList(filterProducts)
    }


    return (
        <div className='mx-auto max-w-7xl px-3 mt-12 mb-10'>
            <Head>
                <title>MySHOP.com-Product By Category</title>
                <link rel="icon" href="https://cdn.pixabay.com/photo/2017/09/17/02/02/png-2757379_640.png" />
            </Head>
            <div className='grid lg:grid-cols-[18%_auto] md:grid-cols-[26%_auto] sm:grid-cols-1 gap-4 items-start'>
                {/* ----- Filtred List */}
                <div>
                    {/* ----- Deperment */}
                    <div className='mt-3'>
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
                    <div className='mt-3'>
                        <b className='text-black/90 '>Price</b>
                        <div className='flex gap-1'>
                            <input onChange={handlePriceInput} type="number" name="min" id="" placeholder='Min' className='px-2 py-1 max-w-[80px]' />
                            <input onChange={handlePriceInput} type="number" name="max" id="" placeholder='Max' className='px-2 py-1 max-w-[80px]' />
                            <button onClick={handlePriceSubmit} className='bg-orange-500 px-2'>
                                <FaArrowRight className='text-white ' />
                            </button>
                        </div>
                    </div>
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
                            <li className='flex mb-1' onClick={() => handleRating(5)}>
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <FaStar className="text-orange-500 cursor-pointer" />
                            </li>
                            <li className='flex mb-1' onClick={() => handleRating(4)}>
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <AiOutlineStar className="text-orange-500 cursor-pointer" />
                            </li>
                            <li className='flex mb-1' onClick={() => handleRating(3)}>
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <AiOutlineStar className="text-orange-500 cursor-pointer" />
                                <AiOutlineStar className="text-orange-500 cursor-pointer" />
                            </li>
                            <li className='flex mb-1'>
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <FaStar className="text-orange-500 cursor-pointer" />
                                <AiOutlineStar className="text-orange-500 cursor-pointer" />
                                <AiOutlineStar className="text-orange-500 cursor-pointer" />
                                <AiOutlineStar className="text-orange-500 cursor-pointer" />
                            </li>
                            <li className='flex'>
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
                                uniqueColors.map((brand, id) => {
                                    return (

                                        <label className='inline-block' key={id} htmlFor={`colors${id}`}>
                                            <input type="checkbox" id={`colors${id}`} />
                                            {brand}
                                        </label>

                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>
                {/* ---- Products */}
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 '>
                    {productList.length && productList.map(({ id, title, price, image }) => <MainCard key={id} id={id} title={title} price={price} image={image} />)}
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps() {

    const data = productsData

    return { props: { data } }
}


export default Product