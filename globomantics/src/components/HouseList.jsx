
const HouseList = ({ houses }) => {{
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
                    {houses.map((house) => {
                        return (
                            <tr key={house.id}>
                                <td>{house.address}</td>
                                <td>{house.country}</td>
                                <td>{house.askingPrice}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    ); 
};

export default HouseList;