import { Tour } from "./Tour";

export const Tours = ({ tours,removeTour }) => {
    return (
        <div>
            <div className="title flex justify-center">
                <h2 className="text-4xl capitalize font-bold">Our tours</h2>
                <div className="underline"></div>
            </div>
            <div className="flex justify-center">
                <div className="">
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} />
                })}
                </div>
            </div>
        </div>
    )
}