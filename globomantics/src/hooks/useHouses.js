import { useState, useEffect } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchHouses = async () => {
            setLoadingState(loadingStatus.isLoading);

            try {
                const response = await fetch("https://localhost:4000/house");
                const houses = await response.json();
                console.log(houses);
                setHouses(houses);
                setLoadingState(loadingStatus.isLoaded);
            } catch {
                setLoadingState(loadingStatus.isError);
            }
        };

        fetchHouses();
    }, []);

    return {
        houses,
        setHouses,
        loadingState
    };
};

export default useHouses;