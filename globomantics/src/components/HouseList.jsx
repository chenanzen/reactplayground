import HouseRow from "./HouseRow";
import useHouses from "../hooks/useHouses";
import loadingStatus from "../helpers/loadingStatus";
import LoadingIndicator from "./LoadingIndictor";
import ErrorBoundary from "./ErrorBoundary";

const HouseList = ({selectHouse}) => {
    const {houses, setHouses, loadingState} = useHouses();

    if (loadingState !== loadingStatus.isLoaded) {
        return <LoadingIndicator status={loadingState} />;
    }
    const addHouse = () => {
        const newHouse = {
            id: houses.length + 1,
            address: "New House Address",
            country: "New Country",
            Price: 600000
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
                    <ErrorBoundary fallback="Unable to render house rows">
                        {houses.map((house) => <HouseRow selectHouse={selectHouse} key={house.id} house={house} />)}
                    </ErrorBoundary>
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>Add House</button>
        </>
    ); 
};

export default HouseList;