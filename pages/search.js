import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { addToWhiteList } from '@/redux/features/whiteList/whiteListSlice';
import { productsData } from '@/utlits/productsData';
import ModalWapper from '@/components/ModalWapper/ModalWapper';
import StarRating from '@/components/ui/starRating';

const Search = () => {
  const router = useRouter();
  const data = router.query;
  const [searchResult, setSearchResult] = useState([])
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    if (data.search !== '') {
      const result = productsData.filter(({ department }) => {
        return department.toLocaleLowerCase().includes(data?.search?.toLocaleLowerCase())
      })
      setSearchResult(result)
    }

  }, [data.search])

  return (
    <section className='max-w-7xl mx-auto px-3 mt-12 mb-10'>
      <div className='flex md:flex-row flex-col justify-between md:items-start items-center gap-4'>
        {/* ------ Search Result */}
        {
          searchResult.length ?
            <div>
              {
                searchResult.map(({ id, title, price, rating, image, color, sizes }) => {
                  return (
                    <div key={id} className='flex gap-5 mb-5'>
                      <Link href={`/productDetails/${id}`} >
                        <Image src={image} width={100} height={400} className='bg-white p-3 h-[200px] sm:min-w-[200px] min-w-[160px] object-contain' />
                      </Link>
                      <div className='sm:max-w-[500px]'>
                        <Link href={`/productDetails/${id}`} className='md:text-xl sm:text-lg text-base '>{title}</Link>
                        <div className='flex items-center gap-5 mt-1'>
                          <p className='text-sm'>$<span className='md:text-2xl text-xl font-semibold'>{price}</span> </p>
                          <StarRating star={rating} />
                        </div>
                        <div className='sm:flex gap-5 items-center'>
                          <button className="w-full h-10 bg-orange-500 text-white font-medium mt-4" onClick={openModal}>Add To Cart</button>
                          <button className="w-full h-10 border-orange-500 border font-medium mt-4" onClick={() => (dispatch(addToWhiteList(id)), toast.success('Add To White List Success'))}>Add To Withlist</button>
                        </div>
                      </div>
                      <ModalWapper id={id} title={title} image={image} price={price} color={color} sizes={sizes} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
                    </div>
                  )
                })
              }

            </div>
            :
            <p className='text-3xl font-bold text-red-500'>No product </p>
        }

        {/* ------ Ads Banner */}
        <div style={{ background: `linear-gradient(135deg, #46DD82, #63C52E)` }}>
          <div className=" flex flex-col justify-between  px-5 py-10">
            <div >
              <p className="text-base leading-none text-white">
                Save upto 30%
              </p>
              <p className="text-3xl font-semibold leading-9 text-white py-4">
                Summer Sale
              </p>
              <p className="text-base leading-normal text-white">
                Want to save some cash and still look like a fashion diva ?
                <br />
                Checkout our summer sale now !!!
              </p>
            </div>
            <div className='mt-16' >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ec2.png"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Search