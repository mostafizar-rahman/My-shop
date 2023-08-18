import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Link from 'next/link'
import MainCard from '@/components/Card/MainCard/MainCard'
import { productsData } from '@/utlits/productsData'
import Head from 'next/head'
import AdsBanner from '@/components/AdsBanner/AdsBanner'
import { useDispatch } from 'react-redux'
import StarRating from '@/components/StarRating/StarRating'
import { addToCart } from '@/redux/features/addCart/cartSlice'
import { addToWhiteList } from '@/redux/features/whiteList/whiteListSlice'
import { toast } from 'react-hot-toast'

const ProductDeteles = () => {
  const [detailsInfo, setDetailsInfo] = useState(0)
  const [currentImage, setCurrentImage] = useState()
  const [product, setProduct] = useState({})
  const [reletedProducts, setReletedProducts] = useState([])
  const router = useRouter()
  const dispatch = useDispatch()



  useEffect(() => {
    const filteredProduct = productsData.filter(({ id }) => id == router.query.id)
    setProduct(...filteredProduct)

    // ----- Filtering reletad product 
    const reletedFilteredProduct = productsData.filter(({ department }) => department == product?.department)
    setReletedProducts(reletedFilteredProduct)
  }, [product, router])

  const handleImages = (event) => {
    setCurrentImage(event.target.src)
  }
  let id;
  let title;
  let image;
  let price
  if (product) {
    id = product.id
    title = product.title
    image = product.image
    price = product.price
  }

  return (
    <>
      <section className='max-w-7xl mx-auto px-3 mt-12 mb-20'>
        <Head>
          <title>MySHOP.com-Product Details</title>
          <link rel="icon" href="https://cdn.pixabay.com/photo/2017/09/17/02/02/png-2757379_640.png" />
        </Head>
        <div className="flex md:flex-row flex-col items-center md:items-start md:space-x-10">
          <div className="basis-[45%] w-full bg-white flex lg:flex-row flex-col px-2 py-3 mb-5">
            <div className='flex lg:flex-col flex-row order-2 lg:order-1 mx-auto'>
              <Image onClick={handleImages} src={require("../../assets/images/2.png")} alt="img" width={96} height={96} className="w-24 h-24 object-contain rounded-md border mr-5 mb-5 p-2 cursor-pointer" />
              <Image onClick={handleImages} src={require("../../assets/images/2.png")} alt="img" width={96} height={96} className="w-24 h-24 object-contain rounded-md border mr-5 mb-5 p-2 cursor-pointer" />
            </div>
            {product?.image &&
              <Image src={currentImage || product?.image} alt="img" height={400} width={400} className="sm:h-[400px] h-[300px] sm:w-[400px] w-[300px] rounded-md border object-contain order-1 lg:order-2 mb-3 lg:mb-0 mx-auto" />
            }

          </div>
          {/* ------- Title Area */}
          <div className='basis-[55%] w-full bg-white px-2 py-3 mb-5'>
            <p className='text-orange-500 font-medium  text-sm'>Product ID:  <small className='text-black/60'>1235647l</small></p>
            <div className=" mt-4">
              <h1 className=" lg:text-3xl sm:text-2xl text-xl font-semibold text-black/90">
                {product?.title}
              </h1>
              <div className='flex items-center gap-4'>
                <div>
                  <StarRating star={product?.rating} />
                </div>
                <p className='text-sm text-black/90'>445 Reviws</p>
              </div>
              <div className='mt-3 flex items-center gap-3'>
                <p className='text-sm bg-green-600 bg-opacity-70 text-white rounded-full px-2 '>50% off</p>
                <b className="text-black/90 sm:text-2xl text-xl font-bold">${product?.price}</b>
              </div>
            </div>
            <hr className=' my-5 border-black/20' />
            <div>
              <div>
                <p className='font-semibold text-base'>Select Color</p>
                <div className='flex gap-4 mt-1'>
                  <div className='bg-black sm:w-10 sm:h-10 w-8 h-8 cursor-pointer'></div>
                  <div className='bg-red-700 sm:w-10 sm:h-10 w-8 h-8 cursor-pointer'></div>
                  <div className='bg-blue-700 sm:w-10 sm:h-10 w-8 h-8 cursor-pointer'></div>
                </div>
              </div>
              <div className='mt-5'>
                <p className='font-semibold text-base'>Select Size</p>
                <div className='flex gap-4 mt-1'>
                  <div className='bg-slate-200 bg-opacity-70 w-10 h-7 text-sm cursor-pointer flex justify-center items-center'>M</div>
                  <div className='bg-slate-200 bg-opacity-70 w-10 h-7 text-sm cursor-pointer flex justify-center items-center'>L</div>
                  <div className='bg-slate-200 bg-opacity-70 w-10 h-7 text-sm cursor-pointer flex justify-center items-center'>XL</div>
                  <div className='bg-slate-200 bg-opacity-70 w-10 h-7 text-sm cursor-pointer flex justify-center items-center'>XXL</div>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <p className='text-sm text-black/60 mb-1'>Free Delevry</p>
              <p className='text-sm text-black/60 mb-1'>Return Policy</p>
              <p className='text-sm text-black/60 mb-1'>Cash On Devevary</p>
            </div>
            <div className='sm:flex gap-5 items-center'>
              <button className="w-full h-10 bg-orange-500 text-white font-medium mt-4" onClick={() => (dispatch(addToCart({ id, title, price, image })), toast.success("Add To Cart Success"))}>Add To Cart</button>
              <button className="w-full h-10 border-orange-500 border font-medium mt-4" onClick={() => (dispatch(addToWhiteList(id)), toast.success('Add To White List Success'))}>Add To Withlist</button>
            </div>
          </div>

        </div>
        <div className='flex md:flex-row flex-col items-start md:space-x-10'>
          {/* ---- Releted Product */}
          <div className='basis-[45%] w-full order-2 md:order-1 mt-7 md:mt-0'>
            <h5 className='text-xl font-semibold'>Releted Products</h5>
            <div className=' mt-3 grid sm:grid-cols-2 gap-5'>
              {reletedProducts.slice(0, 4).map(({ id, title, image, price }) => <MainCard key={id} title={title} price={price} image={image} />)}
            </div>
          </div>

          {/* ---- Product Detalis Info */}
          <div className=' mt-5 md:max-w-2xl md:w-full basis-[55%] order-1 md:order-2'>
            <div className='flex justify-between bg-white px-2 py-3'>
              <h4 onClick={() => setDetailsInfo(0)} className={`font-semibold cursor-pointer px-1 py-1 relative after:absolute ${detailsInfo === 0 ? 'after:bg-orange-500' : ''}  after:w-full after:h-[1px] after:bottom-0 after:left-0 `}>Description</h4>
              <h4 onClick={() => setDetailsInfo(1)} className={`font-semibold cursor-pointer px-1 py-1 relative after:absolute ${detailsInfo === 1 ? 'after:bg-orange-500' : ''}  after:w-full after:h-[1px] after:bottom-0 after:left-0 `}>Product Details</h4>
              <h4 onClick={() => setDetailsInfo(2)} className={`font-semibold cursor-pointer px-1 py-1 relative after:absolute ${detailsInfo === 2 ? 'after:bg-orange-500' : ''}  after:w-full after:h-[1px] after:bottom-0 after:left-0 `}>Reviews & Rating</h4>
            </div>

            <div className='mt-3'>
              {
                detailsInfo === 0 &&
                <div className='bg-white px-2 py-3'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque sapiente labore sit, culpa quo rem saepe. Deleniti impedit sint, nostrum sequi voluptatem doloribus atque rerum debitis. Adipisci dolore quaerat, repellat totam natus suscipit expedita reiciendis accusamus voluptates velit atque laborum sint odio impedit esse minima deleniti accusantium vitae sit.</p>
                </div>

              }
              {
                detailsInfo === 1 &&
                <div className='bg-white px-2 py-3 sm:w-[96vw] w-[95vw] md:w-full'>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <tbody>
                        <tr >
                          <td className="p-3">
                            <p>Modle</p>
                          </td>
                          <td className="p-3">
                            <p>Oppo 675</p>
                          </td>
                        </tr>
                        <tr >
                          <td className="p-3">
                            <p>Ram</p>
                          </td>
                          <td className="p-3">
                            <p>4GB</p>
                          </td>
                        </tr>
                        <tr >
                          <td className="p-3">
                            <p>Rom</p>
                          </td>
                          <td className="p-3">
                            <p>164GB</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              }
              {
                detailsInfo === 2 &&
                <div className='bg-white px-2 py-3'>
                  <div className='flex justify-between'>
                    <div>
                      <p className='text-3xl font-medium'>4.4<span className='text-black/70 text-2xl'>/5</span> </p>
                      <small>75 Rating</small>
                    </div>
                    <div className="flex flex-col items-center gap-2 max-w-xs w-full">
                      <span className="flex w-full flex-col gap-4 pb-6">
                        <span className="flex w-full items-center gap-2">
                          <label
                            id="p03e-label"
                            for="p03e"
                            className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
                          >
                            5 star
                          </label>
                          <progress
                            aria-labelledby="p03e-label"
                            id="p03e"
                            max="100"
                            value="75"
                            className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                          >
                            75%
                          </progress>
                          <span className="w-9 text-xs font-bold text-slate-700">112 </span>
                        </span>
                        <span className="flex w-full items-center gap-2">
                          <label
                            id="p03e-label"
                            for="p03e"
                            className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
                          >
                            4 star
                          </label>
                          <progress
                            aria-labelledby="p03e-label"
                            id="p03e"
                            max="100"
                            value="28"
                            className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                          >
                            75%
                          </progress>
                          <span className="w-9 text-xs font-bold text-slate-700">17 </span>
                        </span>
                        <span className="flex w-full items-center gap-2">
                          <label
                            id="p03e-label"
                            for="p03e"
                            className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
                          >
                            3 star
                          </label>
                          <progress
                            aria-labelledby="p03e-label"
                            id="p03e"
                            max="100"
                            value="18"
                            className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                          >
                            75%
                          </progress>
                          <span className="w-9 text-xs font-bold text-slate-700">12 </span>
                        </span>
                        <span className="flex w-full items-center gap-2">
                          <label
                            id="p03e-label"
                            for="p03e"
                            className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
                          >
                            2 star
                          </label>
                          <progress
                            aria-labelledby="p03e-label"
                            id="p03e"
                            max="100"
                            value="8"
                            className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                          >
                            75%
                          </progress>
                          <span className="w-9 text-xs font-bold text-slate-700">2 </span>
                        </span>
                        <span className="flex w-full items-center gap-2">
                          <label
                            id="p03e-label"
                            for="p03e"
                            className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
                          >
                            1 star
                          </label>
                          <progress
                            aria-labelledby="p03e-label"
                            id="p03e"
                            max="100"
                            value="10"
                            className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                          >
                            75%
                          </progress>
                          <span className="w-9 text-xs font-bold text-slate-700">4 </span>
                        </span>
                      </span>
                    </div>
                  </div>


                  <div>
                    <div className='inline-block'>
                      <Link href={""} className='flex items-center gap-3 w-full '>
                        <Image src={require("../../assets/images/2.png")} width={50} height={50} className='rounded-full w-10 object-contain h-10 border' />
                        <p className='text-sm'>Ladna</p>
                      </Link>
                    </div>

                    <div className='flex '>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className='text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptas magnam quam rem excepturi officia itaque, corporis mollitia error sit autem dolorem provident nesciunt odit quas fugiat deserunt, tempora dicta.</p>
                  </div>
                </div>
              }

            </div>
          </div>
        </div>
      </section>
      <section className='mb-5'>
        <AdsBanner />
      </section>
    </>
  )
}

export default ProductDeteles