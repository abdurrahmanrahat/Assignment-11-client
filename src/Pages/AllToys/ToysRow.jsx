import { Link } from "react-router-dom";

const ToysRow = ({ toy }) => {
    const { _id, sellerName, toyName, toyCategory, toyPrice, toyQuantity } = toy;
    return (
        < tr >
            <td>
                {sellerName}
            </td>
            <td>
                {toyName}
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
            <th>
                <Link to={`/alltoys/${_id}`}>
                    <button className="btn btn-ghost btn-xs">View Details</button>
                </Link>
            </th>
        </tr >
    );
};

export default ToysRow;