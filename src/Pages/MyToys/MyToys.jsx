import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);

    const url = `https://assignment-11-server-six-lovat.vercel.app/specificToys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, []);

    // handleRemoveToy
    const handleRemoveToy = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-six-lovat.vercel.app/specificToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = mytoys.filter(t => t._id !== id);
                            setMytoys(remaining);
                        }
                    })
            }
        })
    }

    // handleUpdateToy
    const handleUpdateToy = id => {
        console.log(id);
    }

    return (
        <div>
            <h2 className="text-center my-10 text-4xl font-semibold">My Toys Products</h2>

            <div className="overflow-x-auto w-full mb-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete Toy</th>
                            <th>Photo</th>
                            <th>Seller Email</th>
                            <th>Toy-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Modify Toy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(mytoy => <MyToysRow
                                key={mytoy._id}
                                mytoy={mytoy}
                                handleRemoveToy={handleRemoveToy}
                                handleUpdateToy={handleUpdateToy}
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;