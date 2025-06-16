
import React, { useState } from "react";    
import HouseRow from "./HouseRow";

const houseArray = [
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
    const [houses, setHouses] = useState(houseArray);

    const addHouse = () => {
        const newHouse = {
            id: houses.length + 1,
            address: "New House Address",
            country: "New Country",
            askingPrice: 600000
        };
        setHouses([...houses, newHouse]);
    }
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
            <button className="btn btn-primary" onClick={addHouse}>Add House</button>
        </>
    ); 
};

export default HouseList;