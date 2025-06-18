import "./App.css";
import Banner from "./components/Banner";
import HouseList from "./components/HouseList";
import HouseDetail from "./components/HouseDetail";
import ErrorBoundary from "./components/ErrorBoundary";
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
    <ErrorBoundary fallback="Unable to load application">
      <Banner>Prodviding houses all over the world</Banner>
      {selectedBody}
    </ErrorBoundary>
  );
}

export default App;
