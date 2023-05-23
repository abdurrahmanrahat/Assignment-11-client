import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const AddAToy = () => {

    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;

        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const toyPhoto = form.toyPhoto.value;
        const toyCategory = form.toyCategory.value;
        const toyPrice = form.toyPrice.value;
        const toyRatting = form.toyRatting.value;
        const toyQuantity = form.toyQuantity.value;
        const toyDes = form.toyDes.value;

        const newToy = { sellerName, email, toyName, toyPhoto, toyCategory, toyPrice, toyRatting, toyQuantity, toyDes }
        console.log(newToy);

        // send data 
        fetch('https://assignment-11-server-six-lovat.vercel.app/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }

    return (
        <div>
            <h2 className="text-center text-3xl my-8 font-semibold">Add Your Toy Products</h2>

            <form onSubmit={handleAddToy} className="w-2/3 mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" placeholder="Toy name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Photo URL</span>
                        </label>
                        <input type="text" name="toyPhoto" placeholder="Toy Photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select Toy Category</span>
                        </label>
                        <select name="toyCategory" className="select select-bordered w-full">
                            <option>Skateboard</option>
                            <option>Golf Set</option>
                            <option>Plastic Toys</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <input type="text" name="toyPrice" defaultValue='$' placeholder="Toy price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Ratting</span>
                        </label>
                        <input type="text" name="toyRatting" defaultValue='5' placeholder="Toy rattings" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available  Quantity</span>
                        </label>
                        <input type="text" name="toyQuantity" placeholder="Toy quantity" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Description</span>
                        </label>
                        <input type="text" name="toyDes" placeholder="Toy description" className="input input-bordered" required />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary btn-block" value="Add A Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;