import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ToyCard = ({ toy }) => {
    console.log(toy);
    const { toy_picture, toy_name, price, rating } = toy;
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl my-10">
            <figure><img className="w-80" src={toy_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy_name}</h2>
                <p>Price: ${price}</p>
                <Rating
                    placeholderRating={rating}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                />
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;