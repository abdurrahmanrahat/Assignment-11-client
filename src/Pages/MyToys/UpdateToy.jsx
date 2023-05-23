import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const sinToy = useLoaderData();
    console.log(sinToy);

    const handleUpdateForm = event => {
        event.preventDefault();
        const form = event.target;

        const toyPrice = form.toyPrice.value;
        const toyQuantity = form.toyQuantity.value;
        const toyDes = form.toyDes.value;

        const updatedValue = {
            toyPrice,
            toyQuantity,
            toyDes
        }

        // update a toy
        fetch(`http://localhost:5000/specificToys/${sinToy._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    // update state
                    // const remaining = bookings.filter(booking => booking._id !== id);
                    // const updated = bookings.find(booking => booking._id === id);
                    // updated.status = 'confirm';
                    // const newBookings = [updated, ...remaining];
                    // setBookings(newBookings);
                }
            })
    }

    return (
        <div>
            <h2 className="text-center my-10 text-4xl font-semibold">Specific Update Toy Page</h2>

            <form onSubmit={handleUpdateForm} className="w-2/3 mx-auto my-10">
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <input type="text" name="toyPrice" defaultValue={sinToy.toyPrice} placeholder="Toy price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available  Quantity</span>
                        </label>
                        <input type="text" name="toyQuantity" defaultValue={sinToy.toyQuantity} placeholder="Toy quantity" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Description</span>
                        </label>
                        <input type="text" name="toyDes" defaultValue={sinToy.toyDes} placeholder="Toy description" className="input input-bordered" required />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary btn-block" value="Update Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;