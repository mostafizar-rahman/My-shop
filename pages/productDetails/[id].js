import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const ProductDeteles = () => {
  const [detailsInfo, setDetailsInfo] = useState(0)
  const router = useRouter()

  return (
    <section className='max-w-7xl mx-auto px-3 mt-28'>
      <div className="flex lg:flex-row flex-col items-center lg:items-start lg:space-x-12">
        <div className=" w-full">
          <img src={""} alt="" className=" min-h-[400px]  rounded-md border " />
          <div className="flex flex-wrap mt-5">
            {/* {product?.images?.map((image, id) => (
              ))} */}
            <img src={""} alt="" className="w-24 h-24 rounded-md border mr-5 mb-5" />
          </div>
        </div>
        {/* ------- Title Area */}
        <div className='w-full'>
          <p className='text-orange-500 font-medium  text-sm'>Product ID:  <small className='text-black/60'>1235647l</small></p>
          <div className=" mt-4">
            <h1 className=" lg:text-3xl text-2xl font-semibold text-black/90">
              {"Title"}
            </h1>
            <div className='flex items-center gap-4'>
              <ul className='flex gap-1'>
                <li>
                  <FaStar className='text-sm text-orange-500' />
                </li>
                <li>
                  <FaStar className='text-sm text-orange-500' />
                </li>
                <li>
                  <FaStar className='text-sm text-orange-500' />
                </li>
                <li>
                  <FaStar className='text-sm text-orange-500' />
                </li>
                <li>
                  <FaStar className='text-sm text-orange-500' />
                </li>
              </ul>
              <p className='text-sm text-black/90'>445 Reviws</p>
            </div>
            <div className='mt-3 flex items-center gap-3'>
              <p className='text-sm bg-green-600 bg-opacity-70 text-white rounded-full px-2 '>50% off</p>
              <b className="text-black/90 text-2xl font-bold">$50</b>
            </div>
          </div>
          <hr className=' my-5 border-black/20' />
          <div>
            <div>
              <p className='font-semibold text-base'>Select Color</p>
              <div className='flex gap-4 mt-1'>
                <div className='bg-black w-10 h-10 cursor-pointer'></div>
                <div className='bg-red-700 w-10 h-10 cursor-pointer'></div>
                <div className='bg-blue-700 w-10 h-10 cursor-pointer'></div>
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
          <div>
            <button className="w-full h-10 bg-orange-500 text-white font-medium mt-4">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className='flex justify-end '>
        <div className=' mt-5 max-w-2xl w-full'>
          <div className='flex justify-between'>
            <h4 onClick={() => setDetailsInfo(0)} className={`font-semibold cursor-pointer px-1 py-1 relative after:absolute ${detailsInfo === 0 ? 'after:bg-orange-500' : ''}  after:w-full after:h-[1px] after:bottom-0 after:left-0 `}>Description</h4>
            <h4 onClick={() => setDetailsInfo(1)} className={`font-semibold cursor-pointer px-1 py-1 relative after:absolute ${detailsInfo === 1 ? 'after:bg-orange-500' : ''}  after:w-full after:h-[1px] after:bottom-0 after:left-0 `}>Product Details</h4>
            <h4 onClick={() => setDetailsInfo(2)} className={`font-semibold cursor-pointer px-1 py-1 relative after:absolute ${detailsInfo === 2 ? 'after:bg-orange-500' : ''}  after:w-full after:h-[1px] after:bottom-0 after:left-0 `}>Reviews & Rating</h4>
          </div>

          <div className='mt-3'>
            {
              detailsInfo === 0 &&
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque sapiente labore sit, culpa quo rem saepe. Deleniti impedit sint, nostrum sequi voluptatem doloribus atque rerum debitis. Adipisci dolore quaerat, repellat totam natus suscipit expedita reiciendis accusamus voluptates velit atque laborum sint odio impedit esse minima deleniti accusantium vitae sit.</p>
              </div>

            }
            {
              detailsInfo === 1 &&
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                    <tbody>
                      <tr className="bg-slate-200 bg-opacity-50 ">
                        <td className="p-3">
                          <p>97412378923</p>
                        </td>
                        <td className="p-3">
                          <p>Microsoft Corporation</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            }
            {
              detailsInfo === 2 &&
              <div className="flex flex-col items-center gap-2">
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
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDeteles