import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({house, selectHouse}) => {
    return (
        <tr onClick={() => selectHouse(house)} className="clickable">
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
                {currencyFormatter.format(house.price)}
            </td>
        </tr>
    );
}

export default HouseRow;