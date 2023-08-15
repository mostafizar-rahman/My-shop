import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <section className='max-w-7xl mx-auto px-3 mt-12 mb-10'>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14307.578975944003!2d88.9406626173828!3d26.297511998552544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1692108560250!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    style={{border:'0px'}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
            {/* contact form */}
            <div className=" md:flex md:gap-16 gap-0 mt-16">
                <div className="space-y-3  md:w-[40%]">
                    <div className="bg-white flex flex-col justify-center items-center h-[100px] sm:min-h-[120px] rounded-sm py-4 group">
                        <div className="group-hover:scale-90 duration-700">
                            <Image
                                className='w-10 sm:w-14 lg:w-full'
                                alt="img"
                                src={require("../assets/icons/location.png")}
                            />
                        </div>
                        <p className="mt-3 text-black/70">Dahagram, Bangladesh</p>
                    </div>
                    <div className="bg-white  flex flex-col justify-center items-center h-[100px] sm:min-h-[120px] rounded-sm py-4 group">
                        <div className="group-hover:scale-90 duration-700">
                            <Image
                                className='w-10 sm:w-14 lg:w-full'
                                alt="img"
                                src={require("../assets/icons/email.png")}
                            />
                        </div>
                        <p className="mt-3 text-black/70">dev.mostafizar@gmail.com</p>
                    </div>

                    <div className="bg-white  flex flex-col justify-center items-center h-[100px] sm:min-h-[120px] rounded-sm py-4 group">
                        <div className="group-hover:scale-90 duration-700">
                            <Image
                                className='w-10 sm:w-14 lg:w-full'
                                alt="img"
                                src={require("../assets/icons/call.png")}
                            />
                        </div>
                        <p className="mt-3 text-black/70">+8801575699193</p>
                    </div>
                </div>

                <div className="mt-8 md:mt-0 md:w-[60%]">
                    <form  >
                        <div className="flex sm:flex-row flex-col justify-between gap-x-7">
                            <div className="sm:w-1/2">
                                <label htmlFor="name" className="text-black/70">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    className="border -nborder-nonetext-black/70  rounded-sm px-4 py-3 outline-none w-full"
                                />

                            </div>
                            <div className="sm:w-1/2 mt-5 sm:mt-0">
                                <label htmlFor="email" className="text-black/70">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className="border-none text-black/70 rounded-sm px-4 py-3 outline-none focus:outline-none w-full"
                                />

                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="message" className="text-black/70">
                                Message
                            </label>
                            <textarea
                                name="message"
                                placeholder="Message"
                                id="message"
                                className="border-none text-black/70 rounded-sm px-4 py-3 outline-none w-full min-h-[150px]"
                            ></textarea>

                        </div>
                        <button
                            type="submit"
                            className="btn bg-orange-500 hover:scale-90 duration-700 ease-in-out text-white rounded-sm inline-block sm:px-16 px-10 py-2 sm:py-3 mt-5"
                        >
                            Contect
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact