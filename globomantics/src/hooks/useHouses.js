import { useState, useEffect } from "react";

const useHouses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        console.log("Fetching houses...");
        // Simulate fetching data from an API
        const fetchHouses = async () => {
            const response = await fetch("https://localhost:4000/house");
            const houses = await response.json();
            console.log(houses);
            setHouses(houses);
        };
        fetchHouses();
    }, []);

    return {
        houses,
        setHouses
    };
};

export default useHouses;