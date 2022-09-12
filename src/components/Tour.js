import { useState } from "react";

export const Tour = ({ id,image,info,name,price,removeTour }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <div className="bg-white rounded-lg drop-shadow-md mt-10">
            <div className="">
            <img className="w-[39rem] rounded-t-lg" src={image} alt="image" />
            <footer className="">
                <div className="tour-info p-3 flex">
                    <h4 className="text-xl text-slate-600">{name}</h4>
                    <h4 className="ml-auto text-sky-500">${price}</h4>
                </div>
                <p className="w-[39rem] p-3 text-slate-400">
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button className="text-red-500" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
                <div className="flex justify-center pb-3">
                    <button className="bg-red-600 p-2 text-white capitalize rounded-md hover:bg-red-500" onClick={() => removeTour(id)}>not interested</button>
                </div>
            </footer>
        </div>
        </div>
    )
}