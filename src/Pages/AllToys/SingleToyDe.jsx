import { useLoaderData } from "react-router-dom";

const SingleToyDe = () => {
    const toyDetails = useLoaderData();
    const { sellerName, toyName, toyPhoto, toyCategory, toyPrice, toyRatting, toyQuantity, toyDes } = toyDetails;

    return (
        <div>
            <h2 className="text-center my-10 text-4xl font-semibold">Welcome to Single Toy Details</h2>
            <div className="card card-side bg-base-100 w-3/4 mx-auto shadow-xl my-8 grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img className=" p-10" src={toyPhoto} alt="Movie" />
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{toyName}</h2>
                    <div className="my-4">
                        <p><span className="font-semibold">SellerName:</span> {sellerName}</p>
                        <p><span className="font-semibold">Category:</span> {toyCategory}</p>
                        <p><span className="font-semibold">Price:</span> {toyPrice}</p>
                        <p><span className="font-semibold">Available Quantity:</span> {toyQuantity}</p>
                        <p><span className="font-semibold">Toy Ratting:</span> {toyRatting} Star</p>
                    </div>
                    <p>{toyDes}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleToyDe;