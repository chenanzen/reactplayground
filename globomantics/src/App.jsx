import "./App.css";
import Banner from "./components/Banner";
import HouseList from "./components/HouseList";
import HouseDetail from "./components/HouseDetail";
import { useState } from "react";
function App() {
  const [selectedHouse, setSelectedHouse] = useState(null);

  let selectedBody;
  if (selectedHouse !== null) {
    selectedBody = <HouseDetail house={selectedHouse} />;
  }
  else {
    selectedBody = <HouseList selectHouse={setSelectedHouse} />
  }

  return (
    <>
      <Banner>Prodviding houses all over the world</Banner>
      {selectedBody}
    </>
  );
}

export default App;
