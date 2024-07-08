import Image from "next/image";
import React from "react";
import shoes_1 from "@/assets/images/man-fashion/shoes-1.png"
const AdsBanner = () => {
    return (
        <div className="max-w-[1900px] mx-auto">
            <div className=" py-6  mt-10" style={{ background: `linear-gradient(135deg, #46DD82, #63C52E)` }}>
                <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto ">
                    <div className="lg:flex md:flex block justify-between items-center">
                        <div className="md:p-0 p-4 ">
                            <p className="text-base leading-none text-white bg-orange-500 inline-block px-4 py-2 rounded-md">Save upto 30%</p>
                            <h2 className="text-9xl font-semibold leading-none text-white py-4 ">Summer Sale</h2>
                            <p className="leading-normal text-white text-lg font-norican">
                                Want to save some cash and still look like a fashion diva ?
                                <br />
                                Checkout our summer sale now !!!
                            </p>
                        </div>
                        <div className="md:p-0 p-4">
                            <Image src={shoes_1} width={400} height={500} className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdsBanner;
