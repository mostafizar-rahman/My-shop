import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { productsData } from '@/utlits/productsData'
import MainCard from '@/components/Card/MainCard/MainCard'

const Product = () => {
    const [productList, setProductList] = useState({})
    const [deparmentName, setDeparmentName] = useState([])
    const { query } = useRouter()
  
    useEffect(() => {
        const router = query.id
        const queryPrams = router.split("-")
        const categoriesProduct = productsData.filter(({ category }) => category === queryPrams[0])
        const product = categoriesProduct.filter(({ subCategory }) => subCategory === queryPrams[1])
        setProductList(product)
    }, [query])

    
    let uniqueIds = '';
    let uniqueTitle = []
    if (productList.length) {
        productList?.filter(element => {
            const isDuplicate = productList?.includes(element.subCategory);
            if (!isDuplicate) {
                uniqueIds = element.subCategory;
                return true;
            }
            return false;
        });


        productList.forEach((element) => {
            
            if (!uniqueTitle.includes(element.title)) {
                uniqueTitle.push(element.title);
            }
        });
    }

    const handleDeparmentFilter = (event, title) => {
        deparmentName.forEach((element) => {
           
            if (!deparmentName.includes(element)) {
            }
        })

        setDeparmentName([...deparmentName, title])


    }

    return (
        <div className='mx-auto max-w-7xl px-3 mt-28'>
            <div className='grid lg:grid-cols-[15%_auto] md:grid-cols-[20%_auto] sm:grid-cols-1 gap-4'>
                <div>
                    <div className='mt-3'>
                        <b className='text-black/90 text-lg'>{uniqueIds}</b>
                        <ul>
                            {
                                uniqueTitle.map((title, id) => {
                                    return (

                                        <label className='block' key={id} onChange={(event) => handleDeparmentFilter(event, title)} htmlFor={id}>
                                            <input type="checkbox" id={id} />
                                            {title}
                                        </label>

                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div>
                        <b className='text-black/90 text-lg'>Price</b>
                        <ul className='text-white '>
                            <li className='cursor-pointer text-sm' >Up 200</li>
                        </ul>

                    </div>
                    <div className='mt-3'>
                        <b className='text-black/90 text-lg'>Brands</b>
                    </div>

                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
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