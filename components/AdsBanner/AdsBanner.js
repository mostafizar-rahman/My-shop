import React from "react";

const AdsBanner = () => {
    return (
        <>
            <div className="py-6 bg-indigo-500 mt-10">
                <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto ">
                    <div className="lg:flex md:flex block justify-between items-center">
                        <div className="md:p-0 p-4">
                            <p className="text-base leading-none text-gray-800">
                                Save upto 30%
                            </p>
                            <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                                Summer Sale
                            </p>
                            <p className="text-base leading-normal text-gray-600">
                                Want to save some cash and still look like a fashion diva ?
                                <br />
                                Checkout our summer sale now !!!
                            </p>
                        </div>
                        <div className="md:p-0 p-4">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ec2.png"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AdsBanner;
