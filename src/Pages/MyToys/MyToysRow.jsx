import { Link } from "react-router-dom";

const MyToysRow = ({ mytoy, handleRemoveToy, handleUpdateToy }) => {
    const { _id, email, toyPhoto, toyCategory, toyPrice, toyQuantity } = mytoy;
    return (
        < tr >
            <td>
                <button onClick={() => handleRemoveToy(_id)} className="btn btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <img className="w-28 rounded-full" src={toyPhoto} alt="" />
            </td>
            <td>
                {email}
            </td>
            <td>
                {toyCategory}
            </td>
            <td>
                {toyPrice}
            </td>
            <td>
                {toyQuantity}
            </td>
            <td>
                <Link to={`/mytoys/${_id}`}>
                    <button onClick={() => handleUpdateToy(_id)} className="btn btn-outline btn-sm">Update</button>
                </Link>
            </td>
        </tr >
    );
};

export default MyToysRow;