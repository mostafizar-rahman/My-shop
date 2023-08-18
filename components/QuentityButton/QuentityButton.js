import { useDispatch } from 'react-redux'
import { dicrementProduct, incrementProduct } from '@/redux/features/addCart/cartSlice'


const QuentityButton = ({id, quantity}) => {
    const dispatch = useDispatch()
    console.log(id, quantity)
    return (
        <div >
            <div>
                <div className="flex items-center rounded border border-gray-200 h-8">
                    <button
                        onClick={() => dispatch(dicrementProduct(id))}
                        type="button"
                        className="h-8 w-8  text-black/70 bg-white transition hover:opacity-75 rounded-l"
                    >
                        -
                    </button>

                    <span>
                        <input
                            type="number"
                            id="Quantity"
                            value={quantity}
                            readOnly
                            className="h-10 w-16 border-y-0 bg-transparent text-white border-gray-200 text-center "
                        />
                    </span>

                    <button
                        onClick={() => dispatch(incrementProduct(id))}
                        type="button"
                        className="h-8 w-8  text-black/70 bg-white transition hover:opacity-75 rounded-r"
                    >
                        +
                    </button>
                </div>
            </div>

           
        </div>
    )
}

export default QuentityButton