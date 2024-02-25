import { FaStar } from "react-icons/fa"

const ProductCard = ({ id, image, title, price }) => {
    return (
        <div key={id} className="h-[370px] 2xl:h-[420px] w-[300px] text-black rounded-xl mb-2 cursor-pointer shadow-[rgba(_0,_0,_0,_.24)_0px_3px_8px]">
            <div className="px-5">
                <img src={image} alt={title} width={400} className="h-56 2xl:h-64 rounded-t-xl w-full" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4 overflow-hidden whitespace-nowrap text-ellipsis w-full px-3">{title}</h1>
                <div className="flex gap-10 pt-2">
                    <h2 className="font-medium text-lg">${price}$</h2>
                </div>
            </div>

            <div className="flex gap-8 pt-4 justify-center items-center">
                <button className="bg-DarkColor hover:bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
                    Add to Card
                </button>
                <div className="flex gap-1 items-center">
                    <h2>5.0</h2>
                    <FaStar className="text-yellow-300" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard