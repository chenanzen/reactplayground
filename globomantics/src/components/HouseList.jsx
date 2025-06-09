import HouseRow from "./HouseRow";

const houses = [
    {
        id: 1,
        address: "123 Main St",
        country: "USA",
        askingPrice: 300000
    },
    {
        id: 2,
        address: "456 Elm St",
        country: "Canada",
        askingPrice: 400000
    },
    {
        id: 3,
        address: "789 Oak St",
        country: "UK",
        askingPrice: 500000
    }
];

const HouseList = () => {
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>Address</td>
                        <td>Country</td>
                        <td>Asking Price</td>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((house) => <HouseRow key={house.id} house={house} />)}
                </tbody>
            </table>
        </>
    ); 
};

export default HouseList;