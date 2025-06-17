

const HouseDetail = ({ house }) => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                <h5 className="themeFontColor">{house.address}</h5>
            </div>
            <div className="card-body">
                <p><strong>Country:</strong> {house.country}</p>
                <p><strong>Asking Price:</strong> {house.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>
        </div>
    );
}

export default HouseDetail;