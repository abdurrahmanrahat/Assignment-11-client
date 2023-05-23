
const ToysRow = ({ toy }) => {
    const { sellerName, toyName, toyCategory, toyPrice, toyQuantity } = toy;
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
                <button className="btn btn-ghost btn-xs">View Details</button>
            </th>
        </tr >
    );
};

export default ToysRow;