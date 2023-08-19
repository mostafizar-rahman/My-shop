import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { toast } from 'react-hot-toast';
import { AiOutlineClose } from "react-icons/ai"
import { addToCart } from '@/redux/features/addCart/cartSlice';
import QuentityButton from '../QuentityButton/QuentityButton';
import { useState } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalWapper = ({ modalIsOpen, setIsOpen, id, title, price, image, color, sizes }) => {
    const dispatch = useDispatch()

    const [activeColor, setActiveColor] = useState(null);
    const [activeSize, setActiveSize] = useState(null);

    const handleColorClick = (cl) => {
        setActiveColor(cl);
    };
    const handleSizeClick =(siz)=>{
        setActiveSize(siz)
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}

            >
                <button className='absolute right-1 top-1 bg-orange-500 text-white w-8 h-8 rounded-full flex justify-center items-center' onClick={closeModal}>
                    <AiOutlineClose />
                </button>

                <div className='mt-5'>
                    <div className='border'>
                        <Image src={image} width={300} height={300} className='mx-auto h-[250px] object-contain' alt='image' />
                    </div>
                    <div className='mt-2'>
                        <h4 className="text-base font-medium">
                            {title.length > 50 ? title.slice(0, 50) + '...' : title}
                        </h4>
                        <p className=" font-bold text-xl "> <span className="text-sm font-normal"></span>${price}</p>
                    </div>
                    <div className='mt-3' >
                        <div>
                            <p className='font-semibold text-sm sm:text-base'>Select Color</p>
                            <div className='flex gap-4 mt-1'>
                                {
                                    color?.map((cl, index) => {
                                        const colorName = cl.toLowerCase()
                                        return (
                                            <div
                                                key={index}
                                                className={`  w-7 h-7 sm:w-9 sm:h-9 cursor-pointer ${activeColor === colorName ? 'bg-transparent' : ''}`}
                                                style={{ backgroundColor: activeColor === colorName ? "transparent" : colorName }}
                                                onClick={() => handleColorClick(colorName)}
                                            ></div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className='mt-2'>
                            <p className='font-semibold text-sm sm:text-base'>Select Size</p>
                            <div className='flex gap-4 mt-1'>
                                {
                                    sizes?.map((siz, index) => {
                                        const size = siz.toLowerCase()
                                        return (
                                            <div
                                                key={index}
                                                className={` sm:w-10 w-8 h-7 text-[12px] sm:text-sm cursor-pointer flex justify-center items-center ${activeSize === size ? "bg-orange-500 text-white":"bg-slate-200 bg-opacity-70"} `}
                                                onClick={() => handleSizeClick(size)}
                                            >
                                                <span>{size}</span>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                        {/* <div className='inline-block mt-3 bg-slate-700'>
                            <QuentityButton id={id}  />
                        </div> */}
                    </div>

                    <button onClick={() => (dispatch(addToCart({ id, title, price, image, activeColor, activeSize })), toast.success("Add To Cart Success"))} className="w-full h-10 bg-orange-500 text-white font-medium mt-4 hover:scale-90 duration-700 ease-in-out  left-0">Add To Cart</button>
                </div>


            </Modal>
        </div>
    )
}

export default ModalWapper