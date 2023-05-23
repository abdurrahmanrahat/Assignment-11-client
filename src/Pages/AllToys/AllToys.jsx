import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
    const allToys = useLoaderData();
    // console.log(allToys);

    return (
        <div>
            <h2 className="text-center my-10 text-4xl font-semibold">All Toys List</h2>

            <div className="overflow-x-auto w-full mb-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>See More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy => <ToysRow
                                key={toy._id}
                                toy={toy}
                            ></ToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;