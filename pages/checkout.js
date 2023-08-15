import React from 'react'

const Checkout = () => {
    return (
        <section className='max-w-md  pt-12 pb-10 px-3 bg-white'>
            <div className=' '>
                <form >
                    <div className='flex flex-col gap-5'>
                        <input type="text" placeholder='Name' className='px-2 py-3 w-full border border-gray-300' />
                        <input type="email" placeholder='Email' className='px-2 py-3 w-full border border-gray-300' />
                        <input type="number" placeholder='Number' className='px-2 py-3 w-full border border-gray-300' />
                        <input type="text" placeholder='address' className='px-2 py-3 w-full border border-gray-300' />
                        <div className='flex gap-5 justify-between'>
                            <input type="text" placeholder='City' className='px-2 py-3 w-full border border-gray-300' />
                            <input type="text" placeholder='State' className='px-2 py-3 w-full border border-gray-300' />
                            <input type="number" placeholder='ZIP code' className='px-2 py-3 w-full border border-gray-300' />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn bg-orange-500 hover:scale-90 duration-700 ease-in-out text-white rounded-sm inline-block sm:px-16 px-10 py-2 sm:py-3 mt-5"
                    >
                        Order
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Checkout